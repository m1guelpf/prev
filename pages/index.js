import React from 'react'

const Home = ({ message }) => <h1>{message}</h1>

export const php = `
    function getServerSideProps()
    {
        return ['message' => 'Hello World'];
    }
`

export default Home
