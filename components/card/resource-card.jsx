import Link from "next/link";

export function Card({ title, description, url, category }) {
  const validUrl = url.startsWith("http") ? url : `https://${url}`;

  return (
    <Link
      href={validUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full p-6 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-[#222222]"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-gray-100 line-clamp-1 text-lg">
            {title}
          </h3>
          <span className="px-2 py-1 text-xs rounded-md bg-blue-900/40 text-blue-300 border border-blue-800/50 whitespace-nowrap ml-2">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
