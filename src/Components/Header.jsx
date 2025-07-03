import { FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const getInitialDarkMode = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Header = () => {
    const [darkMode, setDarkMode] = useState(getInitialDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="dark:text-white bg-white dark:bg-dark-element shadow-md relative">
            <div className="w-full max-w-screen-2xl mx-auto flex py-6 px-5 justify-between items-center">
                <Link to="/">
                    <h1 className="font-extrabold">Where in the world?</h1>
                </Link>
                <button
                    className="flex gap-1 items-center hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md duration-300"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <FiMoon />
                    <span className="dark-mode-icon"></span>
                    {darkMode ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </header>
    );
};

export default Header;