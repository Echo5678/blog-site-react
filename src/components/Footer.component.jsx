import { Link } from "react-router-dom";

function Footer({}) {
    return (
    <footer>
        <hr className="h-0.5 bg-black dark:bg-white w-1/2 md:w-3/4 m-auto rounded-xl"/>
        <div className="flex bottom-0 justify-between mx-3 my-4 md:mx-4 md:my-5 lg:mx-5 lg:my-6">
            <h3><Link to="/" className="hover:underline"> echosblog </Link></h3>
            <ul className="flex gap-x-2 md:gap-x-4 lg:gap-x-6">
                <Link to="/contact" className="hover:underline active:dark:text-gray-300 active:text-gray-400"> Contact </Link>
                <Link to="/about" className="hover:underline active:dark:text-gray-300 active:text-gray-400"> About </Link>
            </ul>
        </div>
    </footer>)
};


export default Footer;