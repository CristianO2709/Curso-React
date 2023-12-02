import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
const [categories, setCategories] = useState(['dragon ball z']);

const onAddCategory = ( newCategory ) => {
    //cuando exista el elemento
    if (categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ]);
    // setCategories(cat => [...cat, 'Hola Mundo!!!']); 2da forma
}

return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ onAddCategory }
            // setCategories={ setCategories } 2da forma
        />

        {
            categories.map(( category ) => (
                <GifGrid 
                    key={ category } category={ category }
                />
            ))
        }
    </>
)}
