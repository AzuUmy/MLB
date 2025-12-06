import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { Score } from "../Pages/Score";
import { Games } from "../Pages/Games";
import MainLayout from "../Layouts/MainLayout";
import LoginLayout from "../Layouts/LoginLayout";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main-layout",
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});

const loginLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "login-layout",
  component: () => (
    <LoginLayout>
      <Outlet />
    </LoginLayout>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => loginLayoutRoute,
  path: "/login",
});

const indexRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({
      to: "/Games",
    });
  },
});

const gamesRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/Games",
  component: Games,
});

const scoreRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/Score",
  component: Score,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  gamesRoute,
  scoreRoute,
  loginLayoutRoute.addChildren([loginRoute]),
  mainLayoutRoute.addChildren([gamesRoute, scoreRoute]),
]);

export const Router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}
