// import { stackClientApp } from '@/stack/client';
// import { StackHandler } from '@stackframe/react';
import { useUser } from '@stackframe/react';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useUser();
  if (!user) {
    return <Navigate to='/sign-in' />;
  }
  // const { isAuthenticated } = useStackAuth();
  return (
    <>
      {/* <StackHandler
        fullPage
        app={stackClientApp}
        location={window.location.pathname}
      /> */}
      <Outlet />
    </>
  );
}
