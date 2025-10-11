import React from 'react';
import useData from '../Hooks/useData';
import { useParams } from 'react-router';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';
import {
  getInstalled,
  setInstalled,
} from '../utilities/installed';
import { useEffect, useState } from 'react';
import formatNumber from '../utilities/formatNumber';
import BarChart from '../Components/BarChart';
import { toast } from 'react-toastify';

const AppsDetails = () => {
  const { apps } = useData();

  const { detailsId } = useParams();
  const paramsId = parseInt(detailsId);

  const appsDetailsData = apps.find(app => app.id === paramsId);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (appsDetailsData) {
      const installedStoredApps = getInstalled();
      if (installedStoredApps.includes(appsDetailsData.id)) {
        setIsInstalled(true);
      }
    }
  }, [appsDetailsData]);

  if (!appsDetailsData) {
    return (
      <div className="w-11/12 mx-auto px-[3%] md:px-0 mt-[80px]">
        <h2 className="text-2xl font-bold text-[#001931]">App not found</h2>
      </div>
    );
  }

  const {
    id,
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
    ratings,
  } = appsDetailsData;

  const handleInstalled = id => {
    setInstalled(id);
    setIsInstalled(true);
    toast.success('App installed successfully!');
  };

  return (
    <div className="w-11/12 mx-auto px-[3%] md:px-0 mt-[80px] ">
      <div className="flex gap-[40px]">
        <div className="w-[350px] h-[350px] bg-white rounded-sm">
          <img className="w-full h-auto object-cover" src={image} alt="" />
        </div>
        <div className="w-full">
          <div>
            <h2 className="text-[#001931] font-bold text-[26px] md:text-[32px]">
              {title}
            </h2>
            <p className="text-[#627382] font-normal text-base md:text-xl">
              Developed by{' '}
              <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <div className="w-full border-b border-[#00193126] my-[30px]"></div>
          <div className="flex flex-wrap gap-6">
            <div className="space-y-2 w-[150px]">
              <img className="w-[40px] h-[40px]" src={iconDownloads} alt="" />
              <p className="font-normal text-base text-[#001931]">Downloads</p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {formatNumber(downloads)}
              </h2>
            </div>
            <div className="space-y-2 w-[150px]">
              <img className="w-[40px] h-[40px]" src={iconRatings} alt="" />
              <p className="font-normal text-base text-[#001931]">
                Average Ratings
              </p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {ratingAvg.toFixed(1)}
              </h2>
            </div>
            <div className="space-y-2 w-auto">
              <img className="w-[40px] h-[40px]" src={iconReview} alt="" />
              <p className="font-normal text-base text-[#001931]">
                Total Reviews
              </p>
              <h2 className="font-extrabold text-[40px] text-[#001931]">
                {formatNumber(reviews)}
              </h2>
            </div>
          </div>
          <button
            onClick={() => handleInstalled(id)}
            disabled={isInstalled}
            className={`px-5 py-[12px] rounded-sm mt-[30px] text-white font-medium transition-all ${
              isInstalled
                ? 'bg-green-300 cursor-not-allowed'
                : 'bg-[#00D390] hover:bg-[#00b377] cursor-pointer'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
          </button>
          <div className="mt-8">
            <h4 className="text-2xl font-semibold text-[#00D390] mb-6">App Reviews</h4>
            <BarChart data={ratings} />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#00193126] my-[40px]"></div>
      <div>
        <h4 className="text-2xl font-semibold text-[#00D390] mb-6">
          Description
        </h4>
        <p className="font-normal text-base md:text-lg lg:text-xl text-[#627382]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;