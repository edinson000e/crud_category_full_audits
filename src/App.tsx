import React, { useMemo, useState } from "react";
import "./App.css";

const initialCategories = [
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
  const [categories, setCategories] = useState(initialCategories);

  console.log("setCategories",setCategories)
  const categoriesWithParent = useMemo(() => {

    return categories.reduce((allCategoriesWithParent:any, category:any)=> {

      const copyAllCategoriesWithParents = [...allCategoriesWithParent]


      return copyAllCategoriesWithParents
    },[])

  }, [categories]);

  console.log("cateogir",categoriesWithParent)

  return <div className="App"></div>;
}

export default App;
