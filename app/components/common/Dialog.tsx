import { useCallback, useRef } from "react";

export default function Dialog({
  children,
  render,
  onConfirm,
}: Readonly<{
  children: React.ReactNode;
  render: (openDialog: () => void) => void;
  onConfirm: () => void;
}>) {
  const dialog = useRef<HTMLDialogElement>(null);

  const openDialog = useCallback(() => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }, [dialog]);

  return (
    <>
      <dialog
        ref={dialog}
        className="rounded-lg px-6 pb-4 pt-6 backdrop:backdrop-blur-sm"
      >
        <form>
          {children}
          <div className="mt-4 flex justify-end gap-x-2">
            <button
              value="cancel"
              formMethod="dialog"
              className="rounded-md px-2 py-1 font-semibold ring-1 ring-inset ring-gray-300"
            >
              Cancel
            </button>
            <button
              value="default"
              formMethod="dialog"
              onClick={onConfirm}
              className="rounded-md bg-phantom-accent px-2 py-1 font-semibold text-white shadow-sm"
            >
              Confirm
            </button>
          </div>
        </form>
      </dialog>
      {render(openDialog)}
    </>
  );
}
