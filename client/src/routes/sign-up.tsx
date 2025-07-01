import { createFileRoute } from '@tanstack/react-router';
import { SignUp } from '@stackframe/react';

export const Route = createFileRoute('/sign-up')({
  component: SignUp,
});
