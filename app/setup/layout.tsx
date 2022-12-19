export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <p className='text-3xl font-bold mt-6'>
          Welcome <span className='text-primary'>Damodhar</span>{" "}
        </p>
        <p className='text-secondary mt-2 mb-10'>
          Please configure your social networks
        </p>
        {children}
      </main>
    </>
  );
}
