import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['one punch man']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Naruto']);
    // }

    return (
        <>
            <h2>Buscador de gifts</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( cat => (
                        <GiftGrid key={cat} category={cat} />
                    ))
                }
            </ol>
        </>
    )
}
    
