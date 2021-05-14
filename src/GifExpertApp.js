import React, {useState} from 'react';


export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Naruto', 'Full Metal'];
    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Full Metal']);

    const handleAdd = () => {
        //setCategories(['Death Note', ...categories]);
        setCategories ( cate => [ ...cate, 'Death Note'])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}
