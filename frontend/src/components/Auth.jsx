import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
});

function Auth() {
    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        client.get("/user")
            .then(function (res) {
                setCurrentUser(true);
            })
            .catch(function (error) {
                setCurrentUser(false);
            });
    }, []);

    function update_form_btn() {
        if (registrationToggle) {
            document.getElementById("form_btn").innerHTML = "Register";
            setRegistrationToggle(false);
        } else {
            document.getElementById("form_btn").innerHTML = "Log in";
            setRegistrationToggle(true);
        }
    }

    function submitRegistration(e) {
        e.preventDefault();
        console.log(email, username);
        client.post(
            "/register/",
            {
                email: email,
                username: username,
                password: password
            }
        )
            .then(function (res) {
                console.log("Success", email, password)

                client.post(
                    "/login/",
                    {
                        email: email,
                        password: password
                    },
                    { headers: { 'Content-Type': 'application/json' } }
                )
                    .then(function (res) {
                        console.log("Success")
                        setCurrentUser(true);
                    })
                    .catch(function (error) {
                        console.error("Error during login:", error);
                    });
            })
            .catch(function (error) {
                console.error("Error during registration:", error);
            });
    }

    function submitLogin(e) {
        e.preventDefault();
        client.post(
            "/login/",
            {
                email: email,
                password: password
            },
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (res) {
            setCurrentUser(true);
        });
    }

    function submitLogout(e) {
        e.preventDefault();
        client.post(
            "/logout/",
            { withCredentials: true }
        ).then(function (res) {
            setCurrentUser(false);
        });
    }

    if (currentUser) {
        return (
            <div>
                <nav className="bg-gray-800 p-4 flex justify-between items-center">
                    <div className="text-white">Authentication App</div>
                    <form onSubmit={e => submitLogout(e)}>
                        <button type="submit" className="text-white">Log out</button>
                    </form>
                </nav>
                <div className="flex justify-center items-center mt-5">
                    <h2>You're logged in!</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <div className="text-white">Authentication App</div>
                <button id="form_btn" onClick={update_form_btn} className="text-white">Register</button>
            </nav>
            {
                registrationToggle ? (
                    <div className="flex justify-center items-center mt-5">
                        <form onSubmit={e => submitRegistration(e)} className="w-full max-w-xs">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email address</label>
                                <input id="email" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <p className="text-gray-600 text-xs italic">We'll never share your email with anyone else.</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                                <input id="username" type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </form>
                    </div>
                ) : (
                    <div className="flex justify-center items-center mt-5">
                        <form onSubmit={e => submitLogin(e)} className="w-full max-w-xs">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email address</label>
                                <input id="email" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <p className="text-gray-600 text-xs italic">We'll never share your email with anyone else.</p>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
}

export default Auth;
