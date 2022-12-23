import Link from "next/link";
import RightSide from "./rights-side";
export default function Page() {
  return (
    <section className='flex mt-10'>
      <div className='w-40 h-96 bg-[#f1efde] p-4 space-y-3 '>
        {navItems.map((_) => (
          <p
            key={JSON.stringify(_)}
            className='text-right text-sm font-medium border-b border-[#d9d9d9] pb-1 capitalize cursor-pointer'
          >
            {_}
          </p>
        ))}
      </div>
      <RightSide />
    </section>
  );
}

const navItems = [
  "posts",
  "social apps",
  <Link key='template' href={"/home/template"}>
    Template
  </Link>,
];
