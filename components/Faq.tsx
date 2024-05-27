import { CircleHelp } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function TitleItem({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='flex items-center gap-1 text-2xl'>
      <CircleHelp /> {children}
    </h2>
  );
}

function ContentItem({ children }: { children: React.ReactNode }) {
  return <h3 className='mt-2'>{children}</h3>;
}

export default function Faq() {
  const t = useTranslations('Faq');
  return (
    <section id='faq' className='container pb-8 pt-24'>
      <h1 className='text-center text-2xl font-bold lg:pb-3 lg:text-3xl'>{t('title')}</h1>

      <div className='grid grid-cols-1 gap-5 px-3 lg:grid-cols-1 lg:gap-16 lg:px-0'>
        <Accordion type='multiple' className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>{t('1.question')}</AccordionTrigger>
            <AccordionContent>{t('1.answer')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>{t('2.question')}</AccordionTrigger>
            <AccordionContent>
              <ContentItem>{t('2.answer-1')}</ContentItem>
              <ContentItem>{t('2.answer-2')}</ContentItem>
              <ContentItem>{t('2.answer-3')}</ContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>{t('3.question')}</AccordionTrigger>
            <AccordionContent>
              <ContentItem>{t('3.answer-1')}</ContentItem>
              <ContentItem>{t('3.answer-2')}</ContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
