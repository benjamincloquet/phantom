export default function PhantomCategories({
  categories,
}: Readonly<{
  categories: string[];
}>) {
  return (
    <ul className="flex gap-x-2">
      {categories.map((category) => (
        <li
          key={category}
          className="rounded-md border border-phantom-accent px-1 text-sm text-phantom-accent"
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
