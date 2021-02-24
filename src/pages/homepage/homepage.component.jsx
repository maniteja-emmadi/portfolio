import React from "react";
import Header from "../../components/header/header.component";
import HomeSection from "../../components/home-section/home-section.component";

import "./homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<Header />
		<HomeSection />
	</div>
);

export default HomePage;
