import { Pages } from '@/common/enums'
import Header from '@/components/Header'
import SocialMediaBar from '@/components/SocialMediaBar'
import React, {useEffect, useLayoutEffect} from 'react'
import { Helmet } from 'react-helmet';
function Skills() {
    
  return <>
  <Helmet>
    <body className={`bg-blue1`}></body>
  </Helmet>
  <SocialMediaBar/>
    <Header currentPage={Pages.Skills} isBackgroundBlue={true} />
    </>
}

export default Skills