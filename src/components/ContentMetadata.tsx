import { Clock, Calendar, BarChart2 } from "lucide-react";

interface ContentMetadataProps {
  content?: string;
  lastUpdated?: Date | string;
  complexity?: 'beginner' | 'intermediate' | 'advanced';
  wordsPerMinute?: number;
}

export default function ContentMetadata({ 
  content, 
  lastUpdated, 
  complexity = 'beginner',
  wordsPerMinute = 200 
}: ContentMetadataProps) {
  
  // Calculate reading time
  const calculateReadingTime = () => {
    if (!content) return 0;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const readingTime = calculateReadingTime();

  // Format date
  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get complexity color and label
  const getComplexityInfo = () => {
    switch (complexity) {
      case 'beginner':
        return { color: 'text-green-600 bg-green-50', label: 'Beginner Friendly' };
      case 'intermediate':
        return { color: 'text-yellow-600 bg-yellow-50', label: 'Some Legal Knowledge' };
      case 'advanced':
        return { color: 'text-red-600 bg-red-50', label: 'Complex Legal Concepts' };
    }
  };

  const complexityInfo = getComplexityInfo();

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 p-4 bg-gray-50 rounded-lg">
      {readingTime > 0 && (
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{readingTime} min read</span>
        </div>
      )}
      
      {lastUpdated && (
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>Updated {formatDate(lastUpdated)}</span>
        </div>
      )}
      
      <div className="flex items-center gap-1">
        <BarChart2 className="w-4 h-4" />
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${complexityInfo.color}`}>
          {complexityInfo.label}
        </span>
      </div>
    </div>
  );
}