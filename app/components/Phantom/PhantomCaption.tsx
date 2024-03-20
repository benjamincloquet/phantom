export default function PhantomCaption({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <span className={`text-phantom-text-secondary text-sm ${className}`}>
      {children}
    </span>
  );
}
