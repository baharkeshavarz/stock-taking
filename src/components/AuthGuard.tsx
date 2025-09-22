import type { FC, PropsWithChildren } from "react";
import NotPermitted from "src/pages/createUser/components/NotPermitted";

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const metadata = JSON.parse(localStorage.getItem("metadata") || "{}");

  if (!metadata?.name) {
    return <NotPermitted />;
  }

  return children;
};

export default AuthGuard;
