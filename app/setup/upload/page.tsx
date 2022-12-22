"use client";
import Stepper from "../../../components/stepper";
import Uploader from "./uploader";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PrimaryBtn from "../../../components/primary-btn";
import cloud from "../../../assets/upload/cloud.png";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import ArrowBtn from "../../../components/arrow-btn";
export default function Page() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log("dropped ");
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });
  const handleBlobLink = () => {
    const fr = new FileReader();
    fr.readAsDataURL(acceptedFiles[0]);

    var blob = new Blob([acceptedFiles[0]]);

    var objectURL = window.URL.createObjectURL(blob);
    console.log(objectURL);

    /* ------------------- creating the link for download ------------------ */
    const link = document.createElement("a");
    link.href = objectURL;
    link.download = "file se.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const files = acceptedFiles.map((file) => {
    return (
      // @ts-ignore
      <p key={file.path} className='text-secondary text-xs tracking-wide'>
        {/* @ts-ignore */}
        {file.path} - {file.size} bytes
      </p>
    );
  });
  return (
    <section>
      <Stepper title='Upload your data ' step='1' />
      <Button
        variant='text'
        color='deep-orange'
        className='text-base p-0 hover:bg-transparent text-primary active:bg-transparent my-5 capitalize font-normal '
        onClick={handleBlobLink}
      >
        Download sample
      </Button>
      <div
        {...getRootProps()}
        className='w-full border border-secondary rounded-lg p-32'
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className='text-center'>Drop the files here ...</p>
        ) : (
          <div className='gap-2 flex flex-col [&>*]:w-max '>
            <Image src={cloud} alt='' className='ml-2' />

            <p className='text-secondary'>Drag & Drop to Upload File</p>
            <div className='gap-2 flex flex-col items-center'>
              <p className='text-secondary'>Or</p>
              <div className='w-max'>
                <PrimaryBtn>Browse File</PrimaryBtn>
              </div>
            </div>
            {files}
          </div>
        )}
      </div>
      <Link href='/setup/template' className='block ml-auto w-max mt-24'>
        <ArrowBtn />
      </Link>
    </section>
  );
}
