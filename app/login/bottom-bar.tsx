import Image from "next/image";
import img1 from "../../assets/login/icons (1).png";
import img2 from "../../assets/login/icons (2).png";
import img3 from "../../assets/login/icons (3).png";
export default function BottomBar() {
  return (
    <section className='grid grid-cols-3 justify-between justify-items-center gap-16 my-32'>
      {images.map((_) => (
        <div className='flex flex-col items-center px-8' key={_.title}>
          <Image src={_.img} alt='' width={90} height={90} className='' />
          <p className='font-extrabold text-secondary mt-3 mb-4'>{_.title}</p>
          <p className='text-center text-gray-600'>{_.details}</p>
        </div>
      ))}
    </section>
  );
}

const images = [
  {
    img: img1,
    title: "Single platform",
    details: "Your LinkedIn, Facebook, Tweeter post available in one platform",
  },
  {
    img: img2,
    title: "Boost engagement",
    details: "Use Live streaming, push notifications and messaging.",
  },
  {
    img: img3,
    title: "Gain total control",
    details: "Take control over your community, content and data",
  },
];
