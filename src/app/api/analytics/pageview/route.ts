import { NextRequest, NextResponse } from 'next/server';

// Store pageview data (in production, use a database or analytics service)
const pageviewStore: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Add server-side data
    const enrichedData = {
      ...data,
      serverTimestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
    };

    // Calculate session data
    const sessionId = data.sessionId || generateSessionId();
    enrichedData.sessionId = sessionId;

    // In production, send to analytics service or store in database
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to analytics service
      // await analyticsService.trackPageview(enrichedData);
      
      // Example: Store in database
      // await db.pageviews.create({ data: enrichedData });
    } else {
      // In development, store in memory
      pageviewStore.push(enrichedData);
      console.log('Pageview:', enrichedData);
    }

    return NextResponse.json({ 
      success: true,
      sessionId 
    });
  } catch (error) {
    console.error('Pageview tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track pageview' },
      { status: 500 }
    );
  }
}

// Get pageview analytics (development only)
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Not available in production' },
      { status: 403 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '100');
  const groupBy = searchParams.get('groupBy');

  let filteredData = [...pageviewStore];

  if (path) {
    filteredData = filteredData.filter(pv => pv.path === path);
  }

  if (category) {
    filteredData = filteredData.filter(pv => pv.category === category);
  }

  // Group by if requested
  if (groupBy === 'path') {
    const grouped = filteredData.reduce((acc, pv) => {
      if (!acc[pv.path]) {
        acc[pv.path] = {
          path: pv.path,
          title: pv.title,
          category: pv.category,
          views: 0,
          uniqueVisitors: new Set(),
          avgTimeOnPage: 0,
        };
      }
      acc[pv.path].views++;
      acc[pv.path].uniqueVisitors.add(pv.sessionId);
      return acc;
    }, {} as Record<string, any>);

    const groupedArray = Object.values(grouped).map((item: any) => ({
      path: item.path,
      title: item.title,
      category: item.category,
      views: item.views,
      uniqueVisitors: item.uniqueVisitors.size,
      avgTimeOnPage: item.avgTimeOnPage,
    }));

    // Sort by views descending
    groupedArray.sort((a, b) => b.views - a.views);

    return NextResponse.json({
      pageviews: groupedArray.slice(0, limit),
      total: groupedArray.length,
    });
  }

  // Sort by timestamp descending and limit
  filteredData.sort((a, b) => 
    new Date(b.serverTimestamp).getTime() - new Date(a.serverTimestamp).getTime()
  );
  
  filteredData = filteredData.slice(0, limit);

  return NextResponse.json({
    pageviews: filteredData,
    total: pageviewStore.length,
    filtered: filteredData.length,
  });
}

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}