import React, { useState } from 'react';
import TopbarAvatar from 'components/topbar/TopbarAvatar';
import Sidebar from 'components/sidebar/Sidebar';
import LayoutContent from 'components/bases/LayoutContent';
import adminRoute from 'routes/AdminRoute';
import _nav from 'const/AdminNav';
import logo from "images/logo.svg";
import avatar from "images/profile-1.png";
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AdminLayout = () => {
	const [sidebarShow, setSidebarShow] = useState(true);

	const hideSideBar = () => {
		console.log("a")
		setSidebarShow(!sidebarShow);
	}

	return (
		<Container fluid className={(sidebarShow ? '' : 'sidenav-toggled') + ' p-0 overflow-hidden'} style={{ height: '100vh' }}>
			<div className='fixed-top mt-2 sidenav-button'>
				<Button
					variant='link'
					onClick={hideSideBar}
				>
					<FontAwesomeIcon icon={faBars} />
				</Button>
			</div>
			<div className='sidebar-nav'>
				<Sidebar navigation={_nav} logo={logo} title="Treact" className="bg-white pt-0 shadow-right" onhide={hideSideBar} />
			</div>
			<div className='bg-light sidebar-content overflow-hidden'>
				<div className="d-flex flex-column">
					<TopbarAvatar type="sticky" avatar={avatar} notiFunction={() => { }} messageFunction={() => { }} className="bg-white py-1 shadow-right" />
					<div className="flex-grow-1" style={{ overflow: 'auto', height: 'calc(100vh - 50px)' }}>
						<LayoutContent routes={adminRoute} />
					</div>
				</div>
			</div>

		</Container>
	)
}

export default AdminLayout
