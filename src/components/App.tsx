import React from 'react';

type GreetProps = {
    name?: string
}

const App = (props: GreetProps) => {
    return(
        <h1>Hello {props.name}</h1>
    )
}

export default App;