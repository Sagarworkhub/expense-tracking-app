// import { stackClientApp } from '@/stack/client';
// import { StackHandler } from '@stackframe/react';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
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
