import React from "react";
import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <main className="mx-auto max-w-[1920px]">{children}</main>;
};

export default PageWrapper;
