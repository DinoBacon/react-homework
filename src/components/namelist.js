import React from 'react'

function NameList(){
    const persons = [
        {
            id: 1,
            movie: "The Evil Dead",
            director: "Sam Raimi"
        },
        {
            id: 2,
            movie: "Jaws",
            director: "Steven Speilberg"
        },
        {
            id: 3,
            movie: "Pulp Fiction",
            director: "Quentin Tarantino"
        },
        {
            id: 4,
            movie: "Shaun of the Dead",
            director: "Edgar Wright"
        },
    ]

    const personList = persons.map(person => <h5>Movie: {person.movie} - Director: {person.director}</h5>)
    return <div>{personList}</div>
    
    
}

export default NameList