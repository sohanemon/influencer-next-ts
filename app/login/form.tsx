"use client";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import Link from "next/link";
import PrimaryBtn from "../../components/primary-btn";

export default function Form() {
  return (
    <section className='w-72 mx-auto'>
      <Input
        label='Email'
        color='blue-gray'
        className=' h-10 !rounded-none [&~label]:before:rounded-tl-none [&~label]:after:rounded-tr-none !border-2'
      />
      <br />
      <Input
        label='Password'
        type='password'
        color='blue-gray'
        className=' h-10 !rounded-none [&~label]:before:rounded-tl-none [&~label]:after:rounded-tr-none !border-2'
      />
      <br />
      <div className='flex justify-between items-center'>
        <Checkbox
          className='checked:bg-primary checked:border-primary rounded-none border-2'
          label='Remember Me'
        />
        <Link href={"/setup/platform"}>
          <PrimaryBtn>Sign Up</PrimaryBtn>
        </Link>
      </div>
    </section>
  );
}
