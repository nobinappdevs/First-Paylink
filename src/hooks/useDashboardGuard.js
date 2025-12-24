"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useDashboardGuard = () => {
const router = useRouter();
const [loading, setLoading] = useState(true); // start as true

useEffect(() => {
    const checkAuth = async () => {
        const token = localStorage.getItem("jwtToken") || sessionStorage.getItem("jwtToken");
        const userInfo = localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo");

        if (!token) {
            if (userInfo) {
                localStorage.removeItem("userInfo");
                sessionStorage.removeItem("userInfo");
            }
            router.replace("/login");
            return;
        }

        setLoading(false);
    };

    checkAuth();
    }, [router]);

    return loading;
};

export default useDashboardGuard;