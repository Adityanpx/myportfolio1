// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

import {link} from 'next/link';

import { useRouter } from 'next/router';

const Nav = () => {
  const router=useRouter();
  const pathname= router.pathname;
  return 
  <nav>
    <div className='flex w-full xl:flex-col'>
      {navData.map((link,index) => {

        return <link href={link.path}>{link.icon}</link>;

      })}

    </div>
    </nav>;
};

export default Nav;
