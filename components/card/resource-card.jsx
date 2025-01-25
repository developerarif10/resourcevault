import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Card({ url, title, description }) {
  return (
    <Link
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-colors group"
    >
      <div className="flex justify-between items-start">
        <p className="text-gray-400 text-sm mb-2">{url}</p>
        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}
