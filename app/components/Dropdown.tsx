"use client";

import { useState } from "react";

function DropdownItem({
  children,
  onClick,
}: Readonly<{ children: React.ReactNode; onClick?: () => void }>) {
  return (
    <li className="hover:bg-phantom-bg-primary focus:bg-phantom-accent active:bg-phantom-bg-primary block text-sm text-gray-700 focus:outline-none focus:ring">
      <button
        className="w-full px-2 py-2 text-left"
        role="menuitem"
        onClick={() => onClick && onClick()}
      >
        {children}
      </button>
    </li>
  );
}

function Dropdown({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div className="group relative inline-block text-left">
      <button
        type="button"
        className="gap-x-1.5 inline-flex w-full justify-center rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {title}
        <svg
          className="-mr-1 h-[20px] w-[20px] text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <ul
        className={`w-32 invisible absolute right-0 z-10 mt-1 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-focus-within:visible`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {children}
      </ul>
    </div>
  );
}

Dropdown.Item = DropdownItem;

export default Dropdown;
