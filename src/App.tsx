import React from "react";
import { useMemo, useState } from "react";
import "./App.css";
import { MenuCategories } from "./components";

export interface Categories {
  id: number;
  name: string;
  order: number;
  category_parent: number;
  subCategory?: Categories[];
}

export interface CategoryWithParent {
  parent_id: number;
  categories: Categories[];
}

const initialCategories: Categories[] = [
  {
    id: 1,
    name: "test 1",
    order: 3,
    category_parent: 0,
  },
  {
    id: 2,
    name: "test 2",
    order: 2,
    category_parent: 0,
  },
  {
    id: 3,
    name: "test 3",
    order: 1,
    category_parent: 0,
  },
  {
    id: 4,
    name: "test 2.1",
    order: 2,
    category_parent: 2,
  },
  {
    id: 5,
    name: "test 2.1.1",
    order: 1,
    category_parent: 4,
  },
  {
    id: 6,
    name: "test 2.2",
    order: 1,
    category_parent: 2,
  },
  {
    id: 7,
    name: "test 1.1",
    order: 1,
    category_parent: 1,
  },
  {
    id: 8,
    name: "test 1.2",
    order: 2,
    category_parent: 1,
  },
  {
    id: 9,
    name: "test 1.2.1",
    order: 1,
    category_parent: 8,
  },
  {
    id: 10,
    name: "test 1.2.2",
    order: 2,
    category_parent: 8,
  },
];

function App() {
  const [categories, setCategories] = useState<Categories[]>(initialCategories);

  const categoriesWithParents = useMemo(() => {
    const nest = (items: any, id = 0) =>
      items
        .filter((item: any) => item.category_parent === id)
        .sort((a: Categories, b: Categories) => a.order - b.order)
        .map((item: any) => ({ ...item, children: nest(items, item.id) }));
    return nest(categories);
  }, [categories]);

  console.log("categories", categoriesWithParents);

  return (
    <div className="App">
      holaaaa
      <MenuCategories allCategories={categoriesWithParents} />
    </div>
  );
}

export default App;
