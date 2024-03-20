export default function PhantomLoader() {
  return (
    <article className="relative flex h-19 max-w-2xl items-center justify-center rounded-lg border border-dashed border-gray-300 bg-phantom-bg-primary p-3 shadow-sm">
      <div className="flex flex-col gap-y-2">
        <p className="text-phantom-text-secondary">
          Boo ! Nothing to see here.
        </p>
        <button className="rounded-lg bg-phantom-accent px-2 py-1 text-white">
          Use a new Phantom
        </button>
      </div>
    </article>
  );
}
