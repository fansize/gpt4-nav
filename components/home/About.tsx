import Statistics from './Statistics';

export default function About() {
  return (
    <section id='about' className='py-12'>
      <div className='rounded-lg border bg-muted/50 py-12'>
        <div className='flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12'>
          <img src='/images/pilot.png' alt='' className='w-[300px] rounded-lg object-contain' />
          <div className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                <span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
                  About{' '}
                </span>
                GPT4oo
              </h2>
              <p className='mt-4 text-xl text-muted-foreground'>
                Get your favorite AI tools in GPT4oo AI Tools Directory. AI tools list are updated daily by GPT-4o. Its
                free to submit here to enhance your SEO now.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
}
