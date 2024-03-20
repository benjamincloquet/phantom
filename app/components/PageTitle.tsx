export default function PageTitle({
  text,
}: Readonly<{
  text: string;
}>) {
  return <h1 className="text-2xl font-bold">{text}</h1>;
}
