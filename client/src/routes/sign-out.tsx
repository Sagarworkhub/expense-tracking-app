import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/sign-out')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh] gap-6 text-center'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>You have signed out successfully</h1>
        <p className='text-muted-foreground'>
          Thank you for using our application
        </p>
      </div>
      <div className='flex gap-4'>
        <Button asChild>
          <Link to='/sign-in'>Sign In</Link>
        </Button>
        <Button
          asChild
          variant='outline'
        >
          <Link to='/sign-up'>Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
