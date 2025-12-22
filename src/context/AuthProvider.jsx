/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500">
            Authenticating...
          </p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
