import { AppProps } from "next/app";

export type Component = AppProps["Component"] & {
  PageLayout?: React.FC<any>;
};

export type ComponentWithPageLayout = AppProps & {
  Component: Component;
};
