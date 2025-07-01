import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Outlet,

  notFoundComponent: () => {
    return <p>This page does not exist!</p>;
  },
});
