import React, {useState, useEffect} from "react";
import axios from "axios";
const BASE= process.env.REACT_APP_BASE;

function WorkingWithArrays() {
    const API = `${BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(
                `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (e) {
            console.log(e);
            setErrorMessage(e.response.data.message);
        }
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const updateTodo = async () => {
        try {
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (e) {
            console.log(e);
            setErrorMessage(e.response.data.message);
        }
    };


    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>


            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })}/>
            <a href={`${API}/${todo.id}`}
               className="btn btn-primary me-2">
                Get Todo by ID
            </a>

            <h4>Filtering Array Items</h4>
            <a href={`${API}?completed=true`}
               className="btn btn-primary me-2">
                Get Completed Todos
            </a>

            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
               className="btn btn-primary me-2">
                Create Todo
            </a>

            <h4>Deleting from an Array - with Error Handling</h4>

            <input
                value={todo.id}
                onChange={(e) => {
                    setTodo({
                        ...todo, id: e.target.value
                    });
                    setErrorMessage(''); // Clear the error message when the input changes
                }}
                className="form-control mb-2"
                type="number"
            />


            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <button
                onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end ms-2">
                Delete Todo with ID = {todo.id}
            </button>




            <br/>


            <h3>Updating an Item in an Array</h3>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2">
                Update Title to {todo.title}
            </a>

            <h3>Updating an Item in an Array - Extra Credit</h3>
            <h4>Updating an Item's Complete Status</h4>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <label className="form-check mb-2">
                <input
                    checked={todo.completed}
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                    className="form-check-input"
                    type="checkbox"
                />
                Check/Uncheck to change Item's Complete Status
            </label>
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2">
                Update Complete Status
            </a>

            <h4>Updating an Item's Description</h4>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <textarea
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })}
                className="form-control mb-2"
                rows="3"
            ></textarea>
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2">
                Update Description
            </a>

            <h4>CRUD Arrays with Axios</h4>

            <div>
                <div className="mb-3">
                    <input className="form-control" value={todo.id} readOnly/>
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        onChange={(e) => setTodo({
                            ...todo, title: e.target.value
                        })}
                        value={todo.title} type="text"
                    />
                </div>
                <div className="mb-3">
        <textarea
            className="form-control"
            onChange={(e) => setTodo({
                ...todo,
                description: e.target.value
            })}
            value={todo.description}
            rows="3"
        ></textarea>
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        onChange={(e) => setTodo({
                            ...todo, due: e.target.value
                        })}
                        value={todo.due} type="date"
                    />
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            onChange={(e) => setTodo({
                                ...todo, completed: e.target.checked
                            })}
                            checked={todo.completed} type="checkbox"
                        />
                        <label className="form-check-label">
                            Completed
                        </label>
                    </div>
                </div>
            </div>


            <button onClick={postTodo}
                    className="btn btn-warning mb-2 w-100">
                Post Todo
            </button>

            <button onClick={createTodo}
                    className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>

            <button onClick={updateTodo}
                    className="btn btn-success mb-2 w-100">
                Update Todo
            </button>


            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end">
                            Edit
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                        />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>

                    </li>
                ))}
            </ul>


        </div>
    );
}

export default WorkingWithArrays;

