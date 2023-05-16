import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = {
        color: "#fff",
    };

    const navItems = [
        {
            link: "/",
            name: "Home",
        },
        {
            link: "/media",
            name: "Media",
        },
        
        {
            link: "/about",
            name: "About",
        },
    ];

    return (
        <>
            <div className="navbar justify-between bg-primary md:px-32 py-6 items-start">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary border border-secondary rounded-box w-52 py-10"
                        >
                            {navItems.map((navItem, index) => {
                                const { link, name } = navItem;
                                return (
                                    <li className="hover:text-secondary mx-auto" key={index}>
                                        <NavLink
                                            to={link}
                                            style={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }
                                        >
                                            <span className="text-2xl font-bold text-white">
                                                {name}
                                            </span>
                                        </NavLink>
                                    </li>
                                );
                            })}

                            {/*  <span className="my-5 text-secondary mx-auto font-bold text-3xl">
                                <SiDatabricks />
                            </span>

                            <div className="flex justify-center items-center">
                                <li className="rounded-full hover:text-secondary ">
                                    <a
                                        className="rounded-full font-bold text-3xl"
                                        href="https://github.com/JaznanOfficial"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub />
                                    </a>
                                </li>
                                <li className="rounded-full hover:text-secondary">
                                    <a
                                        className="rounded-full font-bold text-3xl"
                                        href="https://www.linkedin.com/in/jaznanofficial/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="rounded-full hover:text-secondary">
                                    <a
                                        className="rounded-full font-bold text-3xl"
                                        href="https://github.com/JaznanOfficial"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaFacebookF />
                                    </a>
                                </li>
                            </div> */}
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer text-xl flex items-end">
                        <span className="text-5xl font-bold text-primary bg-secondary">P</span>
                        <span className="text-5xl font-bold text-primary bg-secondary">ort</span>
                        <span className="text-5xl font-bold text-secondary">Book</span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex items-center justify-center">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navItems.map((navItem) => {
                            const { link, name } = navItem;
                            return (
                                <li key={name} className="hover:text-white text-2xl text-black">
                                    <NavLink
                                        to={link}
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}

                        
                    </ul>
                </div>
                <div className=" flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-8 p-2 shadow menu menu-compact dropdown-content border border-primary text-primary rounded-box w-52"
                        >
                            

                            <li>
                                <a className="text-2xl">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
