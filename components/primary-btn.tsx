import { Button } from "@material-tailwind/react";

export default function PrimaryBtn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Button color='deep-orange' className='bg-primary rounded-none px-8'>
        {children}
      </Button>
    </>
  );
}
