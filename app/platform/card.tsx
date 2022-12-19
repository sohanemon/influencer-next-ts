import Image from "next/image";

export default function Card() {
  return (
    <section className='grid grid-cols-4 gap-10 mt-20'>
      {platforms.map((_) => (
        <button
          key={_.title}
          className='border rounded-3xl border-secondary p-3 flex flex-col items-center py-5 hover:shadow-lg'
        >
          <Image src={_.img} alt='' width={45} height={45} className='' />
          <p className='font-bold text-secondary mt-2 mb-3'>{_.title} </p>
          <p className='text-center text-gray-600'>{_.details}</p>
        </button>
      ))}
    </section>
  );
}

const platforms = [
  {
    img: require("../../assets/platform/facebook.png"),
    title: "Facebook",
    details:
      "Social networking site, connect and share with family and friends online",
  },
  {
    img: require("../../assets/platform/linkedin.png"),
    title: "LinkedIn",
    details: "World's largest professional network on the internet",
  },
  {
    img: require("../../assets/platform/twitter.png"),
    title: "Twitter",
    details: "Stay connected through the exchange of quick, frequent messages",
  },
  {
    img: require("../../assets/platform/whatsapp.png"),
    title: "Whatsapp",
    details: "Take control over your community, content and data",
  },
];
