import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GridItem } from './GridItem';

export const GiftGrid = ({ category }) => {

    const { data:images , loading } = useFetchGifts(category);

    return (
        <>
            <h3> { category } </h3>

            { loading && <p>Cargando...</p> }

            <div className='card-grid'>

                {
                    images.map( img => (
                        <GridItem key={img.id} {...img} />
                    ))
                }

            </div>
            <hr/>
        </>
    )
}
