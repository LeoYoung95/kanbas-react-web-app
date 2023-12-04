import * as client from "./Users/client";
import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function Account() {
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, [id]);

    // Format the date received from MongoDB to match the "date" input format
    useEffect(() => {
        if (account && account.dob) {
            const formattedDate = new Date(account.dob).toISOString().split('T')[0];
            setAccount({
                ...account,
                dob: formattedDate
            });
        }
    }, [account]);

    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };


    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" value={account.password}
                               onChange={(e) => setAccount({
                                   ...account,
                                   password: e.target.value
                               })}/>
                    </div>

                    <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" value={account.firstName}
                               onChange={(e) => setAccount({
                                   ...account,
                                   firstName: e.target.value
                               })}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control" value={account.lastName}
                               onChange={(e) => setAccount({
                                   ...account,
                                   lastName: e.target.value
                               })}/>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input className="form-control" type="date" value={account.dob}
                               onChange={(e) => setAccount({
                                   ...account,
                                   dob: e.target.value
                               })}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" value={account.email}
                               onChange={(e) => setAccount({
                                   ...account,
                                   email: e.target.value
                               })}/>
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control" onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                </div>

            )}

            <div className="row mb-3 padding-top-20">
                <div className="col-md-4 col-sm-6">
                    <div className="row g-2">
                        <div className="col-12">
                            <button className="btn btn-primary w-100" onClick={save}>
                                Save
                            </button>
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-danger w-100" onClick={signout}>
                                Signout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 d-grid">
                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Account;

