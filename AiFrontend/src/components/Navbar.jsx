import { Link, NavLink } from "react-router"
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const { user } = useAuth();
    const products = useSelector((state) => state.cart.value);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="/useeffect"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="vite.svg"
                        className="h-8"
                        alt="eCommerce Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        eCommerce
                    </span>
                </Link>
                <div className=" relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {
                        user != null ? <UserMenu /> : <>
                            <Link to="/login" className="btn btn-primary">login</Link>
                            <Link to="/register" className="btn btn-success ml-2">register</Link>
                        </>
                    }
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `block text-white md:p-0 rounded-sm py-2 px-3 ${isActive ? "navlink-active" : 'navlink'}`}
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `block text-white md:p-0 rounded-sm py-2 px-3 ${isActive ? "navlink-active" : 'navlink'}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => `block text-white md:p-0 rounded-sm py-2 px-3 ${isActive ? "navlink-active" : 'navlink'}`}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/generate-image"
                                className={({ isActive }) => `block text-white md:p-0 rounded-sm py-2 px-3 ${isActive ? "navlink-active" : 'navlink'}`}
                            >
                                Image Generator
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `block text-white md:p-0 rounded-sm py-2 px-3 ${isActive ? "navlink-active" : 'navlink'}`}
                            >
                                Contact us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) => `block text-white md:p-0 rounded-sm py-2 px-3 ${isActive ? "navlink-active" : 'navlink'}`}
                            >
                                Cart ({products.length})
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;

const UserMenu = () => {
    const { user, logout } = useAuth();
    const [isUserMenuOpen, toggleUserMenu] = useState(false);
    return (
        <>
            <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={() => toggleUserMenu(!isUserMenuOpen)}
            >
                <span className="sr-only">Open user menu</span>
                <img
                    className="w-8 h-8 rounded-full"
                    src={user?.image}
                    alt="user photo"
                />
            </button>
            {/* Dropdown menu */}
            {isUserMenuOpen &&
                <div
                    className="absolute -left-20 top-5 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                >
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">
                            {user?.name}
                        </span>
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                            {user?.email}
                        </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <NavLink
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Earnings
                            </NavLink>
                        </li>
                        <li>
                            <span
                                onClick={() => logout()}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Sign out
                            </span>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}