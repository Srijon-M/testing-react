import React from 'react';
// import JobLocation from './JobLocation/JobLocation';
// import { Skills } from './Skills/Skills';
import { Counter } from './Counter/Counter';
import MuiApp from './MuiApp/Muiapp';

type GreetProps = {
    name?: string
}

const App = (props: GreetProps) => {

    // const skills = ["React", "typescript"];

    return(
        <>
            <h1>Hello {props.name ? props.name : "Guest"}</h1>
            {/* <JobLocation />
            <Skills skills={skills}/> */}
            <Counter />
            <MuiApp />
        </>
    )
}

export default App;