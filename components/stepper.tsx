type Props = {
  step: number | string;
  title: string;
};

export default function Stepper({ step, title }: Props) {
  return (
    <section>
      <p className='text-2xl font-bold text-secondary mb-3'>
        <span className='text-primary'>Step {step} </span>
        {title}{" "}
      </p>
      <p className='text-base text-secondary'>
        Upload your data, using your uploaded data we’ll create events,
        <br />
        click to download the sample below
      </p>
    </section>
  );
}
