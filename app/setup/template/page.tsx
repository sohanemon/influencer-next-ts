import Stepper from "../../../components/stepper";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import cloud from "../../../assets/template/cloud.png";
import Image from "next/image";
import meetingImg from "../../../assets/template/Template (1).png";
import birthdayImg from "../../../assets/template/Template (2).png";
import joiningImg from "../../../assets/template/Template (3).png";
import festivalImg from "../../../assets/template/Template (4).png";

export default function Page() {
  return (
    <>
      <Link
        href='/setup/upload'
        className='mb-5 inline-flex items-center gap-2 hover:text-primary text-secondary'
      >
        <BsArrowLeft /> Back to step 1
      </Link>
      <Stepper step='2' title='Template Selection' />
      <div className='flex items-center gap-3 my-5'>
        <Image src={cloud} alt='' className='' />
        <p className='text-primary'>Your uploaded document</p>
      </div>

      {/* card section */}
      <section className='grid grid-cols-4'>
        {images.map((_) => (
          <div key={_.title} className='w-48'>
            <p className='text-xs font-medium'>{_.title}</p>
            <Image src={_.image} alt='' className='' />
            <p className='text-xs text-secondary'>{_.details}</p>
          </div>
        ))}
      </section>
    </>
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
