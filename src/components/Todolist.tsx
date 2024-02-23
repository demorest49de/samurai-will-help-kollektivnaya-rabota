import React from "react";
import PropTypes from "prop-types";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

type TodolistProps = {
    title?: string;
    tasks: Array<TaskType>;
	 date?: string
};

const Todolist = ({ title, tasks, date }: TodolistProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            
				{tasks.length === 0 ? (<span>Таких задач нет</span>) : (<ul>
                {tasks &&
                    tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" defaultChecked={task.isDone} /> <span>{task.title}</span>
                            </li>
                        );
                    })}
                <li>
                    <input type="checkbox" defaultChecked={true} /> <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" defaultChecked={true} /> <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" defaultChecked={false} /> <span>React</span>
                </li>
            </ul>)}
				<div>
					{date}
				</div>
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
