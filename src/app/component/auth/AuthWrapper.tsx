'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useSelector((data: any) => data?.user?.userData);

  
  useEffect(()=>{
    if (!user) {
      router.push("/login");
     
    }

  },[user])

  return <>{children}</>
}