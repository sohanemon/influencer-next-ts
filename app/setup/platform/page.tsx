"use client";
import Link from "next/link";
import Card from "./card";
import ArrowBtn from "../../../components/arrow-btn";

export default function Page() {
  return (
    <section className='min-h-full'>
      <Card />
      <Link href='/setup/upload' className='block ml-auto w-max mt-24'>
        <ArrowBtn />
      </Link>
    </section>
  );
}
