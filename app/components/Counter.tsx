export default function Counter({
  current,
  total,
}: Readonly<{
  current: number;
  total: number;
}>) {
  return (
    <span className="">
      {current} / {total}
    </span>
  );
}
