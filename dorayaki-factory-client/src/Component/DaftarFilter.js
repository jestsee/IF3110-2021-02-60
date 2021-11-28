import React from 'react'

export const DaftarFilter = ({filter, setFilter}) => {
    return (
        <span>
           Search: {' '}
           <input value = {filter || ''} onChange={e => setFilter(e.target.value)} /> 
        </span>
    )
}
