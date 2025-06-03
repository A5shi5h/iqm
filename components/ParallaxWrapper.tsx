"use client";

import { ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
}

export default function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  return <div className="fixed top-0 left-0 w-full h-screen">{children}</div>;
}
