import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./assets/themes/theme.ts";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./pages/error/page.tsx";
import { AuthLayout } from "./layouts/authLayout.tsx";
import { Profile } from "./pages/profile/page.tsx";
import { Trigger } from "./pages/trigger/page.tsx";
import { MnM } from "./pages/mnm/page.tsx";
import { Onboarding } from "./pages/onboarding/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "onboarding",
    element: <Onboarding />,
    errorElement: <ErrorPage />
  },
  {
    path: "app",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "trigger",
        element: <Trigger />
      },
      {
        path: "MnM",
        element: <MnM />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
