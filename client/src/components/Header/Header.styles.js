import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	height: ${({ theme }) => theme.constants.navbarHeight};
	background-color: ${({ theme }) => theme.colors.body};

	@media ${({ theme }) => theme.breakpoints.mmd} {
		top: 0;
		bottom: auto;
		padding: 0 3rem;
	}
`;

export const Nav = styled.nav`
	max-width: 1200px;
	height: ${({ theme }) => theme.constants.navbarHeight};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.5rem 1.5rem 1rem;
	@media ${({ theme }) => theme.breakpoints.mmd} {
		height: ${({ theme }) => theme.constants.navbarHeight};
		-moz-column-gap: 1rem;
		column-gap: 1rem;
		margin: 0 auto;
	}
`;

export const NavList = styled.ul`
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(2, 1fr);
	@media ${({ theme }) => theme.breakpoints.mmd} {
		display: flex;
		column-gap: 2rem;
	}
`;

export const NavLinkItem = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.colors.text};
	font-size: ${({ theme }) => theme.constants.smallFontSize};
	transition: all 0.2s;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		transform: translateY(-2px);
	}
`;

export const NavLinkItemIcon = styled.div`
	@media ${({ theme }) => theme.breakpoints.mmd} {
		display: none;
	}
`;

export const Name = styled(Link)`
	to: "/";
	color: ${({ theme }) => theme.colors.text};
`;

export const Menu = styled.div`
	@media ${({ theme }) => theme.breakpoints.md} {
		position: fixed;
		bottom: -100%;
		left: 0;
		width: 100%;
		background: ${({ theme }) => theme.colors.body};
		padding: 2rem 1.5rem 6rem;
		box-shadow: ${({ theme }) => theme.constants.headerShadow};
		border-radius: 1.5rem 1.5rem 0 0;
		transition: 0.3s;
		bottom: ${({ open }) => (open ? "0" : "-100%")};
	}
	@media ${({ theme }) => theme.breakpoints.mmd} {
		margin-left: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

export const MenuCloseDiv = styled.div`
	position: absolute;
	right: 1.3rem;
	bottom: 1.5rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.primary};

	@media ${({ theme }) => theme.breakpoints.mmd} {
		display: none;
	}
	display: ${({ open }) => (open ? "" : "none")};
`;

export const ToggleDiv = styled.div`
	@media ${({ theme }) => theme.breakpoints.md} {
	}
`;

export const ToggleButtonsDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	@media ${({ theme }) => theme.breakpoints.mmd} {
		margin-left: 1rem;
	}
`;

export const ToggleThemeButton = styled.div`
	color: ${({ theme }) => theme.colors.text};
`;

export const ToggleMenuButton = styled.div`
	color: ${({ theme }) => theme.colors.text};

	@media ${({ theme }) => theme.breakpoints.mmd} {
		display: none;
	}
`;
