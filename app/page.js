import FilteredCardPage from "@/components/search/filtered-cards";
import { getAllResources } from "@/queries/resources";

export default async function Home() {
  const resources = await getAllResources();

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold">Resources</h1>

        {/* Search and Filter Section */}
        <FilteredCardPage resources={resources} />

        {/* Load More Button */}
        <div className="flex justify-center">
          <button
            // onClick={loadMore}
            className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-gray-800 transition-colors"
          >
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}
