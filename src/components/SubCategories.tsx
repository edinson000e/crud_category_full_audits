import { useCallback } from "react";
import { CategoryWithParent } from "../App";

interface SubCategoriesProps {
  allCategories: CategoryWithParent[];
  search_parent_id: number;
  subCategory?: boolean;
}

export const SubCategories = ({
  allCategories,
  search_parent_id,
  subCategory = false,
}: SubCategoriesProps) => {
  let options: any = [];
  const getMenuItem = useCallback(
    (menuItem) => {
      if (menuItem.submenu && menuItem.submenu.length > 0) {
        return (
          <li>
            {menuItem.name}
            <SubCategories
              search_parent_id={menuItem.id}
              allCategories={allCategories}
              subCategory={true}
            />
          </li>
        );
      } else {
        return <li> {menuItem.name}</li>;
      }
    },
    [allCategories]
  );

  const subCategories =
    allCategories.find(({ parent_id }) => parent_id === search_parent_id)
          ?.categories || [];

  subCategories.forEach((item) => {
    options.push(getMenuItem(item));
  });
  if (subCategory) return <ul>{options}</ul>;
  return <ul>{options}</ul>;
};
