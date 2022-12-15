import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-black">
            <div className="flex-1">
                <a href="" className="text-white text-2xl">ASSIGN<span className="text-red-600">MENT</span></a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="" src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href="" className="justify-between text-xl">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href="" className='text-xl'>Settings</a></li>
                        <li><a href="" className='text-xl'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;