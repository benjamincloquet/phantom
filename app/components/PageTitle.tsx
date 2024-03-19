export default function PageTitle({
  text,
}: Readonly<{
  text: string;
}>) {
  return <h1 className="text-xl font-bold">{text}</h1>;
}
