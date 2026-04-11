"use client";

import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, Tag, Trash2 } from 'lucide-react';
import { notify } from '@/utils/toastHelper';

interface ArtworkFormData {
  cover_photo: File | null;
  art_file: File | null;
  artwork_title: string;
  description: string;
  artwork_type: 'Digital' | 'Physical';
  tags: string[];
  status: 'For Sale' | 'Not for Sale' | 'Free Download';
  price: number;
  stocks: number;
  gallery_id?: string;
}

export default function UploadArtworkModal({ onClose }: {onClose: () => void }) {
  // Main Form State
  const [formData, setFormData] = useState<ArtworkFormData>({
    cover_photo: null,
    art_file: null,
    artwork_title: '',
    description: '',
    artwork_type: 'Digital',
    tags: [],
    status: 'Not for Sale',
    price: 0,
    stocks: 1,
  });

  // Preview States
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [artPreview, setArtPreview] = useState<string | null>(null);

  // Tag Input State
  const [tagInput, setTagInput] = useState("");

  // Refs for hidden file inputs
  const coverInputRef = useRef<HTMLInputElement>(null);
  const artInputRef = useRef<HTMLInputElement>(null);


  // --- Handlers ---

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'art') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    if (type === 'cover') {
      setFormData(prev => ({ ...prev, cover_photo: file }));
      setCoverPreview(previewUrl);
    } else {
      setFormData(prev => ({ ...prev, art_file: file }));
      setArtPreview(previewUrl);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()]
        }));
      }
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handlePublish = () => {
    // --- Validation Feature ---
    // if (!formData.cover_photo) {
    //   notify("Please upload a cover photo.", "error");
    //   return;
    // }

    if (!formData.art_file) {
      notify("Please upload the main art file.", "error");
      return;
    }

    if (!formData.artwork_title.trim()) {
      notify("Please provide a title for your artwork.", "error");
      return;
    }

    if (formData.status === 'For Sale' && formData.price <= 0) {
      notify("Please set a valid price for your artwork.", "error");
      return;
    }

    if (formData.status === 'For Sale' && formData.stocks <= 0) {
      notify("Please set a valid stock quantity for your artwork.", "error");
      return;
    }

    notify("Publishing your artwork...", "success");

    setTimeout(() => {
        onClose();
    }, 2000);
    
    console.log("Publishing Data:", formData);
  };

  return (
    <div className="z-50 flex text-foreground items-center justify-center w-full mx-auto  p-4">
      <div className="bg-background w-full   rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-200 bg-background flex justify-between items-center">
          <div>
             <h2 className="text-xl font-bold text-foreground">Create New Artwork</h2>
             <p className="text-xs text-foreground">Share your masterpiece with the community</p>
          </div>
          
          <button onClick={onClose} className="p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* File Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cover Photo */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Cover Photo (Thumbnail)</label>
              <div 
                onClick={() => coverInputRef.current?.click()}
                className="relative border-2 border-dashed  border-primary-line rounded-lg h-40 flex flex-col items-center justify-center hover:border-blue-500 cursor-pointer overflow-hidden transition-colors"
              >
                {coverPreview ? (
                  <img src={coverPreview} alt="Cover Preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon className="text-foreground mb-2" />
                    <span className="text-xs text-foreground">Click to upload cover</span>
                  </>
                )}
              </div>
              <input type="file" ref={coverInputRef} className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'cover')} />
            </div>

            {/* Main Art File */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Main Art File</label>
              <div 
                onClick={() => artInputRef.current?.click()}
                className="group relative border-2 border-dashed border-primary-line  rounded-xl overflow-hidden h-40 flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 cursor-pointer transition-all"
              >
                {artPreview ? (
                  <div className="flex flex-col items-center p-4">
                    <img src={artPreview} alt="Art Preview" className="w-20 h-20 object-cover rounded-lg mb-2 shadow-md border border-white/20" />
                    <p className="text-[10px] text-foreground truncate max-w-[150px] font-mono">{formData.art_file?.name}</p>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setArtPreview(null); 
                        setFormData(prev => ({ ...prev, art_file: null })); 
                      }}
                      className="mt-2 text-foreground flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <div className=" p-3  text-foreground mb-2 group-hover:scale-110 transition-transform">
                      <Upload className=" group-hover:text-500" size={24} />
                    </div>
                    <span className="text-xs  font-medium">Upload high-res artwork</span>
                  </>
                )}
              </div>
              <input type="file" ref={artInputRef} className="hidden" accept="image/*,video/*" onChange={(e) => handleFileChange(e, 'art')} />
            </div>
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Artwork Title"
              maxLength={100}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, artwork_title: e.target.value})}
            />

            <textarea 
              placeholder="Short explanation or story behind the art..."
              maxLength={500}
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <select 
                className="w-full p-2 rounded-lg bg-secondary text-foreground "
                value={formData.artwork_type}
                onChange={(e) => setFormData({...formData, artwork_type: e.target.value as any})}
              >
                <option value="Digital">Digital</option>
                <option value="Physical">Physical</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select 
                className="w-full p-2 rounded-lg  bg-secondary text-foreground "
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as any})}
              >
                <option value="Not for Sale">Not for Sale</option>
                <option value="For Sale">For Sale</option>
                <option value="Free Download">Free Download</option>
              </select>
            </div>
          </div>

          {/* Pricing & Stocks */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Price (PHP)</label>
              <input 
                type="number" 
                disabled={formData.status !== 'For Sale'}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent disabled:opacity-50 transition-opacity"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Stocks</label>
              <input 
                type="number" 
                disabled={formData.status !== 'For Sale'}
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground  transition-opacity"
                placeholder="1"
                value={formData.stocks}
                onChange={(e) => setFormData({...formData, stocks: Number(e.target.value)})}
              />
            </div>
          </div>

          {/* Tags Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-foreground">
              <Tag size={16} /> Tags (Press Enter)
            </label>
            <div className="flex flex-wrap gap-2 p-2 rounded-lg bg-secondary text-foreground  focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              {formData.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md group"
                >
                  {tag}
                  <button type="button" onClick={() => removeTag(index)} className="hover:text-red-500 transition-colors">
                    <X size={14} />
                  </button>
                </span>
              ))}
              <input 
                type="text" 
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder={formData.tags.length === 0 ? "Anime, Portrait..." : ""}
                className="flex-1 min-w-[120px] bg-transparent outline-none text-sm py-1"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 rounded-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            Cancel
          </button>
          <button 
            onClick={handlePublish}
            className="px-8 py-2 bg-blue-600 hover:bg-blue-700  rounded-lg font-semibold shadow-lg shadow-blue-500/30 transition-all"
          >
            Publish Art
          </button>
        </div>
      </div>
    </div>
  );
}