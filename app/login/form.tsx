"use client";
import { Input } from "@material-tailwind/react";

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
    </section>
  );
}
