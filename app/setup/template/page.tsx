import Stepper from "../../../components/stepper";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

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
    </>
  );
}
