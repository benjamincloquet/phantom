export default function Toggle({ value }: Readonly<{ value: boolean }>) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={value}
        className="peer sr-only"
        disabled
      />
      <div className="peer-checked:bg-phantom-accent peer relative h-3 w-5 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-[20px] after:w-[20px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-2 peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      <span className="text-phantom-text-secondary peer-checked:text-phantom-accent ms-1 text-xs font-bold dark:text-gray-300">
        {value ? "ON" : "OFF"}
      </span>
    </label>
  );
}
