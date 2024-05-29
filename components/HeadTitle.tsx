export default function HeadTitle({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold md:text-4xl '>{title}</h1>
      <h2 className='mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4'>{subTitle}</h2>
    </div>
  );
}
