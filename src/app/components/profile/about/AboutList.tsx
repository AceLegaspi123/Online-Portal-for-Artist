'use client';

import Link from "next/link";
import { 
  User, 
  MapPin, 
  Phone, 
  FileText, 
  Link as LinkIcon, 
  Tag 
} from "lucide-react";

const AboutList = () => {
  const navItems = [
    { label: "Basic Information", href: "#basic-information", icon: User },
    { label: "Address", href: "#address", icon: MapPin },
    { label: "Contact", href: "#contact", icon: Phone },
    { label: "About me", href: "#about-me", icon: FileText },
    { label: "Link Accounts", href: "#link-accounts", icon: LinkIcon },
    { label: "Skills / Tags", href: "#skills", icon: Tag },
  ];

  return (
    <div className="sticky top-32 text-foreground">
      <h4 className="text-[10px] font-black uppercase tracking-[0.3em]  mb-8 ml-4">
        Navigation
      </h4>
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link 
              href={item.href}
              className="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all  "
            >
              {/* Icon Container */}
              <div className="flex text-background items-center justify-center w-8 h-8 rounded-lg bg-foreground border border-white/5 group-hover:border-green-400/50 group-hover:text-green-400 transition-all">
                <item.icon size={14} />
              </div>

              {/* Label */}
              <span className="text-[11px] font-black uppercase tracking-widest">
                {item.label}
              </span>

              {/* Active Indicator (Dot) */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* FOOTER DECOR */}
      <div className="mt-12 pt-8 border-t border-white/5 ml-4">
        <p className="text-[9px] font-mono text-zinc-700 leading-relaxed uppercase">
          System v2.0.4 <br />
          Sync Status: <span className="text-green-500/50">Active</span>
        </p>
      </div>
    </div>
  );
};

export default AboutList;