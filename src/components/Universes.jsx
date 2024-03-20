import React from "react";
import { Link } from "react-router-dom";
import "../styles/universes.css"; // Import CSS file for styling

function Universes() {
    return (
        <div className="universes">
            <div className="universe-category">
                <h2>Spider-Web</h2>
                <ul>
                    <li>
                        <Link to="/universe/JavaScript/">JavaScript</Link>
                    </li>
                    <li>
                        <Link to="/universe/HTML/">HTML</Link>
                    </li>
                    <li>
                        <Link to="/universe/CSS">CSS</Link>
                    </li>
                </ul>
            </div>
            <div className="universe-category">
                <h2>DB dat!</h2>
                <ul>
                    <li>
                        <Link to="/universe/SQL">SQL</Link>
                    </li>
                    <li>
                        <Link to="/universe/NoSQL">MongoDB</Link>
                    </li>
                </ul>
            </div>
            <div className='universe-category'>
                <h2>Make-Up, Mark-Up?</h2>
                <ul>
                    <li>
                        <Link to='/universe/XML'>XML</Link>
                    </li>
                    <li>
                        <Link to='/universe/JSON'>JSON</Link>
                    </li>
                </ul>
            </div>
            <div className='universe-category'>
                <h2>Python(s)!</h2>
                <ul>
                    <li>
                        <Link to='/universe/Python3'>Python 3</Link>
                    </li>
                    <li>
                        <Link to='/universe/Python2'>Python 2</Link>
                    </li>
                    <li>
                        <Link to='/universe/Python1'>Python 1</Link>
                    </li>
                </ul>
            </div>
            <div className="universe-category">
                <h2>A Legacy of C</h2>
                <ul>
                    <li>
                        <Link to='/universe/C'>C</Link>
                    </li>
                    <li>
                        <Link to='/universe/C++'>C++</Link>
                    </li>
                    <li>
                        <Link to='/universe/Objective-C'>Objective-C</Link>
                    </li>
                    <li>
                        <Link to='/universe/C#'>C#</Link>
                    </li>
                    <li>
                        <Link to='/universe/D'>D</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Universes;
