import styled from "styled-components";
import Profile from "../static/images/Hidebg_com.png";
const HeroSvg = styled.svg`
	fill: ${({ theme }) => theme.colors.primary};
	width: 240px;

	@media screen and (min-width: 520px) {
		margin-bottom: 2rem;
	}

	@media ${({ theme }) => theme.breakpoints.mmd} {
		width: 300px;
	}
	@media ${({ theme }) => theme.breakpoints.mlg} {
		width: 340px;
	}
`;

const HeroSvgImage = styled.image`
	width: 200px;
	y: 5;
	@media ${({ theme }) => theme.breakpoints.lg} {
		y: 5;
		x: 10;
	}
`;
const HeroImage = ({ className }) => {
	return (
		<HeroSvg
			className=""
			viewBox="0 0 200 187"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink">
			<mask id="mask0" mask-type="alpha">
				<path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486z"></path>
			</mask>
			<g mask="url(#mask0)">
				<path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486z"></path>
				<HeroSvgImage
					class=""
					x="10"
					y="5"
					xlinkHref={Profile}></HeroSvgImage>
			</g>
		</HeroSvg>
	);
};
export default HeroImage;
