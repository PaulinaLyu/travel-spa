import CataloguePage from "../pages/CataloguePage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  CATALOGUE = "catalogue",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CATALOGUE]: "catalogue",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CATALOGUE]: {
    path: RoutePath.catalogue,
    element: <CataloguePage />,
  },
  // [AppRoutes.PROFILE]: {
  //   path: RoutePath.profile,
  //   element: <ProfilePage />,
  //   authOnly: true,
  // },
  //last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
