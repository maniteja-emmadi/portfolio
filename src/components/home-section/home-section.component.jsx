import React from "react";

import "./home-section.styles.scss";
import Name from "./name";

const HomeSection = () => (
	<section className="home" id="home">
		<div className="max-width">
			<div className="home-content">
				<div className="text-1">Hello, my name is</div>
				<div className="text-2">
					<Name />
				</div>
				<div className="text-1">
					And I'm a <span>Developer</span>
				</div>
			</div>
		</div>
	</section>
);

export default HomeSection;
