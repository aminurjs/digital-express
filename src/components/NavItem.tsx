"use client";

import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORIES)[number];
interface NavItemProps {
  category: Category;
  handleOpen: (i: number) => void;
  isAnyOpen: boolean;
  activeIndex: null | number;
  i: number;
}

const NavItem = ({
  category,
  handleOpen,
  isAnyOpen,
  activeIndex,
  i,
}: NavItemProps) => {
  const isOpen = i === activeIndex;
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          onClick={() => handleOpen(i)}
          className="gap-1.5"
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
    </div>
  );
};

export default NavItem;
