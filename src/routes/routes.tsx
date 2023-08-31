import * as React from "react";
import { useRoutes } from "react-router-dom";
import { URLS } from "./urls";
import MainLayout from "../layout";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <React.Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </React.Suspense>
  );

const Home = Loadable(React.lazy(() => import("../pages/home")));

export const Routes = () => {
  const element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: URLS.HOME,
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <>Page Not Found</>,
    },
  ]);
  return element;
};
