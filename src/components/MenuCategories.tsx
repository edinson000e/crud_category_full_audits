import React from "react";
import { Categories } from "../App";

interface MenuCategoriesProps {
    allCategories: Categories[];
    submenu?: boolean
}

export const MenuCategories = ({
  allCategories,
  submenu = false,
}: MenuCategoriesProps) => {
  const getMenuItem = (menuItem: any) => {
    let name = menuItem.name;

    if (menuItem.children && menuItem.children.length > 0) {
      return (
        <li>
          {name}
          <MenuCategories allCategories={menuItem.children} submenu={true} />
        </li>
      );
    } else {
      return <li>{name}</li>;
    }
  };

  let options: any = [];
  allCategories.forEach((item: any) => {
    options.push(getMenuItem(item));
  });

  if (submenu && submenu === true) return <ul>{options}</ul>;

  return <ul>{options}</ul>;
};
