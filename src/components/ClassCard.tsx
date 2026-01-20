import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Class } from '@/types';

interface ClassCardProps {
  classData: Class;
}

export default function ClassCard({ classData }: ClassCardProps) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-chart-5 text-white';
      case 'Intermediate':
        return 'bg-chart-4 text-white';
      case 'Advanced':
        return 'bg-chart-1 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      {classData.image_url && (
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={classData.image_url}
            alt={classData.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{classData.name}</CardTitle>
          <Badge className={getDifficultyColor(classData.difficulty_level)}>
            {classData.difficulty_level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">{classData.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">📅 Schedule:</span>
            <span className="text-muted-foreground">{classData.schedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">⏱️ Duration:</span>
            <span className="text-muted-foreground">{classData.duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border pt-4">
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl font-bold text-primary">
            ${classData.price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">per month</span>
        </div>
      </CardFooter>
    </Card>
  );
}
