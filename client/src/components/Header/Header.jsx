import React, { useState } from "react";
import { BlogIcon } from "../Icons/BlogIcon";
import { HomeIcon } from "../Icons/HomeIcon";
import { MenuCloseIcon } from "../Icons/MenuClose";
import { Moon, Sun } from "../Icons/SunMoon";
import { ToggleMenu } from "../Icons/ToggleMenu";
import {
	Container,
	Menu,
	MenuCloseDiv,
	Name,
	Nav,
	NavLinkItem,
	NavLinkItemIcon,
	NavList,
	ToggleButtonsDiv,
	ToggleDiv,
	ToggleMenuButton,
	ToggleThemeButton,
} from "./Header.styles";

const menuOptions = [
	{ title: "Home", icon: <HomeIcon /> },
	{ title: "Contact", icon: <BlogIcon /> },
];
function Header({ theme, themeToggler }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleClickOpenMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<Container className="z-40">
			<Nav className="">
				<Name to="/" className="text-xl">
					Mani Teja Emmadi
				</Name>
				<Menu className="" open={menuOpen}>
					<NavList>
						{menuOptions.map(({ title, icon }) => (
							<li className="" key={title}>
								<NavLinkItem to="/" className="">
									<NavLinkItemIcon>{icon}</NavLinkItemIcon>
									{title}
								</NavLinkItem>
							</li>
						))}
					</NavList>
					<MenuCloseDiv onClick={handleClickOpenMenu} open={menuOpen}>
						<MenuCloseIcon />
					</MenuCloseDiv>
				</Menu>
				<ToggleDiv className="toggle">
					<ToggleButtonsDiv className="">
						{
							// <button onClick={themeToggler}>
							// 	<img
							// 		className="w-8"
							// 		src={theme ? Sun : Moon}
							// 		alt=""
							// 	/>
							// </button>
						}
						<ToggleThemeButton onClick={themeToggler}>
							{theme === "light" ? <Moon /> : <Sun />}
						</ToggleThemeButton>
						<ToggleMenuButton onClick={handleClickOpenMenu}>
							<ToggleMenu />
						</ToggleMenuButton>
					</ToggleButtonsDiv>
				</ToggleDiv>
			</Nav>
		</Container>
	);
}

export default Header;
