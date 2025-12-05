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

const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({
      to: "/Games",
    });
  },
});

const gamesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Games",
  component: Games,
});

const scoreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Score",
  component: Score,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  gamesRoute,
  scoreRoute,
]);

export const Router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}
