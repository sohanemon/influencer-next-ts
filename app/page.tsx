"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = {
    uid: 0,
  };

  if (user?.uid) router.push("/home");
  else router.push("/login");
  return (
    <div>
      <p className='text7xl'>Loading</p>{" "}
    </div>
  );
}
