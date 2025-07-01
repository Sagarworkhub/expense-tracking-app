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

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

function SignUpForm() {
  const user = useUser();

  const app = useStackApp();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(data: SignUpFormValues) {
    setIsSubmitting(true);
    try {
      const result = await app.signUpWithCredential({
        email: data.email,
        password: data.password,
      });

      if (result.status === 'error') {
        toast.error(result.error.message);
        console.error('Registration failed:', result.error.message);
        return;
      } else {
        toast.success('Account created successfully');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignUp() {
    await app.signInWithOAuth('google');
  }

  if (user) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className='flex flex-col gap-6 max-w-md mx-auto py-10'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Create an account</CardTitle>
          <CardDescription>
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Button
            onClick={handleGoogleSignUp}
            className='w-full cursor-pointer'
          >
            Sign up with Google
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
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
                    Signing up...
                  </div>
                ) : (
                  'Sign up'
                )}
              </Button>
              <div className='text-center text-sm'>
                Already have an account?{' '}
                <Link
                  to='/sign-in'
                  className='underline underline-offset-4'
                >
                  Sign in
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export const Route = createFileRoute('/sign-up')({
  component: SignUpForm,
});
