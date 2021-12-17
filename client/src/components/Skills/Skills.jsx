import React from "react";
import styled from "styled-components";
import {
	Section,
	SectionSubTitle,
	SectionTitle,
} from "../../static/styles/global/globals";

export const SkillsContainer = styled.div`
	display: grid;
	gap: 1.5rem;
	margin: 0 auto;

	@media screen and (min-width: 700px) {
		max-width: 768px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 1024px) {
		max-width: 900px;
	}
`;

const Skills = () => {
	return (
		<Section>
			<SectionTitle>Skills</SectionTitle>
			<SectionSubTitle>My technical skills</SectionSubTitle>
		</Section>
	);
};

export default Skills;
