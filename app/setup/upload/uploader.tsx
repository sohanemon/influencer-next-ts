"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PrimaryBtn from "../../../components/primary-btn";
import cloud from "../../../assets/upload/cloud.png";
export default function Uploader({}) {
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log("dropped ");
        // setDropped(true);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });
  const files = acceptedFiles.map((file) => {
    console.log(file);
    return (
      // @ts-ignore
      <p key={file.path}>
        {/* @ts-ignore */}
        {file.path} - {file.size} bytes
      </p>
    );
  });
  const handleDownload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
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

  const download = (
    <div>
      <button onClick={(e) => handleDownload(e)}>Download</button>
    </div>
  );
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
          <Image src={cloud} alt='' className='ml-2' />

          <p className='text-secondary'>Drag & Drop to Upload File</p>
          <div className='gap-2 flex flex-col items-center'>
            <p className='text-secondary'>Or</p>
            <div className='w-max'>
              <PrimaryBtn>Browse File</PrimaryBtn>
            </div>
          </div>
          {files}
          {download}
        </div>
      )}
    </div>
  );
}
