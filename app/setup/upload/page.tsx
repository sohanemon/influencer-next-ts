"use client";
import Stepper from "../../../components/stepper";
import { Button } from "@material-tailwind/react";
export default function Page() {
  return (
    <section>
      <Stepper title='Upload your data ' step='1' />
      <Button
        size='sm'
        ripple={true}
        variant='text'
        color='deep-orange'
        className='text-base p-0 hover:bg-transparent text-primary active:bg-transparent my-5 capitalize font-normal '
      >
        Download sample
      </Button>
    </section>
  );
}
