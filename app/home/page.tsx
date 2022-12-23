export default function Page() {
  return (
    <section className='flex'>
      <div className='w-40 h-96 bg-[#f1efde] p-4 space-y-3 '>
        {navItems.map((_) => (
          <p
            key={_}
            className='text-right text-sm font-medium border-b border-[#d9d9d9] pb-1 capitalize cursor-pointer'
          >
            {_}
          </p>
        ))}
      </div>
      <div className='grow'>ok</div>
    </section>
  );
}

const navItems = ["posts", "social apps", "template"];
