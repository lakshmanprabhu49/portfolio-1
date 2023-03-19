import { Pages } from '@/common/enums'
import Header from '@/components/Header'
import SocialMediaBar from '@/components/SocialMediaBar'
import React, {useEffect, useLayoutEffect} from 'react'
import { Helmet } from 'react-helmet';
function Experience() {
    
  return <>
  <Helmet>
    <body className={`bg-white`}></body>
  </Helmet>
  <SocialMediaBar/>
    <Header currentPage={Pages.Experience} isBackgroundBlue={false} />
    </>
}

export default Experience