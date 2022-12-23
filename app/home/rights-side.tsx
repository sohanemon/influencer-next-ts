import Image from "next/image";
import { BsClock } from "react-icons/bs";
import img1 from "../../assets/platform/facebook.png";
import img2 from "../../assets/platform/linkedin.png";
import img3 from "../../assets/platform/twitter.png";
import img4 from "../../assets/platform/whatsapp.png";
export default function RightsSide() {
  return (
    <div className='grow'>
      <input
        placeholder='Search'
        className='bg-white pl-4 placeholder:text-secondary/50 block mx-auto border rounded border-secondary outline-secondary'
        style={{ width: 520, height: 32 }}
      />
      <div className='flex m-6 gap-6'>
        <div className='bg-white grow border rounded-lg border-secondary p-6'>
          <div className='flex pb-6'>
            <p className='text-xl font-bold text-primary grow'>Execute Tasks</p>
            <p className='w-2.5 h-6 text-xl font-bold tracking-widest text-secondary cursor-pointer'>
              {"<"}
            </p>
            <p className='text-xl font-bold text-center text-secondary mx-6'>
              Today
            </p>{" "}
            <p className='w-2.5 h-6 text-xl font-bold tracking-widest text-secondary cursor-pointer'>
              {">"}
            </p>
          </div>{" "}
          {/* Tasks section */}
          <main className='space-y-2'>
            <div className='bg-yellow-100 rounded-lg flex p-5 gap-4 items-center'>
              <p className='w-4 h-12 text-4xl font-bold'>2</p>
              <div className='grow'>
                <p className='text-xl font-bold text-secondary mb-1'>
                  Birth Day Wish
                </p>
                <p className='text-sm font-bold underline text-secondary'>
                  hurix.all@hurix.com
                </p>
              </div>
              {clock}
            </div>
            {subMenu}
            {subMenu}
          </main>
        </div>

        <div className='space-y-2'>
          <div className='w-64 h-60 bg-white border rounded-lg border-green-800' />
          <div className='w-64 h-52 bg-white border rounded-lg border-green-800' />
        </div>
      </div>
    </div>
  );
}

const clock = (
  <>
    <BsClock className='text-2xl stroke-[0.2px]' />
    <Image
      height={31}
      width={44}
      alt=''
      className='w-8 h-11'
      src='https://via.placeholder.com/31x44'
    />
  </>
);
export const socialIcons = [img1, img2, img3, img4];
const subMenu = (
  <>
    <div className='bg-red-50 rounded-lg ml-auto p-6 flex w-[95%] items-center'>
      <p className=' font-medium text-secondary grow'>John Hill</p>
      <div className='flex gap-4 items-center'>
        {socialIcons.map((_) => (
          <Image
            key={_.blurDataURL}
            src={_}
            width={24}
            height={24}
            alt=''
            className=''
          />
        ))}
        {clock}
      </div>
    </div>
  </>
);
