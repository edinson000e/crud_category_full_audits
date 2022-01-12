import React, { useMemo, useState } from "react";
import "./App.css";


interface Categories{
  id: number;
  name: string;
  order: number;
  category_parent: number;
}

interface CategoryWithParent {
  parent_id: number;
  categories: Categories[]
}

const initialCategories: Categories[] = [
  {
    id: 1,
    name: "test 1",
    order: 1,
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
    order: 3,
    category_parent: 0,
  },
  {
    id: 4,
    name: "test 2.1",
    order: 1,
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
];

function App() {
  const [categories, setCategories] = useState<Categories[]>(initialCategories);

  console.log("setCategories",setCategories)
  const categoriesWithParents = useMemo(() => {

    return categories.reduce(
      (allCategoriesWithParent: CategoryWithParent[], category: Categories) => {
        const copyAllCategoriesWithParents = [...allCategoriesWithParent];
        const indexParent = copyAllCategoriesWithParents.findIndex(({ parent_id }) => parent_id === category.category_parent)
        if (indexParent > -1) {
          const copyCategoryWithParent = [...copyAllCategoriesWithParents[indexParent].categories]
          copyCategoryWithParent.push(category);
          copyAllCategoriesWithParents[indexParent].categories =
            copyCategoryWithParent.sort(function (a, b) {
              return a.order - b.order;
            });
        } else {
          copyAllCategoriesWithParents.push({
            parent_id: category.category_parent,
            categories: [category]
          })
        }

        return copyAllCategoriesWithParents;
      },
      []
    );

  }, [categories]);

  console.log("cateogir",categoriesWithParents)

  return <div className="App"></div>;
}

export default App;
