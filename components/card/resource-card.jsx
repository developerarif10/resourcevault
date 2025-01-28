export function Card({ title, description, url, category }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-colors"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-gray-100 line-clamp-1">{title}</h3>
          <span className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
    </a>
  );
}
