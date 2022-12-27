import { Link } from "react-router-dom";
import LeftSide from "../basic/authLeft";
import {ArrowLeftIcon, KeyIcon} from "@heroicons/react/24/outline"

const ForgotPassword = () => {
  return (
    <div className="h-screen md:flex font-poppinslight">
      <LeftSide />
      <div className="flex md:w-1/2 h-full justify-center py-10 items-center bg-white">
        <form className="bg-white w-1/2">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 rounded-full p-2">
              <div className="bg-primary-200 rounded-full p-2">
                <KeyIcon className="h-6 w-6 text-primary-600"/>
              </div>
            </div>
          </div>
          <h1 className="text-gray-800 font-poppinsBold text-center text-3xl mb-3">
            Forgot Password?
          </h1>
          <p className="text-base font-normal text-center text-gray-600 mb-8">
            No worries, we'll send you reset instructions.
          </p>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-poppinsMedium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-primary-600 hover:bg-primary-700 mt-6 py-2 rounded-lg text-white font-semibold mb-2"
          >
            Reset Password
          </button>
          <div className="text-center mt-8">
          <Link to="/login" className="text-sm font-poppinsBold justify-center flex">
            <ArrowLeftIcon className="w-3 align-middle mr-2"/>
            <span>Back to log in</span> 
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
