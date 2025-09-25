import React from 'react'

function printSomething(e, user){
    console.log(e);
    console.log("Hello" + user);
}

const Content = () => {
    return (
        <main>
            <h1>Main content </h1>
            <button className="button-75" role="button" onClick = {(e) => printSomething(e, "thilaka")} >
                <span className="text">Click ME!!</span>
            </button>
            
        </main>
    )
}

export default Content
