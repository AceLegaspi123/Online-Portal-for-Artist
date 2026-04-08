'use client';

import React, { useState, KeyboardEvent } from "react";
import { 
  Pencil, 
  Save, 
  Loader2, 
  Plus, 
  X, 
  Facebook, 
  Instagram, 
  Twitter, 
  Send, 
  ChevronDown,
  Globe,
  MapPin,
  Phone
} from "lucide-react"; 
import toast from "react-hot-toast"; 

const PRESET_SKILLS = ["UI/UX Design", "Front-end Development", "React", "Next.js", "Figma", "TypeScript", "Tailwind CSS", "Digital Art", "Illustration"];

const AboutContent = () => {
    const [loading, setLoading] = useState(false);
    const [skillInput, setSkillInput] = useState("");
    
    const [formData, setFormData] = useState({
        firstName: "Christian Jay",
        lastName: "Escasa",
        userName: "Christian Jay",
        accountType: "Artist",
        country: "Philippines",
        city: "Atimonan",
        province: "Quezon",
        gmail: "christianjay69@gmail.com",
        phone: "09**********",
        sectionTitle: "About",
        description: "",
        socials: {
            facebook: "",
            instagram: "",
            twitter: "",
            telegram: ""
        },
        skills: ["UI/UX Design", "Figma"]
    });

    // --- Handlers ---

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            socials: { ...prev.socials, [name]: value }
        }));
    };

    const addSkill = (skill: string) => {
        const trimmed = skill.trim();
        if (trimmed && !formData.skills.includes(trimmed)) {
            setFormData(prev => ({ ...prev, skills: [...prev.skills, trimmed] }));
        }
        setSkillInput("");
    };

    const removeSkill = (skillToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(s => s !== skillToRemove)
        }));
    };

    const handleSkillKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill(skillInput);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/user/update-profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Profile updated successfully!");
            } else {
                toast.error("Update failed. Please try again.");
            }
        } catch (error) {
            console.error("Save Error:", error);
            toast.error("Network error. Check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full xl:max-w-[1200px] mx-auto pb-20 px-4">
            
            {/* --- STICKY HEADER ACTIONS --- */}
            <div className="flex -mt-8 items-center justify-between mb-12 sticky top-24 z-10 p-4 rounded-2xl backdrop-blur-xl bg-primary/40 border-b border-white/5">
                <div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter ">Profile Settings</h1>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em]  mt-1">Configure your Studio presence</p>
                </div>
                <button 
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center gap-3 bg-green-400 hover:bg-green-500  px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 shadow-[0_0_20px_rgba(74,222,128,0.2)]"
                >
                    {loading ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                    {loading ? "Saving..." : "Save Changes"}
                </button>
            </div>

            <div className="grid gap-10">
                
                {/* --- BASIC INFORMATION --- */}
                <SectionWrapper title="Basic Information" id="basic-information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                        <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                        <InputGroup label="User Name" name="userName" value={formData.userName} onChange={handleChange} />
                        
                        <div className="flex flex-col gap-3 group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-2 group-focus-within:text-green-400 transition-colors">
                                Account Type
                            </label>
                            <div className="relative">
                                <select
                                    name="accountType"
                                    value={formData.accountType}
                                    onChange={handleChange}
                                    className="w-full bg-secondary border border-white/5 rounded-full px-8 py-5 text-sm focus:outline-none focus:border-green-400/30 transition-all appearance-none cursor-pointer "
                                >
                                    <option value="Artist" className="bg-tertiary">Artist</option>
                                    <option value="Client" className="bg-tertiary">Client / Collector</option>
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-green-400 transition-colors" />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* --- ADDRESS --- */}
                <SectionWrapper title="Address" id="address">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InputGroup label="Country" name="country" value={formData.country} onChange={handleChange} />
                        <InputGroup label="City" name="city" value={formData.city} onChange={handleChange} />
                        <InputGroup label="Province" name="province" value={formData.province} onChange={handleChange} />
                    </div>
                </SectionWrapper>

                {/* --- CONTACT --- */}
                <SectionWrapper title="Contact" id="contact">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InputGroup label="Gmail Address" name="gmail" value={formData.gmail} onChange={handleChange} />
                        <InputGroup label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                </SectionWrapper>

                {/* --- ABOUT ME --- */}
                <SectionWrapper title="About Me" id="about-me">
                    <div className="space-y-8">
                        <InputGroup label="Section Title" name="sectionTitle" value={formData.sectionTitle} onChange={handleChange} />
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-2">Description / Bio</label>
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Tell the community about your work..."
                                className="bg-secondary border border-white/5 rounded-[2.5rem] p-8 text-white text-sm focus:outline-none focus:border-green-400/30 min-h-[200px] transition-all resize-none placeholder:text-zinc-700"
                            />
                        </div>
                    </div>
                </SectionWrapper>

                {/* --- LINK ACCOUNTS --- */}
                <SectionWrapper title="Link Accounts" id="link-accounts">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SocialInput icon={<Facebook size={18}/>} label="Facebook" name="facebook" value={formData.socials.facebook} onChange={handleSocialChange} placeholder="facebook.com/username" />
                        <SocialInput icon={<Instagram size={18}/>} label="Instagram" name="instagram" value={formData.socials.instagram} onChange={handleSocialChange} placeholder="@username" />
                        <SocialInput icon={<Twitter size={18}/>} label="Twitter / X" name="twitter" value={formData.socials.twitter} onChange={handleSocialChange} placeholder="@username" />
                        <SocialInput icon={<Send size={18}/>} label="Telegram" name="telegram" value={formData.socials.telegram} onChange={handleSocialChange} placeholder="@username" />
                    </div>
                </SectionWrapper>

                {/* --- SKILLS / CREATIVE TAGS --- */}
                <SectionWrapper title="Skills / Creative Tags" id="skills">
                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-3">
                            {formData.skills.map(skill => (
                                <span key={skill} className="flex items-center gap-2 bg-green-400/10 border border-green-400/20 text-green-400 px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:bg-green-400/20">
                                    {skill}
                                    <button onClick={() => removeSkill(skill)} className="hover:text-white transition-colors">
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                        
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-2 mb-4 block group-focus-within:text-green-400 transition-colors">Add New Skill</label>
                            <div className="flex gap-4">
                                <input
                                    list="skill-options"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleSkillKeyDown}
                                    placeholder="Type and press Enter (e.g. Branding)"
                                    className="flex-1 bg-secondary border border-white/5 rounded-full px-8 py-5 text-sm focus:outline-none focus:border-green-400/30 transition-all placeholder:text-zinc-700"
                                />
                                <button 
                                    onClick={() => addSkill(skillInput)}
                                    className="p-5 bg-primary border border-white/5 rounded-full hover:bg-green-400  transition-all flex items-center justify-center"
                                >
                                    <Plus size={24} />
                                </button>
                            </div>
                            <datalist id="skill-options">
                                {PRESET_SKILLS.map(s => <option key={s} value={s} />)}
                            </datalist>
                        </div>
                    </div>
                </SectionWrapper>

            </div>
        </div>
    );
};

// --- Reusable Component Helpers ---

const SectionWrapper = ({ children, title, id }: any) => (
    <div id={id} className="bg-primary border border-primary-line rounded-[3.5rem] p-10 md:p-16 transition-all hover:border-white/10 group/section">
        <div className="flex items-center mb-14 gap-8">
            <h3 className="text-xl font-black uppercase tracking-[0.2em] ">{title}</h3>
            <div className="h-[1px] flex-1 bg-primary group-hover/section:bg-white/10 transition-colors" />
            <div className="p-3 rounded-full bg-primary  group-hover/section:text-green-400 transition-colors">
                <Pencil size={18} />
            </div>
        </div>
        {children}
    </div>
);

const InputGroup = ({ label, name, value, onChange }: any) => (
    <div className="flex flex-col gap-3 group">
        <label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-2 group-focus-within:text-green-400 transition-colors">
            {label}
        </label>
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
            className="bg-secondary border border-white/5 rounded-full px-8 py-5 text-sm  focus:outline-none focus:border-green-400/30 transition-all"
        />
    </div>
);

const SocialInput = ({ icon, label, name, value, onChange, placeholder }: any) => (
    <div className="flex flex-col gap-3 group">
        <label className="text-[10px] font-black uppercase tracking-[0.2em]  ml-2 group-focus-within:text-green-400 transition-colors">
            {label}
        </label>
        <div className="relative">
            <div className="absolute left-7 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-green-400 transition-colors">
                {icon}
            </div>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-secondary border border-white/5 rounded-full pl-16 pr-8 py-5 text-sm focus:outline-none focus:border-green-400/30 transition-all placeholder:text-zinc-800"
            />
        </div>
    </div>
);

export default AboutContent;