export default function PhantomLoader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="relative mx-auto flex min-h-20 w-full max-w-2xl items-center justify-center rounded-lg border border-dashed border-gray-300 bg-phantom-bg-primary p-3 shadow-sm lg:h-19">
      {children}
    </article>
  );
}
