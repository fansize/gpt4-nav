export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='container mx-auto w-full max-w-pc'>{children}</div>;
}
