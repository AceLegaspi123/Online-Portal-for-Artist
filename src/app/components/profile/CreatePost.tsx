'use client';

import { useState } from "react";
import { FaImage, FaXmark } from "react-icons/fa6";

const CreatePost = () => {
  const [post, setPost] = useState({
    content: "",
    media: [],
    visibility: "public",
  });
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    if (e.target.value.length <= 500) {
      setPost({ ...post, content: e.target.value });
    }
  };

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxAllowed = 10;
    const currentCount = post.media.length;

    // Check if adding these new files exceeds the limit
    if (currentCount + files.length > maxAllowed) {
      setError(`You can only upload a maximum of ${maxAllowed} images.`);
      
      // Optional: Only take enough files to reach the limit instead of blocking all
      // const remainingSlots = maxAllowed - currentCount;
      // const limitedFiles = files.slice(0, remainingSlots);
      return; 
    }

    setError(""); // Clear error if successful
    const newMedia = files.map(file => URL.createObjectURL(file));
    setPost({ ...post, media: [...post.media, ...newMedia] });
  };

  const removeMedia = (index) => {
    const filtered = post.media.filter((_, i) => i !== index);
    setPost({ ...post, media: filtered });
    if (filtered.length <= 10) setError(""); // Clear error if they delete under limit
  };

  const handlePublish = async () => {
    console.log("Submitting to API:", post);
    alert("Post created!");
  };

  return (
    <div className="max-w-[500px] mx-auto bg-white rounded-xl shadow-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-center w-full">Create post</h3>
      </div>

      <hr className="mb-4" />

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img src="https://via.placeholder.com/40" alt="avatar" />
        </div>
        <div>
          <p className="font-semibold text-sm">Jeaven Anda</p>
          <select 
            value={post.visibility}
            onChange={(e) => setPost({...post, visibility: e.target.value})}
            className="text-xs bg-gray-100 p-1 rounded font-medium cursor-pointer outline-none"
          >
            <option value="public">Public</option>
            <option value="followers">Followers</option>
            <option value="private">Only Me</option>
          </select>
        </div>
      </div>

      <textarea
        placeholder="What's on your mind, Jeaven?"
        className="w-full text-lg outline-none resize-none min-h-[120px]"
        value={post.content}
        onChange={handleTextChange}
      />

      {/* Error Message Display */}
      {error && (
        <p className="text-red-500 text-xs mb-2 italic">{error}</p>
      )}

      {post.media.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4 relative">
          {post.media.map((url, index) => (
            <div key={index} className="relative group">
              <img src={url} className="rounded-lg h-24 w-full object-cover border" alt="upload" />
              <button 
                onClick={() => removeMedia(index)}
                className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full hover:bg-black"
              >
                <FaXmark size={10} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-sm">Add to your post</span>
          <span className={`text-[10px] ${post.media.length >= 10 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
            {post.media.length} / 10 images
          </span>
        </div>
        <div className="flex gap-4">
          <label className={`p-2 rounded-full transition-all ${post.media.length >= 10 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}`}>
            <FaImage className="text-green-500 text-xl" />
            <input 
              type="file" 
              multiple 
              className="hidden" 
              accept="image/*,video/*"
              disabled={post.media.length >= 10}
              onChange={handleMediaUpload} 
            />
          </label>
        </div>
      </div>

      <button
        disabled={(!post.content && post.media.length === 0) || post.media.length > 10}
        onClick={handlePublish}
        className={`w-full py-2 rounded-lg font-bold transition-all ${
          (post.content || post.media.length > 0) && post.media.length <= 10
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Post
      </button>

      <p className="text-[10px] text-right mt-2 text-gray-400">
        {post.content.length} / 500
      </p>
    </div>
  );
};

export default CreatePost;