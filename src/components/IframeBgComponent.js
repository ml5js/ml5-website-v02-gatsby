import React from 'react';

const IframeBgComponent = (style) => {
	const styles = {
		container: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			overflow: 'hidden',
			zIndex: -1,
		},
		iframe: {
			width: '100vw',
			height: '100%',
			border: 'none',
		},
	};

	return (
		<div style={styles.container}>
			<iframe
				src="https://moqn.github.io/ml5-website-hero/sketch/"
				title="Hero Sketch"
				style={styles.iframe}
				allowFullScreen
			></iframe>
		</div>
	);
};

export default IframeBgComponent;
