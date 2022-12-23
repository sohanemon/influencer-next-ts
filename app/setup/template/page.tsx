"use client";
import { RootState } from "../../../store";
import Stepper from "../../../components/stepper";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import cloud from "../../../assets/template/cloud.png";
import Image from "next/image";
import meetingImg from "../../../assets/template/Template (1).png";
import { open } from "../../../slices/modal-slice";
import birthdayImg from "../../../assets/template/Template (2).png";
import ArrowBtn from "../../../components/arrow-btn";
import joiningImg from "../../../assets/template/Template (3).png";
import festivalImg from "../../../assets/template/Template (4).png";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../../components/modal";

export default function Page() {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  return (
    <div className='relative '>
      <Link
        href='/setup/upload'
        className='mb-5 inline-flex items-center gap-2 hover:text-primary text-secondary'
      >
        <BsArrowLeft /> Back to step 1
      </Link>
      <Stepper step='2' title='Template Selection' />
      <button className='flex items-center gap-3 my-5'>
        <Image src={cloud} alt='' className='' />
        <p className='text-primary'>Your uploaded document</p>
      </button>

      {/* card section */}
      <section className='grid grid-cols-4 mt-16'>
        {images.map((_) => (
          <div key={_.title} className='w-48'>
            <p className='text-xs font-medium'>{_.title}</p>
            <Image
              src={_.image}
              alt=''
              className='hover:scale-[1.02] transition-all duration-200'
            />
            <p className='text-xs text-secondary mt-1'>{_.details}</p>
          </div>
        ))}
      </section>
      <div
        className='block ml-auto w-max mt-24'
        onClick={() => dispatch(open())}
      >
        <ArrowBtn finish />
      </div>
      {/* </Link> */}
      {modal && <Modal />}
    </div>
  );
}

const images = [
  {
    image: birthdayImg,
    title: "Birth Day",
    details: "Having 5 different thems, 5 different style",
  },
  {
    image: joiningImg,
    title: "Joining",
    details: "Having 5 different thems, 5 different style",
  },
  {
    image: festivalImg,
    title: "Festival",
    details: "Having 5 different thems, 5 different style",
  },
  {
    image: meetingImg,
    title: "Meeting",
    details: "Having 5 different thems, 5 different style",
  },
];
