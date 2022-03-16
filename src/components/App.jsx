import React, { useState, useEffect } from "react";
import Greeter from "./Greeter";

const App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleToggle = () => {
        setLoaded(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)

        }, 3000);
    }, [])// it runs one time only when the page is loading 



    if (loaded) {
        return (
        <div className="text-center justify-content-center">
            <h1 className="text-center" >Hello World!</h1>
            <Greeter phrase="Hey" name="Luke" />
            <Greeter phrase="Howdy" name="Jenna" />
            <Greeter phrase="What's up" name="Lannie" />
            <input value={username} onChange={handleUsername} />
            <p>"You are logging in as :{username}</p>

        </div>
           
        );
    }
    return (
           <div className="card text-center w-50 h-25 ">
                <h5 className="card-header">Reacting to React</h5>
                <div className="card-body">
                    <h5 className="card-title">Website is loading</h5>

                    <button type="button" className="btn btn-outline-primary" onClick={handleToggle}>click</button>
                </div>
            </div>


    );


}

export default App;