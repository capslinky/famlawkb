import { modules } from "@/data/modules";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ContentMetadata from "@/components/ContentMetadata";
import PreFilingContent from "@/components/modules/PreFilingContent";
import StartingCaseContent from "@/components/modules/StartingCaseContent";
import RespondingContent from "@/components/modules/RespondingContent";
import FirstAppearanceContent from "@/components/modules/FirstAppearanceContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const moduleData = modules.find((m) => m.slug === slug);
  if (!moduleData) return notFound();

  // Attempt to load legacy HTML content
  let legacyContent: string | null = null;
  try {
    const legacyPath = path.join(
      process.cwd(),
      "web1",
      "app",
      "modules",
      moduleData.slug,
      "index.html"
    );
    const html = fs.readFileSync(legacyPath, "utf8");
    const match = html.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/i);
    if (match && match[1]) {
      legacyContent = match[1];
    }
  } catch {
    // File may not exist yet – ignore
  }

  // Determine complexity based on moduleData
  const getComplexity = () => {
    if (['pre-filing', 'starting-case'].includes(moduleData.slug)) return 'beginner';
    if (['trial-prep', 'enforcement-appeals'].includes(moduleData.slug)) return 'advanced';
    return 'intermediate';
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{moduleData.title}</h1>
        
        <ContentMetadata 
          content={legacyContent || moduleData.description}
          lastUpdated={new Date(2024, 0, 15)} // Placeholder date
          complexity={getComplexity()}
        />
        
        <div className="prose max-w-none">
          {moduleData.hasComprehensiveContent && moduleData.slug === 'pre-filing' ? (
            <PreFilingContent />
          ) : moduleData.hasComprehensiveContent && moduleData.slug === 'starting-case' ? (
            <StartingCaseContent />
          ) : moduleData.hasComprehensiveContent && moduleData.slug === 'responding' ? (
            <RespondingContent />
          ) : moduleData.hasComprehensiveContent && moduleData.slug === 'first-appearance' ? (
            <FirstAppearanceContent />
          ) : legacyContent ? (
            <div dangerouslySetInnerHTML={{ __html: legacyContent }} />
          ) : (
            <>
              <p className="text-lg text-gray-700">{moduleData.description}</p>
              <p className="mt-8 text-gray-500">Full content coming soon.</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
} 