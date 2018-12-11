import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Button } from 'rebass';
import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
});

const App = () => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyle />
			<div className="App">
				<section className="Section">
					<p>Hello world</p>
					<ul>
						<li>first</li>
						<li>second</li>
					</ul>
					<input name="age" />
					<Button active variant="primary">
						Click
					</Button>
				</section>
			</div>
		</Fragment>
	</ThemeProvider>
);

export default App;
