export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mx-auto px-2 lg:max-w-4xl">{children}</div>;
}
