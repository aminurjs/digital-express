"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";
const NavItems = () => {
  console.log(PRODUCT_CATEGORIES);

  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const handleOpen = (i: number) => {
    if (activeIndex === i) {
      setActiveIndex(null);
    } else {
      setActiveIndex(i);
    }
  };
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => (
        <NavItem
          isAnyOpen={true}
          key={category.value}
          activeIndex={activeIndex}
          category={category}
          handleOpen={handleOpen}
          i={i}
        />
      ))}
    </div>
  );
};

export default NavItems;
