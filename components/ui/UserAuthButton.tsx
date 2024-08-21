import React from 'react'
import Image from 'next/image';

import Team_01 from "@/assets/images/team/01.jpg"

const UserAuthButton = () => {
    return (
        <ul className="buy-button list-none mb-0">

            <li className="dropdown inline-block relative ps-1 ">
                <a href="authentication.html"
                    className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Login/Register</a>
                <button data-dropdown-toggle="dropdown" hidden className="dropdown-toggle items-center" type="button">
                    <span
                        className="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"><Image
                            src={Team_01} className="rounded-full" alt="" /></span>
                </button>
                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden"
/* onclick="event.stopPropagation();"*/ >
                    <ul className="py-2 text-start">
                        <li>
                            <a href="candidate-profile.html"
                                className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><i
                                    data-feather="user" className="size-4 me-2"></i>Profile</a>
                        </li>
                        <li>
                            <a href="candidate-profile-setting.html"
                                className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><i
                                    data-feather="settings" className="size-4 me-2"></i>Settings</a>
                        </li>
                        <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                        <li>
                            <a href="login.html"
                                className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><i
                                    data-feather="log-out" className="size-4 me-2"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default UserAuthButton