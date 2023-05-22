const Navbar = () => {
    return (
        <>
            <div className="navbar px-10 bg-[#52FF00]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Services</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">GPS</a>
                </div>
                <div className="navbar-end md:hidden flex justify-end">
                    <a className="btn bg-primary">contact us</a>
                </div>
                <div className="navbar-end hidden md:inline-flex space-x-5">
                    <a>Home</a>
                    <a href="#contact">About</a>
                    <a>Services</a>
                    <a className="btn bg-primary ">contact us</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;