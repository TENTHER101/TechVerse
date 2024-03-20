import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/universe.css"; // Import CSS file for styling

function Universe() {
    const universesData = {
        JavaScript: {
            title: "The JavaScript Universe",
            logo: "https://via.placeholder.com/150", // Placeholder JavaScript logo URL
            description:
                "Welcome to the JavaScript Universe! JavaScript is a versatile programming language used for web development.",
            galaxies: [
                {
                    id: 1,
                    name: "Galaxy 1",
                    description: "Introduction to JavaScript",
                    planets: [
                        {
                            id: 1,
                            name: "Planet 1",
                            description: "JavaScript Basics",
                            link: "/universe/JavaScript/galaxy/1/planet/1",
                        },
                        {
                            id: 2,
                            name: "Planet 2",
                            description: "JavaScript Functions",
                            link: "/universe/JavaScript/galaxy/1/planet/2",
                        },
                        // Add more planets as needed
                    ],
                },
                // Add more galaxies as needed
            ],
        },
        HTML: {
            title: "The HTML Universe",
            logo: "https://via.placeholder.com/150", // Placeholder HTML logo URL
            description:
                "Welcome to the HTML Universe! HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
            galaxies: [
                {
                    id: 1,
                    name: "Galaxy 1",
                    description: "Introduction to HTML",
                    planets: [
                        {
                            id: 1,
                            name: "Planet 1",
                            description: "HTML Basics",
                            link: "/universe/HTML/galaxy/1/planet/1",
                        },
                        {
                            id: 2,
                            name: "Planet 2",
                            description: "HTML Elements",
                            link: "/universe/HTML/galaxy/1/planet/2",
                        },
                        // Add more planets as needed
                    ],
                },
                // Add more galaxies as needed
            ],
        },
        CSS: {
            title: "The CSS Universe",
            logo: "https://via.placeholder.com/150", // Placeholder CSS logo URL
            description:
                "Welcome to the CSS Universe! CSS (Cascading Style Sheets) is used for styling web pages.",
            galaxies: [
                {
                    id: 1,
                    name: "Galaxy 1",
                    description: "Introduction to CSS",
                    planets: [
                        {
                            id: 1,
                            name: "Planet 1",
                            description: "CSS Basics",
                            link: "/universe/CSS/galaxy/1/planet/1",
                        },
                        {
                            id: 2,
                            name: "Planet 2",
                            description: "CSS Selectors",
                            link: "/universe/CSS/galaxy/1/planet/2",
                        },
                        // Add more planets as needed
                    ],
                },
                // Add more galaxies as needed
            ],
        },
        SQL: {
            title: "The SQL Universe",
            logo: "https://via.placeholder.com/150", // Placeholder SQL logo URL
            description:
                "Welcome to the SQL Universe! SQL (Structured Query Language) is a powerful language used for managing and manipulating databases.",
            galaxies: [
                {
                    id: 1,
                    name: "Galaxy 1",
                    description: "Introduction to SQL",
                    planets: [
                        {
                            id: 1,
                            name: "Planet 1",
                            description: "SQL Basics",
                            link: "/universe/SQL/galaxy/1/planet/1",
                        },
                        {
                            id: 2,
                            name: "Planet 2",
                            description: "SQL Joins",
                            link: "/universe/SQL/galaxy/1/planet/2",
                        },
                        // Add more planets as needed
                    ],
                },
                // Add more galaxies as needed
            ],
        },
    };

    const { universeName } = useParams();
    const universe = universesData[universeName];

    if (!universe) {
        return <div>Universe not found!</div>;
    }

    return (
        <div className="universe">
            <div className="universe-header">
                <h2>{universe.title}</h2>
                <img
                    src={universe.logo}
                    alt={`${universe.title} Logo`}
                    className="universe-logo"
                />
                <p>{universe.description}</p>
            </div>
            <div className="galaxies">
                {universe.galaxies.map((galaxy) => (
                    <div key={galaxy.id} className="galaxy">
                        <h3>{galaxy.name}</h3>
                        <p>{galaxy.description}</p>
                        <div className="planets">
                            {galaxy.planets.map((planet) => (
                                <Link
                                    key={planet.id}
                                    to={planet.link}
                                    className="planet"
                                >
                                    {planet.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/universes" className="back-button">
                Back to Universes
            </Link>
            <Link
                to={universe.galaxies[0].planets[0].link}
                className="enter-universe-button"
            >
                Enter Universe
            </Link>
        </div>
    );
}

export default Universe;
