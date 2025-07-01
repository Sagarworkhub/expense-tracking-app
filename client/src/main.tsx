import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { stackClientApp } from './stack/client.ts';
import { StackProvider, StackTheme } from '@stackframe/react';
import './index.css';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StackProvider app={stackClientApp}>
        <StackTheme>
          <RouterProvider router={router} />
          <Toaster
            position='top-right'
            richColors
          />
        </StackTheme>
      </StackProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
