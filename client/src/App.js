import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { GlobalStyles } from "./static/styles/GlobalStyles";
import { darkTheme, lightTheme } from "./static/themes/Themes";

export const Main = styled.main`
	padding: 0 1.5rem;
	@media ${({ theme }) => theme.breakpoints.mmd} {
		padding: ${({ theme }) => theme.constants.navbarHeight} 3rem 0;
	}
`;

function App() {
	const [theme, setTheme] = useState("light");
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Header themeToggler={themeToggler} theme={theme} />
				<Main>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="*" render={() => <h6>404 Not Found</h6>} />
					</Routes>
				</Main>
				<footer></footer>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
