export function FilterTags({ selected, onSelect }) {
  const tags = [
    "All",
    "Design",
    "Development",
    "Fonts",
    "Animation",
    "Images",
    "Articles",
    "Others",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            selected === tag
              ? "bg-white text-black"
              : "bg-[#1a1a1a] text-gray-400 hover:bg-[#252525]"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
