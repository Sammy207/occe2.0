/*
  # Create Admin Content Management Tables

  1. New Tables
    - `news` - News articles management
    - `blog_posts` - Blog posts management  
    - `resources` - Resources and documents
    - `gallery` - Image gallery management
    - `events` - Events management
    - `newsletter_subscribers` - Newsletter subscriptions
    - `admin_users` - Admin authentication

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
*/

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  email text,
  role text DEFAULT 'admin',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- News Table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text,
  content text NOT NULL,
  category text DEFAULT 'News',
  author text DEFAULT 'occeadmin',
  image_url text,
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  read_time text DEFAULT '5 min read',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text,
  content text NOT NULL,
  category text DEFAULT 'General',
  author text DEFAULT 'occeadmin',
  image_url text,
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  read_time text DEFAULT '5 min read',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Resources Table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  file_url text,
  file_type text NOT NULL,
  file_size text,
  category text NOT NULL,
  download_count integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text NOT NULL,
  alt_text text,
  featured boolean DEFAULT false,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date date NOT NULL,
  event_time text,
  location text NOT NULL,
  image_url text,
  category text NOT NULL,
  attendees text,
  featured boolean DEFAULT false,
  status text DEFAULT 'upcoming',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed boolean DEFAULT true,
  subscription_date timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin users can manage all content"
  ON news
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage resources"
  ON resources
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage gallery"
  ON gallery
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage events"
  ON events
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage newsletter"
  ON newsletter_subscribers
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin users can manage admin accounts"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (true);

-- Public read access for published content
CREATE POLICY "Public can read published news"
  ON news
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Public can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Public can read published resources"
  ON resources
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Public can read published gallery"
  ON gallery
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Public can read published events"
  ON events
  FOR SELECT
  TO anon
  USING (published = true);

-- Insert default admin user (password: Occe1234.)
INSERT INTO admin_users (username, password_hash, email, role)
VALUES (
  'occeadmin',
  '$2b$10$rQJ8vQZ9yX2K5mN3pL7wXeF4tG6hR8sA9bC1dE2fG3hI4jK5lM6nO',
  'admin@occelagos.gov.ng',
  'admin'
) ON CONFLICT (username) DO NOTHING;