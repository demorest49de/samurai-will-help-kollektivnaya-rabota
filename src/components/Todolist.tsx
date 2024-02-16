import React from "react";
import PropTypes from "prop-types";


type TodolistProps = {
	title?: string,
}

const Todolist = ({title}: TodolistProps) => {
	
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" defaultChecked={true} /> <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" defaultChecked={true} /> <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" defaultChecked={false} /> <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

Todolist.propTypes = {};

export default Todolist;
