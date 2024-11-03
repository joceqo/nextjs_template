// create new files if needed
import type { ReactNode } from "react";

export type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode | undefined 
  className?: string;
}

