import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/handler/sign-in')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/handler/sign-in"!</div>;
}
