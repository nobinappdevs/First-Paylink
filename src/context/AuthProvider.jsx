/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SkeletonLoader from "@/components/Sheared/Skeleton";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    const sessionToken = sessionStorage.getItem("authToken");
    const authToken = localToken || sessionToken;

    setToken(authToken);

    const isAuthPage =
      pathname.startsWith("/login") ||
      pathname.startsWith("/register");

    const isDashboardPage =
      pathname.startsWith("/dashboard");
    if (!authToken && isDashboardPage) {
      router.replace("/login");
      return;
    }
    if (authToken && isAuthPage) {
      router.replace("/dashboard");
      return;
    }

    setIsReady(true);
  }, [pathname, router]);
  if (!isReady) {
    return (
      <SkeletonLoader layout="layout" />
    );
  }

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
