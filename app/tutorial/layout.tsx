import { Navbar } from '@/components';

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className={'pageContainer'}>{children}</div>
    </>
  );
}
