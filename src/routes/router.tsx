import { ReactLocation } from "@tanstack/react-location";

export default [
  {
    path: "/",
    element: <h1>Home not important</h1>,
  },
  {
    path: "/about",
    element: <h1>you're in about</h1>,
  },
  {
    path: "/resume",
    element: <h1>you're in about</h1>,
  },
  {
    path: "/portfolio",
    element: <h1>you're in portfolio</h1>,
  },
  {
    path: "/contact",
    element: <h1>you're in contact</h1>,
  },
  {
    path: "*",
    element: <h1>you're lost</h1>,
  },
];

export const location = new ReactLocation();
