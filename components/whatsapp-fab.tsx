import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsappFab() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
        💬 Chat on WhatsApp
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          `Assalam-o-Alaikum! I want to know more about ${site.name}.`,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
