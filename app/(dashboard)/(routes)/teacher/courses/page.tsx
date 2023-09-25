import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CoursesPage = () => {
  return (
    <div>
      <Link href="/teacher/create">
        <Button>Create Course</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
