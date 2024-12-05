import PrivateLayout from "@packages/layouts/PrivateLayout";
import PublicLayout from "@packages/layouts/PublicLayout";
import { HomePage, LoginPage } from "@packages/pages/homePage/src";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
 
];
