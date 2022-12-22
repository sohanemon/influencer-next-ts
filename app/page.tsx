"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "../components/loader";
export default function Home() {
  const router = useRouter();
  const user = {
    uid: 0,
  };

  useEffect(() => {
    if (user?.uid) router.push("/home");
    else router.push("/login");

    return () => {};
  }, [router, user?.uid]);
  return (
    <div>
      <Loader />
    </div>
  );
}
