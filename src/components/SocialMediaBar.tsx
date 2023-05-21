import React from 'react'
import {Colors, ContactLinks, ContactNames} from '@/common/enums'
import {motion} from 'framer-motion';
import logo from 'public/InstagramLogo.png'
import Image from 'next/image';

const SocialMediaBar = () => {

  return <div className={`flex flex-row justify-evenly items-between flex-wrap`}>

     <SocialMediaIcon icon={ContactNames.Instagram}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={ContactNames.LinkedIn}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={ContactNames.GitHub}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={ContactNames.CodingNinjas}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={ContactNames.LeetCode}>
     </SocialMediaIcon>
  </div>
}

interface ISocialMediaIcon extends JSX.ElementChildrenAttribute {
     icon: ContactNames,
}

export const SocialMediaIcon: React.FC<ISocialMediaIcon> = ({icon}): JSX.Element => {
     const logo = require(`../../public/${icon}Logo.png`).default
     return <div className='flex flex-row justify-center'> 
          <div className='sm:m-5 sm:p-5 flex flex-col justify-center items-center rounded-5xl lg:m-10 '>
               <a
              href={ContactLinks[icon+"URL"]}
            >
              <img
                src={`/${icon}Logo.png`}
                alt="Logo"
                width={100}
                height={100}
                style= {{
                    color: 'white'
                }}
              />
            </a>
            <span className='font-orelegaOne text-white text-2xl'>{icon}</span>
     </div>
     </div>
}

export default SocialMediaBar