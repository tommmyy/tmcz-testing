import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
});

const Content = () => <div>Content</div>;

const App = () => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyle />
			<Content />
		</Fragment>
	</ThemeProvider>
);

export default App;
