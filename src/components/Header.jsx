import React from "react";
// import Student from "./student";
import { Student } from "./Student";

export const Header = () => {
    return (
        <div>
        <div>
            <ul className="items">
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Cart
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
            </div>
        </div>
    )
}

export const GetStudent = () => {
    return(
        <div>
            <Student />
            <Student />
            <Student />
        </div>
    )
}

class ComponentClass extends React.Component{
    render(){
        return(
             <div>
            <ul className="items">
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Cart
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Testimonials
                </li>
            </ul>
        </div>
        )
    }
    }
    export default ComponentClass;