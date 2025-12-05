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
  artwork_type: string;
  tags: string[];
  status: string;
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


//For violations history
interface UserProfile {
  gmail: string;
  profile_icon: string;
  name: string;
}

type ViolationType = "Artwork Violation" | "User Conduct Violation";

type ActionTaken = "Warning" | "Temporary Suspension" | "Permanent Ban" | "Cleared";

interface ViolationHistoryEntry {
  HISTORY_ID: string;
  USER_ID: string;
  reported_user: UserProfile;
  reported_by: UserProfile;
  VIOLATION_TYPE: ViolationType;
  VIOLATION_LOG_ID: string;
  ACTION_TAKEN: ActionTaken;
  Duration: string;
  NOTES: string;
  DATE_ISSUED: string;
  EXPIRATION: string | null;
}

type ViolationHistory = ViolationHistoryEntry[];