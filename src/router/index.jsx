import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/pages/ErrorPage";
import { IssueListPage } from "../components/pages/IssueListPage";
import { RootPage } from "../components/pages/RootPage";
import { RegisteredPage } from "../components/pages/RegisteredPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lists",
    element: <RegisteredPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/issues",
    element: <IssueListPage />,
    errorElement: <ErrorPage />,
  },
]);
