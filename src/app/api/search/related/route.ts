import { NextRequest, NextResponse } from 'next/server';
import { searchIndexService } from '@/lib/searchIndex';

// Initialize search index on server startup
searchIndexService.initialize();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const contentId = searchParams.get('id');
    
    if (!contentId) {
      return NextResponse.json(
        { error: 'Content ID is required' },
        { status: 400 }
      );
    }

    const limit = parseInt(searchParams.get('limit') || '5');
    const relatedContent = searchIndexService.getRelatedContent(contentId, limit);
    
    return NextResponse.json({
      contentId,
      related: relatedContent
    });
  } catch (error) {
    console.error('Related content API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}