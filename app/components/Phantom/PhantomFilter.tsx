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
        <div key={category.value} className="relative mb-1 max-w-30">
          <input
            type="radio"
            id={category.value}
            name={name}
            value={category.value}
            checked={selectedCategory === category.value}
            className="peer/input sr-only"
            onChange={() => onCategorySelected(category.value)}
            onClick={() => onCategoryClick(category)}
          />
          <label
            htmlFor={category.value}
            className="peer/label ml-1 block w-full cursor-pointer select-none text-phantom-text-secondary peer-checked/input:font-bold peer-checked/input:text-phantom-accent"
          >
            {category.label}
          </label>
          <span className="invisible absolute right-0 top-[2px] text-sm text-phantom-accent peer-checked/input:peer-hover/label:visible">
            &#10005;
          </span>
        </div>
      ))}
    </fieldset>
  );
}
