"use client";
import { BsArrowRight } from "react-icons/bs";
import Card from "./card";
import Link from "next/link";
import PrimaryBtn from "../../../components/primary-btn";

export default function Page() {
  return (
    <section className='min-h-full'>
      <Card />
      <Link href='/setup/upload' className='block ml-auto w-max mt-24'>
        <PrimaryBtn>
          <span className='flex gap-3 items-center'>
            Next <BsArrowRight className='text-lg' />
          </span>
        </PrimaryBtn>
      </Link>
    </section>
  );
}
