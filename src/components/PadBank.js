import React from 'react'
import {useSelector} from 'react-redux';

const PadBank = () => {
    const name = useSelector(state => state.name)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default PadBank
