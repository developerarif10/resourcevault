import FilteredCardPage from "@/components/search/filtered-cards";
import { getAllResources } from "@/queries/resources";

export default async function Home() {
  const resources = await getAllResources();

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">Resources Vault</h1>
          <p className="text-gray-400 text-lg">
            Discover free developer tools and APIs
          </p>
        </div>

        {/* Search and Filter Section */}
        <FilteredCardPage resources={resources} />
      </div>
    </main>
  );
}
