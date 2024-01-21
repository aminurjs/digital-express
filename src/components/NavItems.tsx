"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const handleOpen = (i: number) => {
    if (activeIndex === i) {
      setActiveIndex(null);
    } else {
      setActiveIndex(i);
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
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
