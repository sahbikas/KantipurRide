
import { AiFillAlert } from "react-icons/ai";
import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dasahbord',
    path: '/',
    icon: <Icon icon="material-symbols:add-home" width="24" height="24" />,
  },
  {
    title: 'Dishpatcher',
    path: '/Dishpatcher',
    icon: <Icon icon="cil:truck" width="24" height="24" />,
  },
  {
    title: 'Dispute Panel',
    path: '/Dispute-Panel',
    icon: <Icon icon="mdi:run" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { icon: <AiFillAlert />, title: 'Dispute Reason', path: '/Dispute-Panel/Dispute_Reason' },
      {  icon: <AiFillAlert />,title: 'Ride Dispute Requests', path: '/Dispute-Panel/Ride-Dispute-Requests' },
      {  icon: <AiFillAlert />,title: 'Services Dispute Requests', path: '/Dispute-Panel/Services-Dispute-Requests' },
      { icon: <AiFillAlert />, title: 'Order Dispute Requests', path: '/Dispute-Panel/Order-Dispute-Requests' },
    ],
  },
 
  {
    title: 'Heat map',
    path: '/Heat-map',
    icon: <Icon icon="material-symbols-light:map" width="24" height="24" />,
  },
  {
    title: 'God,s View',
    path: '/God,s-View',
    icon: <Icon icon="mdi:eye" width="24" height="24" />,
  },
  {
    title: 'Roles',
    path: '/Roles',
    icon: <Icon icon="ic:baseline-face" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Roles-Type', path: '/Roles/Roles-Type' },
      { title: 'Adminstrators', path: '/Roles/Adminstrators' },
      
    ],
  },
  {
    title: 'User',
    path: '/User',
    icon: <Icon icon="ph:user-fill" width="24" height="24" />,
  },
  {
    title: 'Providers',
    path: '/Providers',
    icon: <Icon icon="ic:baseline-motorcycle" width="24" height="24" />,
  },
  {
    title: 'fleet Owner',
    path: '/fleet-Owner',
    icon: <Icon icon="ic:twotone-directions-boat" width="24" height="24" />,
  },
  {
    title: 'Dispatcher Manager',
    path: '/Dispatcher-Manager',
    icon: <Icon icon="material-symbols:event-seat" width="24" height="24" />,
  },
  {
    title: 'Statement',
    path: '/Statement',
    icon: <Icon icon="ic:round-account-balance-wallet" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Transport Statement', path: '/Statement/Transport-Statement' },
      { title: 'services Statement', path: '/Statement/services-Statement' },
      { title: 'Order Statement', path: '/Statement/Order-Statement' },
      { title: 'Provider Statement', path: '/Statement/Provider-Statement' },
      { title: 'Admin Transaction', path: '/Statement/Admin-Transaction' },
      { title: 'Fleet Transaction', path: '/Statement/Fleet-Transaction' },
      
    ],
  },
  {
    title: 'Payrolls',
    path: '/Payrolls',
    icon: <Icon icon="ic:baseline-card-membership" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Zones', path: '/Payrolls/Zones' },
      { title: 'Payroll', path: '/Payrolls/Payroll' },
      
    ],
  },
  {
    title: 'Rating & Reviews',
    path: '/Rating-&-Reviews',
    icon: <Icon icon="material-symbols-light:star" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'User Ratings', path: '/Rating-&-Reviews/User-Ratings' },
      { title: 'Provider Ratings', path: '/Rating-&-Reviews/Provider-Ratings' },
      
    ],
  },
  {
    title: 'Promocodes',
    path: '/Promocodes',
    icon: <Icon icon="mdi:folder-star-outline" width="24" height="24" />,
  },
  {
    title: 'Documents',
    path: '/Documents',
    icon: <Icon icon="ic:sharp-list" width="24" height="24" />,
  },
  {
    title: 'Units',
    path: '/Units',
    icon: <Icon icon="pixelarticons:list" width="24" height="24" />,
  },
  
  {
    title: 'cancel Reason',
    path: '/cancel-Reason',
    icon: <Icon icon="material-symbols-light:cancel-outline" width="24" height="24" />,
  },
  {
    title: 'Notification',
    path: '/Notification',
    icon: <Icon icon="tdesign:notification-filled" width="24" height="24" />,
  },
  {
    title: 'Lost item',
    path: '/Lost-item',
    icon: <Icon icon="ic:baseline-sync" width="24" height="24" />,
  },
  {
    title: 'Transport',
    path: '/Transport',
    icon: <Icon icon="ic:baseline-directions-bus-filled" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Transport Type', path: '/Transport/Transport-Type' },
      { title: 'Vehicle Type', path: '/Transport/Vehicle-Type' },
      { title: 'Peak Hours', path: '/Transport/Peak-Hours' },
      
      
    ],
  },
  {
    title: 'Delivery',
    path: '/Delivery',
    icon: <Icon icon="mdi:history" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Delivery Type', path: '/Delivery/Transport-Type' },
      { title: 'Vehicle Types', path: '/Delivery/Vehicle-Types' },
      { title: 'Package Types', path: '/Delivery/Package-Types' },
      
      
    ],
  },
  {
    title: 'Delivery History',
    path: '/Delivery-History',
    icon: <Icon icon="ic:baseline-alarm" width="24" height="24" />,
  },
  {
    title: 'Scheduled Delivery ',
    path: '/Scheduled-Delivery',
    icon: <Icon icon="ic:round-directions-car-filled" width="24" height="24" />,
  },
  {
    title: 'Services',
    path: '/Services',
    icon: <Icon icon="material-symbols:local-library-outline-rounded" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Categories', path: '/Services/Categories' },
      { title: 'Sub-Categories', path: '/Services/Sub-Categories' },
      { title: 'Services', path: '/Services/Services' },
      
      
    ],
  },
  {
    title: 'Services Requests',
    path: '/Services-Requests',
    icon: <Icon icon="material-symbols-light:input" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Requests History', path: '/Services-Requests/Requests-History' },
      { title: 'Scheduled Services', path: '/Services-Requests/Scheduled-Services' },
    
      
    ],
  },
  {
    title: 'Shop type',
    path: '/Shop-type',
    icon: <Icon icon="uil:shopping-bag" width="24" height="24" />,
  },
  {
    title: 'Cuisines',
    path: '/Cuisines',
    icon: <Icon icon="ic:outline-restaurant-menu" width="24" height="24" />,
  },
  {
    title: 'Shops',
    path: '/Shops',
    icon: <Icon icon="ic:outline-store" width="24" height="24" />,
  },
  {
    title: 'Order Requests',
    path: '/Order-Requests',
    icon: <Icon icon="material-symbols-light:transit-enterexit" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Requests History', path: '/Order-Requests/Requests-History' },
     
    ],
  },
  {
    title: 'Site settings',
    path: '/Site-settings',
    icon: <Icon icon="ep:setting" width="24" height="24" />,
  },
  {
    title: 'Geo Fencing',
    path: '/Geo-Fencing',
    icon: <Icon icon="ic:round-map" width="24" height="24" />,
  },
  {
    title: 'Business Country',
    path: '/Business-Country',
    icon: <Icon icon="bxs:business" width="24" height="24" />,
  },
  {
    title: 'Business City',
    path: '/Business-City',
    icon: <Icon icon="ic:sharp-business" width="24" height="24" />,
  },
  {
    title: 'Menus',
    path: '/Menus',
    icon: <Icon icon="ic:round-menu" width="24" height="24" />,
  },
  {
    title: 'CMS Pages',
    path: '/CMS-Pages',
    icon: <Icon icon="ic:baseline-pages" width="24" height="24" />,
  },
  {
    title: 'Ticket Categories',
    path: '/Ticket-Categories',
    icon: <Icon icon="material-symbols:chat-sharp" width="24" height="24" />,
  },
  {
    title: 'Ticket',
    path: '/Ticket',
    icon: <Icon icon="ic:round-textsms" width="24" height="24" />,
  },
];