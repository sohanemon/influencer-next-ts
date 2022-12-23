import Image from "next/image";
import { socialIcons } from "../rights-side";
import man from "../../../assets/template/man.png";
import manInCard from "../../../assets/template/manInCard.png";
export default function Template() {
  return (
    <>
      <div className='bg-red-100 rounded-lg max-w-screen-md min-h-[200px] block mx-auto mt-2 p-10'>
        <p className='text-xl font-medium text-secondary'>Work Anniversary</p>
        <main className='grid grid-cols-12'>
          <Image className='rounded-lg col-span-3' alt='' src={man} />
          <div
            className='col-span-9 text-secondary space-y-2 pl-10
          '
          >
            <p className='text-4xl'>John Hill</p>
            <p>Date of Birth:</p>
            <p>Date of joining:</p>
            <p>Education:</p>
          </div>
          <div className='flex justify-between col-span-3 h-min mt-5'>
            {socialIcons.map((_) => (
              <Image
                className='cursor-pointer'
                height={30}
                width={30}
                alt=''
                src={_}
                key={JSON.stringify(_)}
              />
            ))}
          </div>
          <div />
          <div className='col-span-8'>
            <Image src={manInCard} alt='' className='' />
          </div>
        </main>
      </div>
    </>
  );
}
