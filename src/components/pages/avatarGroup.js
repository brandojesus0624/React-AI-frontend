import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layout/mainLayout";
import { LocalImg } from "../basic/imgProvider";
import MyModal from "../basic/modal";

const Group = () => {
  const { id } = useParams();
  // console.log('group =========> ', id)

  const onDownload = () => {
    console.log("dwonload");
  };

  return (
    <MainLayout>
      <div className="flex flex-col flex-1 w-full px-3 md:px-20 mt-16">
        <div className="text-sm flex items-center" id="route">
          <Link
            to="/my-avatars"
            className="font-poppinsMedium hover:text-primary-600 text-gray-600 mr-[18px]"
          >
            My Avatars
          </Link>
          <ChevronRightIcon className="text-gray-600 w-4 h-4 mr-[18px]" />
          <span className="font-poppinsBold text-primary-600">{id}</span>
        </div>
        <div className="flex justify-between items-center mt-3" id="download">
          <div className="flex flex-col">
            <h1 className="font-poppinsSemiBold text-3xl text-gray-900">
              {id}
            </h1>
            <span className="text-xs text-gray-500 mt-3">16.01.2023.</span>
          </div>
          <button className="px-4 py-2.5 flex text-white hover:bg-primary-700 bg-primary-600 rounded-lg items-center">
            <ArrowDownTrayIcon className="w-5 h-5 stroke-2 mr-2" />
            <span className="text-sm font-poppinsSemiBold" onClick={onDownload}>
              Download All
            </span>
          </button>
        </div>
        <div className="mt-8" id="style_1">
          <h1 className="text-2xl text-gray-900 font-poppinsSemiBold">Anime</h1>
          <div
            className="flex flex-wrap items-center justify-start"
            id="images"
          >
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="mt-8" id="style_2">
          <h1 className="text-2xl text-gray-900 font-poppinsSemiBold">
            Acrylic painting
          </h1>
          <div
            className="flex flex-wrap items-center justify-start"
            id="images"
          >
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
            <div className="mt-6 px-3 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <img alt="demo" src={LocalImg.demo} className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <MyModal />
        </div>
      </div>
    </MainLayout>
  );
};

export default Group;