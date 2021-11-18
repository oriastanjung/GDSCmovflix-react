import React from 'react'
import Hero from './Hero'
import Movie from './Movie'

  
export default function Main() {
    
    return (
        <main id="header">
            <Hero></Hero>
            <div className="modal" id="modal"></div>
            <Movie></Movie>
        </main>
    )
}
