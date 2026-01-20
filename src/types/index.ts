export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

export interface Class {
  id: string;
  name: string;
  description: string;
  difficulty_level: 'Beginner' | 'Intermediate' | 'Advanced';
  schedule: string;
  duration: string;
  price: number;
  image_url?: string;
  created_at: string;
}

export interface Instructor {
  id: string;
  name: string;
  bio: string;
  specialties: string[];
  image_url?: string;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
