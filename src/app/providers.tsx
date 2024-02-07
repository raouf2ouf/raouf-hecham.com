"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

export function Providers(props: { children: ReactNode }) {
  return <NextUIProvider>{props.children}</NextUIProvider>;
}
