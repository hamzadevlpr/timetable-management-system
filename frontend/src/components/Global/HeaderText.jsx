import React from 'react'

function HeaderText(props) {
    return (
        <>
            <h1 className="text-center py-2 text-gray-800 font-bold text-3xl">{props.title}</h1>
        </>
    )
}

export default HeaderText