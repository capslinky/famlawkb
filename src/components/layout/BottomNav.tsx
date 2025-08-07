"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gavel, Users, Shield, FileText, GraduationCap } from "lucide-react";

const items = [
  { href: "/start", label: "Start", icon: Home },
  { href: "/responding", label: "Respond", icon: Gavel },
  { href: "/support-custody", label: "Support", icon: Users },
  { href: "/protection", label: "Protect", icon: Shield },
  { href: "/forms", label: "Forms", icon: FileText },
  { href: "/learning", label: "Learn", icon: GraduationCap },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 safe-bottom z-50"
      aria-label="Primary mobile"
    >
      <ul className="grid grid-cols-6 gap-1 px-2 py-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname?.startsWith(href + "/");
          return (
            <li key={href} className="flex">
              <Link
                href={href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 rounded-md px-2 py-1.5 text-[11px] ${
                  active ? "text-blue-700 bg-blue-50" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "text-blue-700" : "text-gray-500"}`} />
                <span className="leading-none">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

