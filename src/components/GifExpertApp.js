import { useState } from "react";
import { CategoryAdd } from "./CategoryAdd";
import { GifGrid } from "./GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  //   const handleAdd = () => {
  //     //setCategories([...categories, "Digimon"]);
  //     setCategories((categ) => [...categ, "Digimon"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
