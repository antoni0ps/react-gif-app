import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {



    const [categories, setCategories] = useState(['Dragon Ball']);


    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp