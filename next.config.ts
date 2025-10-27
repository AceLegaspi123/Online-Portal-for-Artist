import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      // Pinterest
      "i.pinimg.com",
      "ph.pinterest.com",

      // HDQ Walls
      "images.hdqwalls.com",

      // LinkedIn CDN
      "media.licdn.com",

      // Storyblok CDN
      "a.storyblok.com",

      // GStatic (Google image thumbnails)
      "encrypted-tbn0.gstatic.com",

      // Cloudinary
      "res.cloudinary.com",

      // Otaku USA
      "otakuusamagazine.com",

      // Freepik / Adobe Stock etc.
      "t4.ftcdn.net",

      // PCGamesN
      "www.pcgamesn.com",

      // Bing images
      "tse2.mm.bing.net",

      // Google Play CDN
      "play-lh.googleusercontent.com",

      // Anime Senpai
      "www.animesenpai.net",

      // Wallpapers.com
      "wallpapers.com",

      // Krita Artists
      "krita-artists.org",

      // CatCon
      "www.catconworldwide.com",
    ],
  },
};

export default nextConfig;
