import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Instructor } from '@/types';

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="w-full h-64 overflow-hidden rounded-t-lg bg-muted">
        {instructor.image_url ? (
          <img
            src={instructor.image_url}
            alt={instructor.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            👤
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{instructor.name}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {instructor.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{instructor.bio}</p>
      </CardContent>
    </Card>
  );
}
