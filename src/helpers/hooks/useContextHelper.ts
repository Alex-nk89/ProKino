import { createContext } from "react";

export const createContextHelper = <T>(displayName: string) => {
  const context = createContext<T>({} as T);
  context.displayName = displayName;

  return context;
};
