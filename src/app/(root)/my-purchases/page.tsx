"use client";

import React, { useState, useMemo } from "react";
import clsx from "clsx";
import { 
  Download, 
  Package, 
  ExternalLink, 
  Search, 
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import PurchaseDetailModal from "@/app/components/ui/PurchaseDetailModal";

// MOCK DATA (Updated with Receipt/Notes for the Modal)
const INITIAL_PURCHASES = [
  {
    id: "p_01HJV",
    artworkName: "Cyberpunk Samurai",
    artist: "Jeaven A. Paras",
    type: "shop",
    amount: 1500.00,
    paymentStatus: "paid",
    deliveryType: "digital",
    deliveryStatus: "Delivered",
    date: "Feb 12, 2026",
    receiptUrl: "https://example.com/receipt1.pdf",
    notes: "High-resolution PNG and layered PSD included.",
  },
  {
    id: "p_02KML",
    artworkName: "Custom Portrait",
    artist: "Artistry Studio",
    type: "commission",
    amount: 3500.00,
    paymentStatus: "paid",
    deliveryType: "physical",
    deliveryStatus: "In Progress",
    date: "Jan 28, 2026",
    receiptUrl: "https://example.com/receipt2.pdf",
    notes: "Shipping to Atimonan, Quezon. Handle with care.",
  }
];

export default function PurchasedArts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all types");
  const [filterDelivery, setFilterDelivery] = useState("all delivery");
  const [filterStatus, setFilterStatus] = useState("all status");
  
  // Modal State
  const [selectedPurchase, setSelectedPurchase] = useState<any>(null);

  const filteredPurchases = useMemo(() => {
    return INITIAL_PURCHASES.filter((item) => {
      const matchesSearch = item.artworkName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.artist.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === "all types" || item.type === filterType;
      const matchesDelivery = filterDelivery === "all delivery" || item.deliveryType === filterDelivery;
      const matchesStatus = filterStatus === "all status" || item.paymentStatus === filterStatus;
      return matchesSearch && matchesType && matchesDelivery && matchesStatus;
    });
  }, [searchQuery, filterType, filterDelivery, filterStatus]);

  return (
    <div className="p-6 lg:p-10 bg-[#141518] min-h-screen text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter">My Purchases</h1>
        <p className="text-green-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Transaction History</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border border-gray-700 rounded-lg py-3 pl-12 pr-6 text-sm outline-none focus:border-green-400/50"
          />
        </div>

        <FilterDropdown value={filterType} onChange={setFilterType} options={["all types", "shop", "commission"]} />
        <FilterDropdown value={filterDelivery} onChange={setFilterDelivery} options={["all delivery", "digital", "physical"]} />
        <FilterDropdown value={filterStatus} onChange={setFilterStatus} options={["all status", "paid", "pending", "failed"]} />
      </div>

      {/* Table */}
      <div className="bg-[#1C1D21] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <th className="p-6">Artwork / Artist</th>
                <th className="p-6">Amount</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredPurchases.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6">
                    <p className="font-bold uppercase">{item.artworkName}</p>
                    <p className="text-xs text-zinc-500">{item.artist}</p>
                  </td>
                  <td className="p-6 font-bold">₱{item.amount.toLocaleString()}</td>
                  <td className="p-6"><StatusBadge status={item.paymentStatus} /></td>
                  <td className="p-6 text-right">
                    <button 
                      onClick={() => setSelectedPurchase(item)}
                      className="p-3 bg-white/5 hover:bg-green-400 hover:text-black rounded-xl transition-all text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2"
                    >
                      Details <ExternalLink size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPurchase && (
        <PurchaseDetailModal 
          data={selectedPurchase} 
          onClose={() => setSelectedPurchase(null)} 
        />
      )}
    </div>
  );
}

// Helper Components
function FilterDropdown({ value, onChange, options }: any) {
  return (
    <div className="w-45 pl-1 py-3 rounded-lg border border-gray-700 bg-[#141518]">
      <select 
        className="bg-transparent text-white opacity-70 font-thin outline-none w-full cursor-pointer px-2 capitalize"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt: string) => <option key={opt} className="bg-[#1C1D21]" value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isPaid = status === "paid";
  return (
    <span className={clsx(
      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 w-fit border",
      isPaid ? "bg-green-400/10 text-green-400 border-green-400/20" : "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
    )}>
      {isPaid ? <CheckCircle2 size={12} /> : <Clock size={12} />}
      {status}
    </span>
  );
}