import { useEffect, useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import InstructorCard from '@/components/InstructorCard';
import { getInstructors } from '@/db/api';
import { Skeleton } from '@/components/ui/skeleton';
import type { Instructor } from '@/types';

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await getInstructors();
        setInstructors(data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 xl:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">Our Instructors</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our talented team of professional dance instructors. Each brings unique expertise 
            and passion to help you achieve your dance goals.
          </p>
        </div>

        {/* Instructors Grid */}
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full bg-muted" />
                <Skeleton className="h-6 w-3/4 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        )}

        {/* Join Our Team Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 xl:p-12 text-center">
          <h2 className="text-2xl xl:text-3xl font-bold mb-4">Join Our Teaching Team</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you a passionate dance professional looking to inspire the next generation? 
            We're always looking for talented instructors to join our academy.
          </p>
          <p className="text-sm text-muted-foreground">
            Send your resume and teaching portfolio to <span className="font-semibold">careers@danceacademy.com</span>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
