import styled from "styled-components";

export const AboutDescriptionContainer = styled.div`
	max-width: 768px;
	text-align: center;
	color: ${({ theme }) => theme.colors.subText};

	@media screen and (min-width: 700px) {
		text-align: left;
	}

	@media ${({ theme }) => theme.breakpoints.mmd} {
		margin: 0 auto;
	}

	@media ${({ theme }) => theme.breakpoints.mlg} {
		max-width: 940px;
	}
`;

export const AboutDescriptionDiv = styled.div`
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;
