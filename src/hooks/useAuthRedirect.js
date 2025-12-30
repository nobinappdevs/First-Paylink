"use client";
// Packages
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuthRedirect = () => {
    // Local State
    const [authloading, setAuthLoading] = useState(true);
    // Instance
    const router = useRouter();

    useEffect(() => {
        const token =
            localStorage.getItem("jwtToken") ||
            sessionStorage.getItem("jwtToken");

        // 👉 যদি login করা থাকে, তাহলে login page এ থাকতে দেবে না
        if (token) {
            router.replace("/dashboard");
        } else {
            setAuthLoading(false);
        }
    }, [router]);

    return authloading;
};

// Export Function
export default useAuthRedirect;
