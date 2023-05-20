import {Pages, SocialMediaLinks} from "@/common/enums";
import React from "react";
import "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface HeaderProps {
  currentPage: Pages;
  isBackgroundBlue: boolean;
}
const Header = ({ currentPage, isBackgroundBlue }: HeaderProps) => {
  return (
    <div className={`sm:m-2 sm:mb-12 lg:m-4 lg:ml-8 lg:mb-12 `}>
      <HeaderItem headerItemName={'Home'} isSelected={currentPage === 'Home'} isBackgroundBlue={isBackgroundBlue} pageRoute = {''}/>
      <HeaderItem headerItemName={'About'} isSelected={currentPage === 'About'} isBackgroundBlue={isBackgroundBlue} pageRoute = {'about'}/>
      <HeaderItem headerItemName={'Skills'} isSelected={currentPage === 'Skills'} isBackgroundBlue={isBackgroundBlue} pageRoute = {'skills'}/>
      <HeaderItem headerItemName={'Experience'} isSelected={currentPage === 'Experience'} isBackgroundBlue={isBackgroundBlue} pageRoute = {'experience'}/>
      <HeaderItem headerItemName={'Projects'} isSelected={currentPage === 'Projects'} isBackgroundBlue={isBackgroundBlue} pageRoute = {'projects'}/>
    </div>
  );
};

interface HeaderItemProps {
  headerItemName: string;
  isSelected: boolean;
  isBackgroundBlue: boolean;
  pageRoute: string;
}

const HeaderItem = ({headerItemName, isSelected, isBackgroundBlue, pageRoute} : HeaderItemProps) => {
  
  if (isBackgroundBlue) {
    return <Link href={{pathname: `/${pageRoute}`}}> 
   {isSelected ? 
    <span className={`font-rambla text-sm text-blue1 bg-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5`}>{headerItemName}</span>
    : <span className={`font-rambla text-sm bg-blue1 text-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5`}>{headerItemName}</span>}
    </Link>
  } else {
    return <Link href={{pathname: `/${pageRoute}`}}>
   {isSelected ? 
    <span className={`font-rambla font-bold text-sm bg-blue1 text-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5`}>{headerItemName}</span>
    : <span className={`font-rambla font-bold text-sm text-blue1 bg-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5`}>{headerItemName}</span>}
    </Link>
  }
   
}

export default Header;
