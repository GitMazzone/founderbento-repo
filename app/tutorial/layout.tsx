export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={'pageContainer'}>{children}</div>
    </>
  );
}
