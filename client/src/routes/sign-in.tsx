import { createFileRoute, Navigate } from '@tanstack/react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useStackApp, useUser } from '@stackframe/react';
import { toast } from 'sonner';

const signInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type SignInFormValues = z.infer<typeof signInSchema>;

function SignInForm() {
  const user = useUser();
  const app = useStackApp();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SignInFormValues) {
    setIsSubmitting(true);
    try {
      const result = await app.signInWithCredential({
        email: data.email,
        password: data.password,
      });

      if (result.status === 'error') {
        toast.error(result.error.message);
        console.error('Sign in failed:', result.error.message);
        return;
      } else {
        toast.success('Signed in successfully');
      }
    } catch (error) {
      console.error('Sign in failed:', error);
      toast.error('Failed to sign in');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    await app.signInWithOAuth('google');
  }

  if (user) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className='flex flex-col gap-6 max-w-md mx-auto py-10'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Sign in to your account</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Button
            onClick={handleGoogleSignIn}
            className='w-full cursor-pointer'
          >
            Sign in with Google
          </Button>
          <div className='text-center text-sm'>or</div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid gap-6'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='m@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-full cursor-pointer'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className='flex items-center gap-2'>
                    <Loader2 className='animate-spin' />
                    Signing in...
                  </div>
                ) : (
                  'Sign in'
                )}
              </Button>
              <div className='text-center text-sm'>
                Don't have an account?{' '}
                <Link
                  to='/sign-up'
                  className='underline underline-offset-4'
                >
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export const Route = createFileRoute('/sign-in')({
  component: SignInForm,
});
