import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSection = styled.section``;
export const HeroContainer = styled.div`
	display: grid;
	gap: 1.5rem;
	align-items: center;
	max-width: 1150px;
	padding-top: 3.5rem;
	margin: 0 auto;
	position: relative;
	order: -1;
	@media screen and (min-width: 700px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const HeroImageContainer = styled.div`
	justify-self: center;
	order: -1;

	@media screen and (min-width: 700px) {
		order: unset;
	}
`;

export const HeroTextContainer = styled.div`
	max-width: 350px;
	margin: 0 auto;
	padding: 0 1rem;

	@media screen and (min-width: 700px) {
		max-width: 420px;
		margin: 0;
		justify-self: end;
	}
	@media screen and (min-width: 1024px) {
		max-width: 540px;
		margin: 0;
		justify-self: end;
	}
`;

export const HeroTitle = styled.h1`
	font-size: ${({ theme }) => theme.constants.h1FontSize};
	margin-bottom: 0.75rem;

	@media ${({ theme }) => theme.breakpoints.mmd} {
		font-size: 2.2rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 2.8rem;
	}

	@media screen and (min-width: 1200px) {
		font-size: 3rem;
	}
`;

export const HeroSubTitle = styled.h2`
	color: ${({ theme }) => theme.colors.subText};
	margin-bottom: 0.5rem;

	@media screen and (min-width: 768px) {
		font-size: 1.3rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 1.5rem;
		margin-bottom: 1.2rem;
	}
	@media screen and (min-width: 1200px) {
		font-size: 1.8rem;
		margin-bottom: 1.6rem;
	}
`;

export const HeroDescription = styled.p`
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.subText};

	@media ${({ theme }) => theme.breakpoints.mmd} {
		font-size: 1.1rem;
	}
`;

export const HeroActionsContainer = styled.div`
	@media screen and (min-width: 700px) {
		display: flex;
		align-items: center;
	}
`;

export const HeroButton = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: #fff;
	font-weight: 500;
	border-radius: 0.5rem;
	padding: 0.75rem 1rem;
`;

export const HeroSocial = styled.div`
	position: absolute;
	top: 6rem;
	left: 0;
	color: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media screen and (min-width: 700px) {
		position: static;
		margin-left: 2rem;
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
	}
`;
