import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import ClassCard from '@/components/ClassCard';
import { getClasses } from '@/db/api';
import { Skeleton } from '@/components/ui/skeleton';
import type { Class } from '@/types';

export default function HomePage() {
  const [featuredClasses, setFeaturedClasses] = useState<Class[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classes = await getClasses();
        setFeaturedClasses(classes.slice(0, 3));
      } catch (error) {
        console.error('Error fetching classes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 xl:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl xl:text-6xl font-bold mb-6">
              Welcome to <span className="gradient-text">Dance Academy</span>
            </h1>
            <p className="text-lg xl:text-xl text-muted-foreground mb-8">
              Discover the joy of dance with our expert instructors. From ballet to hip hop, 
              we offer classes for all ages and skill levels in a supportive, inspiring environment.
            </p>
            <div className="flex flex-col @md:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/classes">View Classes</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section className="py-16 xl:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Featured Classes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular dance classes designed to help you express yourself 
              and develop your skills.
            </p>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full bg-muted" />
                  <Skeleton className="h-6 w-3/4 bg-muted" />
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-full bg-muted" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredClasses.map((classData) => (
                <ClassCard key={classData.id} classData={classData} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/classes">View All Classes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 xl:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Why Choose Dance Academy?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from professional dancers with years of performance and teaching experience.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-muted-foreground">
                Train in our state-of-the-art studios equipped with professional flooring and mirrors.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">All Levels Welcome</h3>
              <p className="text-muted-foreground">
                Whether you're a beginner or advanced dancer, we have the perfect class for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 xl:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 xl:p-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Ready to Start Dancing?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to learn more about our classes and schedule a trial session.
            </p>
            <div className="flex flex-col @md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">📞</span>
                <span className="font-semibold">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">✉️</span>
                <span className="font-semibold">info@danceacademy.com</span>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
