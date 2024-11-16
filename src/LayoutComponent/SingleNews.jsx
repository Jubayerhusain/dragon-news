import React from "react";
import newsLogo from "./../assets/logo.png";
import moment from "moment/moment";
import RightAside from './RightAside';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from './NewsDetails';
import Navber from './../Components/Navber';
function SignleNews() {
    const data =  useLoaderData()
    const news = data.data[0]
    console.log(news);
  return (
    <div className="w-11/12 mx-auto">
        {/* header section*/}
      <div className="mb-14">
        <img className="my-3 mx-auto" src={newsLogo} alt="" />
        <p className="text-center text-lg font-bold text-gray-500">
          Journalism Without Fear or Favour
        </p>
        <div className="text-center text-lg font-semibold text-gray-700">
          <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
      </div>
      <Navber></Navber>
      {/* main sectoin */}
      <div className="grid grid-cols-12">
        <div className="col-span-9">
            <NewsDetails news={news}></NewsDetails>
        </div>
        <div className="col-span-3">
            <RightAside></RightAside>
        </div>
      </div>
    </div>
  );
}

export default SignleNews;
