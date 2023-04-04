import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg border-dashed-t  m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <p  className="hover:underline">
            FastBall™
          </p>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <p  className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </p>
          </li>
          <li>
            <p  className="mr-4 hover:underline md:mr-6">
              Licensing
            </p>
          </li>
          <li>
            <p  className="hover:underline">
              Contact
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
