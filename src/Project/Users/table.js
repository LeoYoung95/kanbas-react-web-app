import React, { useState, useEffect } from "react";
import * as client from "./client";
import {
    BsTrash3Fill,
    BsFillCheckCircleFill,
    BsPencil,
    BsPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        username: "",
        password: "",
        role: "USER",
        firstName: "",
        lastName: "",
    });

    const resetUserState = () => {
        setUser({
            username: "",
            password: "",
            role: "USER",
            firstName: "",
            lastName: "",
        });
    };
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
            resetUserState();
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user) => {
        console.log(user);
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
            resetUserState();
        } catch (err) {
            console.log(err);
        }
    };
    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr key={"table_title"}>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr key={"account_edit_area"}>
                        <td>
                            <input
                                value={user.username}
                                onChange={(e) =>
                                    setUser({ ...user, username: e.target.value })
                                }
                            />
                            <input
                                value={user.password}
                                onChange={(e) =>
                                    setUser({ ...user, password: e.target.value })
                                }
                            />
                        </td>
                        <td>
                            <input
                                value={user.firstName}
                                onChange={(e) =>
                                    setUser({ ...user, firstName: e.target.value })
                                }
                            />
                        </td>
                        <td>
                            <input
                                value={user.lastName}
                                onChange={(e) =>
                                    setUser({ ...user, lastName: e.target.value })
                                }
                            />
                        </td>
                        <td>
                            <select
                                value={user.role}
                                onChange={(e) =>
                                    setUser({ ...user, role: e.target.value })
                                }
                            >
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <BsFillCheckCircleFill
                                onClick={updateUser}
                                className="me-2 text-success fs-1 text"
                            />
                            <BsPlusCircleFill
                                onClick={createUser}
                                className="me-2 fs-1 text"
                            />
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <Link to={`/project/account/${user._id}`}>
                                    {user.username}
                                </Link>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <BsPencil
                                    onClick={() => selectUser(user)}
                                    className="me-2 text-primary fs-1 text"
                                />
                                <BsTrash3Fill
                                    onClick={() => deleteUser(user)}
                                    className="me-2 text-danger fs-1 text"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserTable;
