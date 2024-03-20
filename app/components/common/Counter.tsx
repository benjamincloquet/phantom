export default function Counter({
  current,
  max,
}: Readonly<{
  current: number;
  max: number;
}>) {
  return (
    <span className="">
      {current} / {max}
    </span>
  );
}
