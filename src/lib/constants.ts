import {
  Analytics,
  babyBunting,
  babyl,
  britax,
  graco,
  increaseIcon,
  member,
  mobileApp,
  munchkin,
  parents,
  giovanni,
  ghislain,
} from '@/assets/images';
import { Icons } from '@/components/Icons';
import { ServicesCardProps } from '@/components/home/Services';
import { StaticImageData } from 'next/image';
import { FC } from 'react';

export const partners = [babyl, babyBunting, britax, graco, munchkin];

export const services: ServicesCardProps[] = [
  {
    Icon: Icons.services.embeded,
    title: 'Embedded tools',
    description:
      'But the majority have suffered alteration in some forms, by injected humour .By injected humour'
  },
  {
    Icon: Icons.services.software,
    title: 'Software development',
    description:
      'But the majority have suffered alteration in some forms, by injected humour .By injected humour'
  },
  {
    Icon: Icons.services.database,
    title: 'Data management',
    description:
      'But the majority have suffered alteration in some forms, by injected humour .By injected humour'
  },
  {
    Icon: Icons.services.market,
    title: 'Digital Marketing',
    description:
      'But the majority have suffered alteration in some forms, by injected humour .By injected humour'
  },
  {
    Icon: mobileApp,
    title: 'Mobile Application',
    description:
      'But the majority have suffered alteration in some forms, by injected humour .By injected humour'
  },
  {
    Icon: Analytics,
    title: 'Analytics Solution',
    description:
      'But the majority have suffered alteration in some forms, by injected humour .By injected humour'
  }
];

export const gettingStartedSteps: { title: string; description: string }[] = [
  {
    title: 'Order our product',
    description:
      'Here’s  the services that we offer to you, to ensure both your baby’s health and your personal security'
  },
  {
    title: 'Installation step',
    description:
      'Here’s  the services that we offer to you, to ensure both your baby’s health and your personal security'
  },
  {
    title: 'Lifetime security',
    description:
      'Here’s  the services that we offer to you, to ensure both your baby’s health and your personal security'
  }
];

interface IfooterData {
  title: string;
  items: footerItem[];
}

type footerItem = {
  value: string;
} & ({ as: 'p' } | { as: 'link'; link: '' });

export const footerItems: IfooterData[] = [
  {
    title: 'My account',
    items: [
      { value: 'Sign in', as: 'p' },
      { value: 'New Blog', as: 'p' },
      { value: 'My wishlist', as: 'p' },
      { value: 'Track my order', as: 'p' },
      { value: 'Help', as: 'p' }
    ]
  },
  {
    title: 'Information',
    items: [
      { value: 'Delivery information', as: 'p' },
      { value: 'Blog', as: 'p' },
      { value: 'FAQ', as: 'p' },
      { value: 'Contact us', as: 'p' },
      { value: 'Sitemap', as: 'p' }
    ]
  },
  {
    title: 'Customer services',
    items: [
      { value: 'Shipping & returns', as: 'p' },
      { value: 'Secure shopping', as: 'p' },
      { value: 'International shopping', as: 'p' },
      { value: 'Affiliates', as: 'p' },
      { value: 'Contacts', as: 'p' }
    ]
  },
  {
    title: 'Payment & Shipment',
    items: [
      { value: 'Our Terms', as: 'p' },
      { value: 'Payment methods', as: 'p' },
      { value: 'Shipping guide', as: 'p' },
      { value: 'Locations we ship to', as: 'p' },
      { value: 'Estimated Delivery time', as: 'p' }
    ]
  }
];

interface Imember {
  name: string;
  role: string;
  email: string;
  image: string | StaticImageData;
}

export const members: Imember[] = [
  { name: 'KALISA INEZA Giovanni', role: 'Team leader and mobile Developer', image: giovanni, email: 'giovanni@spartancorp.io' },
  { name: 'Hirwa Ghislain', role: 'UX/UI Designer & Embedded specialist', image: ghislain, email: 'ghislain@spartancorp.io' },
  { name: 'Abijuru Chance Regine', role: 'AI & ML Engineer', image: member, email: 'chance@spartancorp.io' },
  { name: 'Imbabazi Faith', role: 'Backend Developer', image: member, email: 'faith@spartancorp.io' },
  { name: 'Fadhili Josue', role: 'Frontend Developer', image: member, email: 'fadhili@spartancorp.io' }
];

// about page

export const tabs = [
  'View All',
  'Tools',
  'Advertisement',
  'Product',
  'Management',
  'Technology',
  'Customer Success'
] as const;

export type TabName = (typeof tabs)[number];

export interface IArticleTab {
  title: string;
  articles: IArticle[];
}

export interface IArticle {
  image: string | StaticImageData;
  title: string;
  tag: TabName;
  desc: string;
}

export const articles: IArticle[] = [
  {
    image: parents,
    tag: 'Management',
    title:
      'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth',
    desc: 'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth'
  },
  {
    image: parents,
    tag: 'Advertisement',
    title:
      'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth',
    desc: 'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth'
  },
  {
    image: parents,
    tag: 'Customer Success',
    title:
      'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth',
    desc: 'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth'
  },
  {
    image: parents,
    tag: 'Technology',
    title:
      'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth',
    desc: 'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth'
  },
  {
    image: parents,
    tag: 'Tools',
    title:
      'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth',
    desc: 'Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth.Collaborating to Drive Innovation in the Industry & leveraging Analytics to Drive Growth'
  }
];

export const qualities: {
  Icon: FC | StaticImageData;
  title: string;
}[] = [
  {
    Icon: Icons.qualities.assurance,
    title: 'Quality Assurance'
  },
  {
    Icon: Icons.qualities.customerSatisification,
    title: 'Customer satisfaction'
  },
  {
    Icon: Icons.qualities.trust,
    title: 'Trust and Reliability'
  },
  {
    Icon: Icons.qualities.personalization,
    title: 'Personalization'
  },
  {
    Icon: increaseIcon,
    title: 'Continuous improvement'
  }
];
