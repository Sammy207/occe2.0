import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// Database types
export interface News {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  category: string;
  author: string;
  image_url?: string;
  featured: boolean;
  published: boolean;
  read_time: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  category: string;
  author: string;
  image_url?: string;
  featured: boolean;
  published: boolean;
  read_time: string;
  created_at: string;
  updated_at: string;
}

export interface Resource {
  id: string;
  title: string;
  description?: string;
  file_url?: string;
  file_type: string;
  file_size?: string;
  category: string;
  download_count: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category: string;
  alt_text?: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_time?: string;
  location: string;
  image_url?: string;
  category: string;
  attendees?: string;
  featured: boolean;
  status: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribed: boolean;
  subscription_date: string;
  unsubscribed_at?: string;
}

export interface AdminUser {
  id: string;
  username: string;
  email?: string;
  role: string;
  created_at: string;
  updated_at: string;
}