/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root';
import { Route as SignUpRouteImport } from './routes/sign-up';
import { Route as SignOutRouteImport } from './routes/sign-out';
import { Route as SignInRouteImport } from './routes/sign-in';
import { Route as AuthRouteRouteImport } from './routes/_auth/route';
import { Route as IndexRouteImport } from './routes/index';
import { Route as HandlerSignInRouteImport } from './routes/handler/sign-in';
import { Route as AuthDashboardRouteImport } from './routes/_auth/dashboard';

const SignUpRoute = SignUpRouteImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRouteImport,
} as any);
const SignOutRoute = SignOutRouteImport.update({
  id: '/sign-out',
  path: '/sign-out',
  getParentRoute: () => rootRouteImport,
} as any);
const SignInRoute = SignInRouteImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRouteImport,
} as any);
const AuthRouteRoute = AuthRouteRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRouteImport,
} as any);
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any);
const HandlerSignInRoute = HandlerSignInRouteImport.update({
  id: '/handler/sign-in',
  path: '/handler/sign-in',
  getParentRoute: () => rootRouteImport,
} as any);
const AuthDashboardRoute = AuthDashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthRouteRoute,
} as any);

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/sign-in': typeof SignInRoute;
  '/sign-out': typeof SignOutRoute;
  '/sign-up': typeof SignUpRoute;
  '/dashboard': typeof AuthDashboardRoute;
  '/handler/sign-in': typeof HandlerSignInRoute;
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/sign-in': typeof SignInRoute;
  '/sign-out': typeof SignOutRoute;
  '/sign-up': typeof SignUpRoute;
  '/dashboard': typeof AuthDashboardRoute;
  '/handler/sign-in': typeof HandlerSignInRoute;
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport;
  '/': typeof IndexRoute;
  '/_auth': typeof AuthRouteRouteWithChildren;
  '/sign-in': typeof SignInRoute;
  '/sign-out': typeof SignOutRoute;
  '/sign-up': typeof SignUpRoute;
  '/_auth/dashboard': typeof AuthDashboardRoute;
  '/handler/sign-in': typeof HandlerSignInRoute;
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | '/'
    | '/sign-in'
    | '/sign-out'
    | '/sign-up'
    | '/dashboard'
    | '/handler/sign-in';
  fileRoutesByTo: FileRoutesByTo;
  to:
    | '/'
    | '/sign-in'
    | '/sign-out'
    | '/sign-up'
    | '/dashboard'
    | '/handler/sign-in';
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/sign-in'
    | '/sign-out'
    | '/sign-up'
    | '/_auth/dashboard'
    | '/handler/sign-in';
  fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AuthRouteRoute: typeof AuthRouteRouteWithChildren;
  SignInRoute: typeof SignInRoute;
  SignOutRoute: typeof SignOutRoute;
  SignUpRoute: typeof SignUpRoute;
  HandlerSignInRoute: typeof HandlerSignInRoute;
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/sign-up': {
      id: '/sign-up';
      path: '/sign-up';
      fullPath: '/sign-up';
      preLoaderRoute: typeof SignUpRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/sign-out': {
      id: '/sign-out';
      path: '/sign-out';
      fullPath: '/sign-out';
      preLoaderRoute: typeof SignOutRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/sign-in': {
      id: '/sign-in';
      path: '/sign-in';
      fullPath: '/sign-in';
      preLoaderRoute: typeof SignInRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/_auth': {
      id: '/_auth';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof AuthRouteRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/handler/sign-in': {
      id: '/handler/sign-in';
      path: '/handler/sign-in';
      fullPath: '/handler/sign-in';
      preLoaderRoute: typeof HandlerSignInRouteImport;
      parentRoute: typeof rootRouteImport;
    };
    '/_auth/dashboard': {
      id: '/_auth/dashboard';
      path: '/dashboard';
      fullPath: '/dashboard';
      preLoaderRoute: typeof AuthDashboardRouteImport;
      parentRoute: typeof AuthRouteRoute;
    };
  }
}

interface AuthRouteRouteChildren {
  AuthDashboardRoute: typeof AuthDashboardRoute;
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthDashboardRoute: AuthDashboardRoute,
};

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
);

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRouteRoute: AuthRouteRouteWithChildren,
  SignInRoute: SignInRoute,
  SignOutRoute: SignOutRoute,
  SignUpRoute: SignUpRoute,
  HandlerSignInRoute: HandlerSignInRoute,
};
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();
