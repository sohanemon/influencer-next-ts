"use client";
import { BsArrowRight } from "react-icons/bs";
import Card from "./card";
import PrimaryBtn from "../../components/primary-btn";

export default function Page() {
  return (
    <section className='min-h-full'>
      <p className='text-3xl font-bold mt-6'>
        Welcome <span className='text-primary'>Damodhar</span>{" "}
      </p>
      <p className='text-secondary mt-3'>
        Please configure your social networks{" "}
      </p>
      <Card />
      <div className='block ml-auto w-max mt-24'>
        <PrimaryBtn>
          <span className='flex gap-3 items-center'>
            Next <BsArrowRight className='text-lg' />
          </span>
        </PrimaryBtn>
      </div>
    </section>
  );
}
