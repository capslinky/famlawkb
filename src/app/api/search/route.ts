import { NextRequest, NextResponse } from 'next/server';
import { searchIndexService, SearchFilters } from '@/lib/searchIndex';

// Initialize search index on server startup
searchIndexService.initialize();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    
    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: 'Query must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Parse filters from query params
    const filters: SearchFilters = {};
    
    const categories = searchParams.get('categories');
    if (categories) {
      filters.categories = categories.split(',');
    }
    
    const tags = searchParams.get('tags');
    if (tags) {
      filters.tags = tags.split(',');
    }

    // Perform search
    const results = searchIndexService.search(query, filters);
    
    // Limit results for API response
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const paginatedResults = results.slice(offset, offset + limit);
    
    return NextResponse.json({
      query,
      total: results.length,
      results: paginatedResults,
      filters,
      offset,
      limit
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error during search' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, filters } = body;
    
    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: 'Query must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Perform search with provided filters
    const results = searchIndexService.search(query, filters);
    
    return NextResponse.json({
      query,
      total: results.length,
      results: results.slice(0, 50), // Limit to 50 results for POST
      filters
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error during search' },
      { status: 500 }
    );
  }
}