import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>
                [Company Website]
            </h1>
            <nav>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function Events(){
    
    return(
        <div>
            <h1>
                [Company Events]
            </h1>
            
        </div>
    )
}

export function Contact(){
    return(
        <div>
            <h1>
                [Company Contact]
            </h1>
        </div>
    )
}

export function Whoops404(){
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resources not found at {location.pathname}</h1>
        </div>
    )
}