import React from 'react'
import Calculator from '../Component/Calculator'
import Header from '../Nav-Bar/Header'

const Calculate = () => {
    return (
        <>
            <Header/>
            <div>Calling from Calculator</div>
            <Calculator />
        </>
    )
}

export default Calculate