
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const _nav = [
    {
        name: "Core"
    },
    {
        name: "DashBoard",
        to: process.env.REACT_APP_DOMAIN_URL + '/admin',
        icon: faChartLine
    },
    {
        name: 'Products',
        to: process.env.REACT_APP_DOMAIN_URL + '/admin/product',
        icon: faBoxArchive
    },
    // {
    //     name: 'Theme',
    // },
    {
        name: 'Blog',
        to: process.env.REACT_APP_DOMAIN_URL + '/admin/post',
        icon: faBookOpen,
    },
    // {
    //     name: 'Container'
    // }
    // {
    //     name: 'Base',
    //     icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //     items: [
    //         {
    //             name: 'Accordion',
    //             to: '/base/accordion',
    //             icon: <FontAwesomeIcon icon={faCalculator} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Breadcrumb',
    //             to: '/base/breadcrumbs',
    //             icon: <FontAwesomeIcon icon={faChartPie} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Cards',
    //             to: '/base/cards',
    //             icon: <FontAwesomeIcon icon={faAudioDescription} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Carousel',
    //             to: '/base/carousels',
    //             icon: <FontAwesomeIcon icon={faBell} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Collapse',
    //             to: '/base/collapses',
    //             icon: <FontAwesomeIcon icon={faHandPointer} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'List group',
    //             to: '/base/list-groups',
    //             icon: <FontAwesomeIcon icon={faNoteSticky} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Navs & Tabs',
    //             to: '/base/navs',
    //             icon: <FontAwesomeIcon icon={faStar} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Pagination',
    //             to: '/base/paginations',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Placeholders',
    //             to: '/base/placeholders',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Popovers',
    //             to: '/base/popovers',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Progress',
    //             to: '/base/progress',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Spinners',
    //             to: '/base/spinners',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Tables',
    //             to: '/base/tables',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //         {
    //             name: 'Tooltips',
    //             to: '/base/tooltips',
    //             icon: <FontAwesomeIcon icon={faPuzzlePiece} className='sidebar-icon' />,
    //         },
    //     ],
    // },
    // {
    //     component: Nav,
    //     name: 'Buttons',
    //     to: '/buttons',
    //     icon: <FontAwesomeIcon icon={faHandPointer} className='sidebar-icon' />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Buttons',
    //             to: '/buttons/buttons',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Buttons groups',
    //             to: '/buttons/button-groups',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Dropdowns',
    //             to: '/buttons/dropdowns',
    //         },
    //     ],
    // },
    // {
    //     component: Nav,
    //     name: 'Forms',
    //     icon: <FontAwesomeIcon icon={faNoteSticky} className='sidebar-icon' />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Form Control',
    //             to: '/forms/form-control',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Select',
    //             to: '/forms/select',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Checks & Radios',
    //             to: '/forms/checks-radios',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Range',
    //             to: '/forms/range',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Input Group',
    //             to: '/forms/input-group',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Floating Labels',
    //             to: '/forms/floating-labels',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Layout',
    //             to: '/forms/layout',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Validation',
    //             to: '/forms/validation',
    //         },
    //     ],
    // },
    // {
    //  
    //     component: Nav.Link,
    //     name: 'Charts',
    //     to: '/charts',
    //     icon: <FontAwesomeIcon icon={faChartPie} className='sidebar-icon' />,
    // },
    // {
    //     component: Nav,
    //     name: 'Icons',
    //     icon: <FontAwesomeIcon icon={faStar} className='sidebar-icon' />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'CoreUI Free',
    //             to: '/icons/coreui-icons',
    //             badge: {
    //                 color: 'success',
    //                 text: 'NEW',
    //             },
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'CoreUI Flags',
    //             to: '/icons/flags',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'CoreUI Brands',
    //             to: '/icons/brands',
    //         },
    //     ],
    // },
    // {
    //     component: Nav,
    //     name: 'Notifications',
    //     icon: <FontAwesomeIcon icon={faBell} className='sidebar-icon' />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Alerts',
    //             to: '/notifications/alerts',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Badges',
    //             to: '/notifications/badges',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Modal',
    //             to: '/notifications/modals',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Toasts',
    //             to: '/notifications/toasts',
    //         },
    //     ],
    // },
    // {
    //  
    //     component: Nav.Link,
    //     name: 'Widgets',
    //     to: '/widgets',
    //     icon: <FontAwesomeIcon icon={faCalculator} className='sidebar-icon' />,
    //     badge: {
    //         color: 'info',
    //         text: 'NEW',
    //     },
    // },
    // {
    //     component: Navbar.Text,
    //     name: 'Extras',
    // },
    // {
    //     component: Nav,
    //     name: 'Pages',
    //     icon: <FontAwesomeIcon icon={faStar} className='sidebar-icon' />,
    //     items: [
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Login',
    //             to: '/login',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Register',
    //             to: '/register',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Error 404',
    //             to: '/404',
    //         },
    //         {
    //          
    //             component: Nav.Link,
    //             name: 'Error 500',
    //             to: '/500',
    //         },
    //     ],
    // },
    // {
    //  
    //     component: Nav.Link,
    //     name: 'Docs',
    //     href: 'https://coreui.io/react/docs/templates/installation/',
    //     icon: <FontAwesomeIcon icon={faAudioDescription} className='sidebar-icon' />,
    // },
]

export default _nav
