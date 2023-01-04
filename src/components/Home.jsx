import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1 className="title">Spy game</h1>
            <div className="choose-option">
                <Link to='choose' className="type">Join game</Link>
                <Link to='create' className="type">Create game</Link>
                <Link to='admin' className="type">Only for admin</Link>
            </div>
        </>
    )
}
