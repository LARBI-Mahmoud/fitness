import PrivateLayout from "@packages/layouts/PrivateLayout";
import PublicLayout from "@packages/layouts/PublicLayout";
import { LoginPage } from "@packages/pages/homePage/src";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/', element: <LoginPage /> },
    ],
  },

];
