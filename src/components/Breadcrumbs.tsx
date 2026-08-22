"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 bg-surface-elevated/20 border border-border/40 rounded-xl mb-6 text-xs text-muted-foreground w-fit max-w-full overflow-x-auto">
      <ol className="flex items-center gap-2 whitespace-nowrap">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
            <Home size={13} className="text-primary" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-muted-foreground/40 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-[300px]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors font-medium">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
