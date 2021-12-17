import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 1rem;
	padding-top: 2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 60px);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
`;

export const Section = styled.section`
	padding: 2rem 0 4rem;
	max-width: 1200px;
	margin: 0 auto;

	@media screen and (min-width: 700px) {
		padding: 4rem 0 2rem;
	}

	@media ${({ theme }) => theme.breakpoints.mmd} {
		padding: 10rem 0 2rem;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;

	@media ${({ theme }) => theme.breakpoints.mmd} {
		font-size: 1.8rem;
	}

    @media screen and (min-width: 1024px) {
        font-size: 1.8rem;
    }
}
`;

export const SectionSubTitle = styled.span`
	display: block;
	margin-bottom: 3rem;
	font-size: 0.9rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.subText};

	@media screen and (min-width: 1024px) {
		font-size: 1rem;
	}
`;
