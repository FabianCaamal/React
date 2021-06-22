import React from 'react'
import PropTypes from 'prop-types'

export const GridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animate__fadeInDown' >
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

GridItem.propType = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
