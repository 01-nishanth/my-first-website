import { useEffect, useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ClassCard from '@/components/ClassCard';
import { getClasses } from '@/db/api';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Class } from '@/types';

export default function ClassesPage() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getClasses();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const filteredClasses = filter === 'all' 
    ? classes 
    : classes.filter(c => c.difficulty_level === filter);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 xl:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">Our Classes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of dance classes. From classical ballet to modern hip hop, 
            we offer something for everyone.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Beginner">Beginner</TabsTrigger>
            <TabsTrigger value="Intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="Advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8">
            {/* Content rendered below */}
          </TabsContent>
          <TabsContent value="Beginner" className="mt-8">
            {/* Content rendered below */}
          </TabsContent>
          <TabsContent value="Intermediate" className="mt-8">
            {/* Content rendered below */}
          </TabsContent>
          <TabsContent value="Advanced" className="mt-8">
            {/* Content rendered below */}
          </TabsContent>
        </Tabs>

        {/* Classes Grid */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full bg-muted" />
                <Skeleton className="h-6 w-3/4 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
              </div>
            ))}
          </div>
        ) : filteredClasses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredClasses.map((classData) => (
              <ClassCard key={classData.id} classData={classData} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No classes found for this level.</p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Class Information</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">📋 Registration</h3>
              <p className="text-sm text-muted-foreground">
                Classes are available on a monthly subscription basis. Drop-in sessions may be 
                available for select classes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">👕 What to Wear</h3>
              <p className="text-sm text-muted-foreground">
                Comfortable athletic wear is recommended. Specific footwear requirements vary by 
                class style.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎒 What to Bring</h3>
              <p className="text-sm text-muted-foreground">
                Water bottle, towel, and any personal dance shoes. We provide mirrors, barres, 
                and sound systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">❓ Questions?</h3>
              <p className="text-sm text-muted-foreground">
                Contact us at (555) 123-4567 or info@danceacademy.com for more information about 
                our classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
