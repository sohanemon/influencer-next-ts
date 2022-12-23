import { useDispatch } from "react-redux";
import PrimaryBtn from "./primary-btn";
import { close } from "../slices/modal-slice";
import Link from "next/link";

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <div className='grid place-content-center absolute -top-32 left-1/2 -translate-x-1/2 w-full '>
      <div className='bg-white border rounded-2xl border-secondary p-14'>
        <div className='flex justify-between'>
          <p className='font-semibold'>Birth Day</p>
          <p className='font-semibold text-secondary'>
            <span className='text-primary'>3</span> Selected
          </p>
        </div>
        {/* Card section start */}
        <div className='grid grid-cols-4 my-10 gap-8'>
          {
            // @ts-ignore
            [...Array<number>(8).keys()].map((_) => (
              <div key={_} className='w-32 '>
                <p className='text-xs'>Rainbow</p>
                <div className='w-36 h-44 bg-red-600 border-2 border-red-400' />
                <p className='text-[10px] text-secondary'>
                  having 5 different themes, 5 different style
                </p>
              </div>
            ))
          }
        </div>
        <div className='bg-yellow-100 p-3 rounded'>
          <p className='text-sm text-gray-700'>
            Above selected template will send randomly
          </p>
        </div>
        <div className='flex justify-end gap-5 mt-10'>
          <div onClick={() => dispatch(close())}>
            <PrimaryBtn>Cancel</PrimaryBtn>
          </div>

          <Link onClick={() => dispatch(close())} href='/home'>
            <PrimaryBtn>Save</PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
