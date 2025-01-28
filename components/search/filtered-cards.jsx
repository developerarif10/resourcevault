"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { FilterTags } from "../card/filter-tags";
import { Card } from "../card/resource-card";
export default function FilteredCardPage({ resources }) {
  const [cards, setCards] = useState(resources);
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = cards.filter((card) => {
    const matchesTag = selectedTag === "All" || card.category === selectedTag;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLocaleLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
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
    </>
  );
}
