"use client";
import Image from "next/image";
import { router } from "next/client";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PrimaryBtn from "../../../components/primary-btn";
export default function Uploader() {
  const [dropped, setDropped] = useState(false);
  // const router = useRouter();
  useEffect(() => {
    if (dropped) {
      router.push("/setup/template");
    }

    return () => {};
  }, [dropped, router]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log("dropped ");
        setDropped(true);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className='w-full border border-secondary rounded-lg p-32'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className='text-center'>Drop the files here ...</p>
      ) : (
        <div className='gap-2 flex flex-col [&>*]:w-max '>
          <Image
            src={require("../../../assets/upload/cloud.png")}
            alt=''
            className='ml-2'
          />

          <p className='text-secondary'>Drag & Drop to Upload File</p>
          <div className='gap-2 flex flex-col items-center'>
            <p className='text-secondary'>Or</p>
            <div className='w-max'>
              <PrimaryBtn>Browse File</PrimaryBtn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
