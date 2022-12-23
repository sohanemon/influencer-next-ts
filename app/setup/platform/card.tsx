import Image from "next/image";
import tick from "../../../assets/platform/tick.png";

import img1 from "../../../assets/platform/facebook.png";
import img2 from "../../../assets/platform/linkedin.png";
import img3 from "../../../assets/platform/twitter.png";
import img4 from "../../../assets/platform/whatsapp.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { toggleSocial } from "../../../slices/social-slice";
export default function Card() {
  const social = useSelector<RootState>((state) => state.social);
  const dispatch = useDispatch();
  return (
    <section className='grid grid-cols-4 gap-10 mt-20'>
      {platforms.map((_) => (
        <button
          key={_.title}
          className='border rounded-3xl border-secondary p-3 flex flex-col items-center py-5 hover:shadow-lg relative  transition-all group'
          onClick={() => dispatch(toggleSocial(_.title))}
        >
          {/* @ts-ignore */}
          {social[_.title] && (
            <Image
              src={tick}
              alt=''
              width={40}
              height={40}
              className='absolute right-3 top-3'
            />
          )}
          <Image
            src={_.img}
            alt=''
            width={45}
            height={45}
            // className='object-cover group-active:scale-[1.01]'
          />
          <p className='font-bold text-secondary mt-2 mb-3'>{_.title} </p>
          <p className='text-center text-gray-600'>{_.details}</p>
        </button>
      ))}
    </section>
  );
}

const platforms = [
  {
    img: img1,
    title: "facebook",
    details:
      "Social networking site, connect and share with family and friends online",
  },
  {
    img: img2,
    title: "linkedIn",
    details: "World's largest professional network on the internet",
  },
  {
    img: img3,
    title: "twitter",
    details: "Stay connected through the exchange of quick, frequent messages",
  },
  {
    img: img4,
    title: "whatsapp",
    details: "Take control over your community, content and data",
  },
];
