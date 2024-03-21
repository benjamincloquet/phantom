type Category = { label: string; value: string };

export default function PhantomFilter({
  category: selectedCategory,
  categories,
  name,
  onCategorySelected,
}: Readonly<{
  category: string | null;
  categories: Category[];
  name: string;
  onCategorySelected: (categoryValue: string | null) => void;
}>) {
  const onCategoryClick = (category: Category) => {
    if (selectedCategory === category.value) {
      onCategorySelected(null);
    }
  };

  return (
    <fieldset className="mb-4">
      <legend className="mb-2 text-sm text-phantom-text-secondary">
        {name}
      </legend>
      {categories.map((category) => (
        <div
          key={category.value}
          className="group relative mb-1 max-w-30 focus-within:ring-2  focus-within:ring-phantom-accent"
        >
          <input
            type="radio"
            id={category.value}
            name={name}
            value={category.value}
            checked={selectedCategory === category.value}
            className="peer sr-only"
            onChange={() => onCategorySelected(category.value)}
            onClick={() => onCategoryClick(category)}
          />
          <label
            htmlFor={category.value}
            className="ml-1 block w-full cursor-pointer select-none text-phantom-text-secondary peer-checked:font-bold peer-checked:text-phantom-accent"
          >
            {category.label}
          </label>
          <span className="absolute right-4 top-[2px] cursor-pointer text-sm text-phantom-accent opacity-0 group-hover:peer-checked:opacity-100">
            &#10005;
          </span>
        </div>
      ))}
    </fieldset>
  );
}
