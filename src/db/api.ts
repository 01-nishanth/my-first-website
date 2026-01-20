import { supabase } from './supabase';
import type { Class, Instructor, ContactSubmission } from '@/types';

// Classes API
export const getClasses = async (): Promise<Class[]> => {
  const { data, error } = await supabase
    .from('classes')
    .select('*')
    .order('difficulty_level', { ascending: true });

  if (error) throw error;
  return Array.isArray(data) ? data : [];
};

export const getClassById = async (id: string): Promise<Class | null> => {
  const { data, error } = await supabase
    .from('classes')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
};

// Instructors API
export const getInstructors = async (): Promise<Instructor[]> => {
  const { data, error } = await supabase
    .from('instructors')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return Array.isArray(data) ? data : [];
};

export const getInstructorById = async (id: string): Promise<Instructor | null> => {
  const { data, error } = await supabase
    .from('instructors')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
};

// Contact Form API
export const submitContactForm = async (submission: ContactSubmission): Promise<void> => {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([submission]);

  if (error) throw error;
};
