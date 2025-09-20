"use client";

import { Item } from "./types";
import { SimpleIcon } from "simple-icons";

interface Items {
  items: Item[];
}

const IconComponent = ({
  icon,
  size = 24,
}: {
  icon: SimpleIcon;
  size?: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="fill-current text-foreground"
    >
      <path d={icon.path} />
    </svg>
  );
};

const ItemsBox = ({ logo, name }: Item) => {
  return (
    <div className="flex gap-2 md:gap-4 items-center p-2 border border-border rounded-lg hover:bg-bg-muted transition-colors">
      <div className="w-5 h-5 flex items-center justify-center">
        <IconComponent icon={logo} />
      </div>
      <h1 className="text-sm md:text-2xl font-medium">{name}</h1>
    </div>
  );
};

export default function ItemList({ items }: Items) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
      {items.map((item, idx) => (
        <ItemsBox key={idx} {...item} />
      ))}
    </div>
  );
}
