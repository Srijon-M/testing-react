import React from 'react';
import JobLocation from './JobLocation/JobLocation';

type GreetProps = {
    name?: string
}

const App = (props: GreetProps) => {
    return(
        <>
            <h1>Hello {props.name ? props.name : "Guest"}</h1>
            <JobLocation />
        </>
    )
}

export default App;