import React from 'react';
import {
	Button,
	Navbar,
	Container,
	Nav
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidebarNav } from 'components/sidebar/SidebarNav';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "components/bases/TopbarComponents";

const Sidebar = (props) => {
	return (
		<Navbar className={"sidebar nav sidenav-light " + props.className}>
			<Container className="ps-4 pb-2">
				<Logo src={props.logo} title={props.title} />
				{ props?.onhide ?
					<Button
						variant='link'
						onClick={props.onhide}
					>
						<FontAwesomeIcon icon={faBars} />
					</Button> : null
				}
			</Container>
			<Container id="sidebar" style={{ overflow: 'auto', height: "calc(100vh - 65px)" }}>
				<Nav className="d-md-block w-100 align-self-start">
					<SidebarNav items={props.navigation} />
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Sidebar
