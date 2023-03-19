import React from 'react'
import {Colors, SocialMediaLinks, SocialMediaNames} from '@/common/enums'
import {motion} from 'framer-motion';
import logo from 'public/InstagramLogo.png'
import Image from 'next/image';

const SocialMediaBar = () => {

  return <span className={`bg-brown1 float-right pl-3 pr-2  rounded-tl-3xl rounded-bl-3xl`}>

     <SocialMediaIcon icon={SocialMediaNames.Instagram}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={SocialMediaNames.LinkedIn}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={SocialMediaNames.GitHub}>
     </SocialMediaIcon>
     <SocialMediaIcon icon={SocialMediaNames.CodingNinjas}>
     </SocialMediaIcon>
  </span>
}

interface ISocialMediaIcon extends JSX.ElementChildrenAttribute {
     icon: SocialMediaNames,
}

export const SocialMediaIcon: React.FC<ISocialMediaIcon> = ({icon}): JSX.Element => {
     const logo = require(`../../public/${icon}Logo.png`).default
     return <div className='mt-3 mb-3'>
               <a
              href={SocialMediaLinks[icon+"URL"]}
            >
              <Image
                src={`/${icon}Logo.png`}
                alt="Instagram Logo"
                width={30}
                height={30}
                style= {{
                    color: 'pink'
                }}
              />
            </a>
     </div>
}

export default SocialMediaBar