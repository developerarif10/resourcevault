"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { FilterTags } from "../card/filter-tags";
import { Card } from "../card/resource-card";

export default function FilteredCardPage({ resources }) {
  const [cards, setCards] = useState(resources);
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleItems, setVisibleItems] = useState(9);

  // Filter cards based on search and tags
  const filteredCards = cards.filter((card) => {
    const matchesTag = selectedTag === "All" || card.category === selectedTag;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLocaleLowerCase());
    return matchesTag && matchesSearch;
  });

  // Get the currently visible cards
  const visibleCards = filteredCards.slice(0, visibleItems);

  // Load more handler
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 9);
  };

  return (
    <div className="space-y-8">
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

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {visibleCards.map((card, index) => (
          <div key={`${card.url}-${index}`} className="h-full">
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < filteredCards.length && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-gray-800 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
