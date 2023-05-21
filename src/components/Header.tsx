import {Pages, ContactLinks} from "@/common/enums";
import React from "react";
import "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface HeaderProps {
  currentPage: Pages;
  isBackgroundBlue: boolean;
}
const Header = ({ currentPage, isBackgroundBlue }: HeaderProps) => {
  return (
    <div className={`flex sm:m-2 sm:mb-12 lg:m-4 lg:ml-8 lg:mb-12 sm:flex-wrap-reverse lg:flex-wrap justify-evenly`}>
      <HeaderItem headerItemName={'Home'} isSelected={currentPage === Pages.Home} isBackgroundBlue={isBackgroundBlue} pageRoute = {''}/>
      <HeaderItem headerItemName={'About'} isSelected={currentPage === Pages.About} isBackgroundBlue={isBackgroundBlue} pageRoute = {'about'}/>
      <HeaderItem headerItemName={'Skills'} isSelected={currentPage === Pages.Skills} isBackgroundBlue={isBackgroundBlue} pageRoute = {'skills'}/>
      <HeaderItem headerItemName={'Experience'} isSelected={currentPage === Pages.Experience} isBackgroundBlue={isBackgroundBlue} pageRoute = {'experience'}/>
      <HeaderItem headerItemName={'Profiles'} isSelected={currentPage === Pages.Profiles} isBackgroundBlue={isBackgroundBlue} pageRoute = {'contact'}/>
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
    return <Link href={{pathname: `/${pageRoute}`}} > 
   {isSelected ? 
    <span className={`font-rambla text-md text-blue1 bg-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5 `}>{headerItemName}</span>
    : <span className={`font-rambla text-md bg-blue1 text-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5 `}>{headerItemName}</span>}
    </Link>
  } else {
    return <Link href={{pathname: `/${pageRoute}`}}>
   {isSelected ? 
    <span className={`font-rambla font-bold text-md bg-blue1 text-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5 `}>{headerItemName}</span>
    : <span className={`font-rambla font-bold text-md text-blue1 bg-white pl-5 pr-5 pt-2 pb-2 rounded-full sm:ml-2 sm:mr-2 md:ml-5 md:mr-5 `}>{headerItemName}</span>}
    </Link>
  }
   
}

export default Header;
