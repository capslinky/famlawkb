import { NextRequest, NextResponse } from 'next/server';
import { searchIndexService } from '@/lib/searchIndex';

// Initialize search index on server startup
searchIndexService.initialize();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    
    if (!query || query.trim().length < 1) {
      // Return popular searches if no query
      return NextResponse.json({
        suggestions: searchIndexService.getPopularSearches()
      });
    }

    const limit = parseInt(searchParams.get('limit') || '5');
    const suggestions = searchIndexService.getSuggestions(query, limit);
    
    return NextResponse.json({
      query,
      suggestions
    });
  } catch (error) {
    console.error('Suggestions API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}