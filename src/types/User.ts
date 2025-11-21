export interface User {
    userId: string;
    name: string;
    joinedOn: Date;
    soldArts: number;
    followers: number;
    accountStatus: string
}

export interface artList {
    id: number;
    src: string;
    alt: string;
    user: string;
    avatar: string;
}

export interface artwork  {
  artwork_id: number;
  user_profile_id: string;
  cover_photo: string;
  art_file: string;
  artwork_title: string;
  description: string;
  artwork_type: 'Digital' | 'Physical';
  tags: string[];
  status: 'For Sale' | 'Not for Sale';
  price: number;
  stocks: number;
  sold: number;
  gallery_id: string | null;
  likes_count: number;
  views: number;
  created_at: string;
  updated_at: string;
  artist_avatar: string;
};