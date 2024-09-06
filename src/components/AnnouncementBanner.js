import React, { useEffect, useRef, useState } from 'react';

const AnnouncementBanner = ({ emoji, messageHtml }) => {
	const [visible, setVisible] = useState(true);
	const [display, setDisplay] = useState(true);
	const timeoutRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setVisible(false);
			} else {
				setVisible(true);
				setDisplay(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!visible) {
			timeoutRef.current = setTimeout(() => {
				setDisplay(false);
			}, 300); // 300ms delay, matching the transition duration
		} else {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			setDisplay(true);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [visible]);

	const styles = {
		container: {
			position: 'fixed',
			top: '6rem',
			left: '50%',
			transform: 'translateX(-50%)',
			width: '60%',
			display: display ? 'flex' : 'none',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '1rem',
			backgroundColor: 'rgba(255, 255, 255, 0.8)',
			color: 'var(--color-text)',
			padding: '1.5rem',
			boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
			borderRadius: '8px',
			border: '2px solid var(--color-secondary)',
			zIndex: 1000,
			opacity: visible ? 1 : 0,
			transition: 'opacity 0.3s ease-in-out',
			fontSize: '1rem',
		},
		emoji: {
			fontSize: '2rem',
			margin: '0 0.5rem',
		},
		message: {
			flex: 1,
			fontSize: '1.1rem',
		},
	};

	return (
		<div style={styles.container}>
			<span style={styles.emoji}>{emoji}</span>
			<h3>
				<div
					style={styles.message}
					dangerouslySetInnerHTML={{ __html: messageHtml }}
				/>
			</h3>
		</div>
	);
};

export default AnnouncementBanner;
