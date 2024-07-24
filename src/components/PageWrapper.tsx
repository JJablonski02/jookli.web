import React from "react";
import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <main className="max-w-[1920px] mx-auto ">{children}</main>;
};

export default PageWrapper;
