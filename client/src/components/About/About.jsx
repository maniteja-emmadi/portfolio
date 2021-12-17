import React from "react";
import {
	Section,
	SectionSubTitle,
	SectionTitle,
} from "../../static/styles/global/globals";
import { AboutDescriptionContainer, AboutDescriptionDiv } from "./About.styles";

const About = () => {
	return (
		<Section>
			<SectionTitle>About Me</SectionTitle>
			<SectionSubTitle>A little about me</SectionSubTitle>
			<AboutDescriptionContainer>
				<AboutDescriptionDiv>
					I have experience working with{" "}
					<strong>Web Technologies</strong>, designing and
					implementing software solutions for different scenarios.
					Familiar with <strong>Frontend &amp; Backend</strong>{" "}
					technologies following{" "}
					<strong>Monolithic, Microservice &amp; JAMstack</strong>{" "}
					architectures with{" "}
					<strong>Gateways, Message queues, Caching</strong> for
					creating web apps and have implemented{" "}
					<strong>DevOps</strong> workflow to improve the SDLC.
				</AboutDescriptionDiv>
				<AboutDescriptionDiv>
					As academic qualifications, I have a{" "}
					<strong>Master's Degree</strong> from the University of
					Calicut, Kerala and also have qualified{" "}
					<strong>UGC-NET</strong> for Asst. Professor
				</AboutDescriptionDiv>
				<AboutDescriptionDiv>
					Apart from programming, my other Interests are Powerlifting
					&amp; Gaming{" "}
				</AboutDescriptionDiv>
			</AboutDescriptionContainer>
		</Section>
	);
};

export default About;
