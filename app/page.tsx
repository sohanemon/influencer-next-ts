"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router);
  const user = {
    uid: 0,
  };

  if (user?.uid) router.push("/home");
  else router.push("/login");
}
