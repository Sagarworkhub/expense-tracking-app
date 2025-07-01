import { createFileRoute } from '@tanstack/react-router';
import { SignIn } from '@stackframe/react';

export const Route = createFileRoute('/sign-in')({
  component: SignIn,
});
