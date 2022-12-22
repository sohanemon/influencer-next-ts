import { BsArrowRight } from "react-icons/bs";
import PrimaryBtn from "./primary-btn";

export default function ArrowBtn({ finish }: { finish?: boolean }) {
  return (
    <>
      <PrimaryBtn>
        <span className='flex gap-3 items-center'>
          {finish ? "Finished" : "Next"} <BsArrowRight className='text-lg' />
        </span>
      </PrimaryBtn>
    </>
  );
}
