export type User = {
  user_id: number;
  username: string;
  email: string;
  name?: string; // Optional field
  interests?: string; // Optional field
  created_at: string;
  updated_at: string;
};

export type Video = {
  video_id: number;
  user_id: number;
  title: string;
  description?: string; // Optional field
  upload_time: string;
  watch_count: number;
  rewatch_count: number;
  likes_count: number;
  dislikes_count: number;
  created_at: string;
  updated_at: string;
};

export type VideoLike = {
  like_id: number;
  user_id: number;
  video_id: number;
  liked_at: string;
};

export type VideoComment = {
  comment_id: number;
  video_id: number;
  user_id: number;
  comment_text: string;
  commented_at: string;
};

export type UserSavedVideo = {
  save_id: number;
  user_id: number;
  video_id: number;
  saved_at: string;
};

export type VideoDislike = {
  dislike_id: number;
  user_id: number;
  video_id: number;
  disliked_at: string;
};
