"use client";

import { useState } from "react";

import { FilterTags } from "@/components/card/filter-tags";
import { Card } from "@/components/card/resource-card";
import { Search } from "lucide-react";

const INITIAL_CARDS = [
  {
    url: "colorsandfonts.com",
    title: "Colors and Fonts",
    description: "Great fonts and color palette inspirations",
    category: "Design",
  },
  {
    url: "getcssscan.com/css-checkboxes-examples",
    title: "Checkboxes Inspiration",
    description: "Click to copy checkbox styles",
    category: "Development",
  },
  {
    url: "getcssscan.com/css-buttons-examples",
    title: "Buttons Inspiration",
    description: "Click to copy button styles",
    category: "Development",
  },
  {
    url: "react-icons.github.ion",
    title: "React Icons",
    description: "Great icon packs from many websites.",
    category: "Development",
  },
  {
    url: "lookup.design",
    title: "Lookup.design",
    description: "Website components inspirations",
    category: "Design",
  },
  {
    url: "microcopy.me",
    title: "Microcopy",
    description: "Website copy instead of lorem ipsum.",
    category: "Articles",
  },
  // Add more initial cards here...
];

export default function Home() {
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const loadMore = () => {
    // Simulate loading more cards
    const newCards = [...cards, ...INITIAL_CARDS.slice(0, 3)];
    setCards(newCards);
  };

  const filteredCards = cards.filter((card) => {
    const matchesTag = selectedTag === "All" || card.category === selectedTag;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold">Resources</h1>

        {/* Search and Filter Section */}
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search utilities..."
              className="w-full h-14 pl-12 pr-4 rounded-lg bg-[#1a1a1a] border border-gray-800 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <FilterTags selected={selectedTag} onSelect={setSelectedTag} />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <Card key={`${card.url}-${index}`} {...card} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-gray-800 transition-colors"
          >
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}
