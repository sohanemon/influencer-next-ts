"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const user = {
    uid: 0,
  };

  useEffect(() => {
    if (user?.uid) router.push("/home");
    else router.push("/login");

    return () => {};
  }, [user?.uid]);
  return (
    <div>
      <p className='text7xl'>Loading</p>{" "}
    </div>
  );
}
