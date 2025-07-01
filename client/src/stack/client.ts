import { StackClientApp } from '@stackframe/react';
import { createBrowserHistory } from '@tanstack/react-router';

// Create a browser history instance for navigation outside of React components
const history = createBrowserHistory();

// Create a Stack client app with proper navigation configuration
export const stackClientApp = new StackClientApp({
  tokenStore: 'cookie',
  projectId: import.meta.env.VITE_STACK_PROJECT_ID,
  publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY,
  redirectMethod: {
    // Return a function that can be used in components
    useNavigate: () => {
      // This is just a factory function that returns the hook name
      // The actual hook will be imported and used in the component
      return () => null;
    },
    // For programmatic navigation outside of React components
    navigate: (to: string) => {
      history.push(to);
    },
  },
});
