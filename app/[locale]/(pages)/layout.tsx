import Footer from '@/components/home/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='w-full mx-auto flex'>{children}</main>
      <Footer />
    </>
  );
}
