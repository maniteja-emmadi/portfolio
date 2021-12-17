import React from "react";
import HeroImage from "../../utils/hero.js";
import { DownloadIcon } from "../Icons/DownloadIcon.js";
import { GithubIcon } from "../Icons/GithubIcon.js";
import { LinkedInIcon } from "../Icons/LinkedInIcon";
import {
	HeroActionsContainer,
	HeroButton,
	HeroContainer,
	HeroDescription,
	HeroImageContainer,
	HeroSection,
	HeroSocial,
	HeroSubTitle,
	HeroTextContainer,
	HeroTitle,
} from "./Hero.styles.js";

const Hero = () => {
	return (
		<HeroSection className="pt-8 px-0 pb-24 max-w-screen-xl mx-auto">
			<HeroContainer>
				<HeroTextContainer>
					<HeroTitle className="font-semibold">
						Hi, I'm Mani Teja
					</HeroTitle>
					<HeroSubTitle className="font-medium text-xl">
						Software Engineer
					</HeroSubTitle>
					<HeroDescription>
						I enjoy working with scalable and performant software
						solutions for the web.
					</HeroDescription>
					<HeroActionsContainer>
						<HeroButton
							to="/files/resume.pdf"
							target="_blank"
							rel="noreferrer">
							Get Resume <DownloadIcon />
						</HeroButton>
						<HeroSocial>
							<div>
								<a
									rel="noreferrer"
									target="_blank"
									aria-label="link to my linkedin profile"
									href="https://www.linkedin.com/in/maniteja-emmadi/">
									<LinkedInIcon />
								</a>
							</div>
							<div>
								<a
									class="hero_social_icon__2efHy"
									rel="noreferrer"
									target="_blank"
									aria-label="link to my github profile"
									href="https://github.com/ManiTejaE">
									<GithubIcon />
								</a>
							</div>
						</HeroSocial>
					</HeroActionsContainer>
				</HeroTextContainer>
				<HeroImageContainer>
					<HeroImage className="hero-image" />
				</HeroImageContainer>
			</HeroContainer>
		</HeroSection>
	);
};

export default Hero;
