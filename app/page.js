import FilteredCardPage from "@/components/search/filtered-cards";
import { getAllResources } from "@/queries/resources";

export default async function Home() {
  const resources = await getAllResources();

  return (
    <main
      className="min-h-screen p-6 md:p-12 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url("/main_bg.svg")` }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold">Resources Vault for Developers</h1>

        {/* Search and Filter Section */}
        <FilteredCardPage resources={resources} />
      </div>
    </main>
  );
}
