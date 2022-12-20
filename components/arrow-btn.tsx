import { BsArrowRight } from "react-icons/bs";
import PrimaryBtn from "./primary-btn";

export default function ArrowBtn() {
  return (
    <>
      <PrimaryBtn>
        <span className='flex gap-3 items-center'>
          Next <BsArrowRight className='text-lg' />
        </span>
      </PrimaryBtn>
    </>
  );
}
