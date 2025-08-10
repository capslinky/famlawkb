import { NextRequest, NextResponse } from 'next/server';

// Store analytics data (in production, use a database or analytics service)
const analyticsStore: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Add server-side timestamp and IP
    const enrichedData = {
      ...data,
      serverTimestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      userAgent: request.headers.get('user-agent'),
    };

    // In production, send to analytics service or store in database
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics Measurement Protocol
      if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
        await sendToGoogleAnalytics(enrichedData);
      }
      
      // Example: Store in database
      // await db.analytics.create({ data: enrichedData });
    } else {
      // In development, store in memory
      analyticsStore.push(enrichedData);
      console.log('Analytics Event:', enrichedData);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}

// Get analytics data (development only)
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Not available in production' },
      { status: 403 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const action = searchParams.get('action');
  const limit = parseInt(searchParams.get('limit') || '100');

  let filteredData = [...analyticsStore];

  if (category) {
    filteredData = filteredData.filter(event => event.category === category);
  }

  if (action) {
    filteredData = filteredData.filter(event => event.action === action);
  }

  // Sort by timestamp descending and limit
  filteredData.sort((a, b) => 
    new Date(b.serverTimestamp).getTime() - new Date(a.serverTimestamp).getTime()
  );
  
  filteredData = filteredData.slice(0, limit);

  return NextResponse.json({
    events: filteredData,
    total: analyticsStore.length,
    filtered: filteredData.length,
  });
}

// Helper function to send events to Google Analytics
async function sendToGoogleAnalytics(data: any) {
  const measurementId = process.env.GA_MEASUREMENT_ID;
  const apiSecret = process.env.GA_API_SECRET;
  
  if (!measurementId || !apiSecret) return;

  const payload = {
    client_id: data.sessionId || 'anonymous',
    events: [
      {
        name: data.action.toLowerCase().replace(/\s+/g, '_'),
        params: {
          event_category: data.category,
          event_label: data.label,
          value: data.value,
          engagement_time_msec: '100',
          ...data.metadata,
        },
      },
    ],
  };

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
  } catch (error) {
    console.error('Failed to send to Google Analytics:', error);
  }
}