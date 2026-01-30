import { CATEGORIES } from "@/lib/categories-seed";
import { ChevronDown } from "lucide-react";

export function FilterTags({ selected, onSelect }) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="category-select" className="text-sm text-gray-400">
        Filter by Category:
      </label>
      <div className="relative inline-block w-full max-w-xs">
        <select
          id="category-select"
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-sm bg-[#1a1a1a] text-white border border-gray-800 hover:border-gray-700 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all appearance-none cursor-pointer pr-10"
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
      </div>
    </div>
  );
}
