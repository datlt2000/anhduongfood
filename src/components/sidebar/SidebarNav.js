import React from 'react';

import { Accordion, Badge, NavItem, NavLink } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarNav = (props) => {
	const navLink = (name, to, icon, badge, indent = false) => {
		return (
			<NavLink className='d-flex align-items-center link ms-1' href={to}>
				{icon
					? <FontAwesomeIcon icon={icon} className='sidebar-icon' fixedWidth />
					: null}
				<div className='ms-2'>
					{name}
				</div>
				{badge && (
					<Badge pill bg={badge.color} className="ms-auto">
						{badge.text}
					</Badge>
				)}
			</NavLink>
		)
	}

	const navItem = (item, index, indent = false) => {
		const { name, to, badge, icon, ...rest } = item;
		return (
			<NavItem
				key={index}
				{...rest}
				className='ms-2'
			>
				{to ? navLink(name, to, icon, badge, indent) : <div className='sidenav-menu-item'>{name}</div>}
			</NavItem>
		)
	}
	const navGroup = (item, ind) => {
		const { name, icon, items, to, ...rest } = item
		return (
			<Accordion.Item
				eventKey={name + ind.toString()}
				key={name + ind.toString()}
				id={name}
				{...rest}
				className='border-0'
			>
				<Accordion.Header className='side-accordion-button'>
					{item.icon ? <FontAwesomeIcon icon={item.icon} className='sidebar-icon' fixedWidth /> : null}
					<span className='ms-2'>{name}</span>
				</Accordion.Header>
				<Accordion.Body className='d-flex'>
					<div className='border ms-2'></div>
					<Accordion className='flex-fill' flush>
						{item.items?.map((item, index) =>
							item.items ? navGroup(item, index) : navItem(item, index, true),
						)}
					</Accordion>
				</Accordion.Body>
			</Accordion.Item>
		)
	}
	return (
		<Accordion>
			{props.items &&
				props.items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
		</Accordion>
	)
}

