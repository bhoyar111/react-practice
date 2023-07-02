import { lazy } from "react";

const Header                = lazy(() => import('./View/Header/HeaderComp'));
const BannerCom             = lazy(() => import('./View/Header/BannerComp'));
const Footer                = lazy(() => import('./View/Footer/FooterComp'));
const Users                 = lazy(() => import('./View/Ueser'));
const Admin                 = lazy(() => import('./View/Admin/Admin'));
const APIsData              = lazy(() => import('./View/APIs/CardAPIsData'));
const HooksComp             = lazy(() => import('./View/Hooks'));
const PropsComp             = lazy(() => import('./View/PropsComp/Parents'));
const AllGeneralComp        = lazy(() => import('./View/AllGenerals'));

const routes = [
    { path: '/', exact: true, name: "Header", component: Header},
    { path: '/', exact: true, name: "BannerCom", component: BannerCom},
    { path: '/', exact: true, name: "Footer", component: Footer},
    { path: '/users', exact: true, name: "Users", component: Users},
    { path: '/admin', exact: true, name: "Admin", component: Admin},
    { path: '/student-data', exact: true, name: "APIsData", component: APIsData},
    { path: '/hooks-comp', exact: true, name: "HooksComp", component: HooksComp},
    { path: '/props-comp', exact: true, name: "PropsComp", component: PropsComp},
    { path: '/general-comp', exact: true, name: "AllGeneralComp", component: AllGeneralComp},

];

export default routes;