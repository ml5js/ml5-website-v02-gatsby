import React, { useEffect, useRef, useState } from 'react';

const AnnouncementBanner = ({ emoji, messageHtml }) => {
	const [visible, setVisible] = useState(true);
	const [display, setDisplay] = useState(true);
	const [dismissed, setDismissed] = useState(false);
	const timeoutRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	// Check window width on mount and resize
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		
		// Initial check
		checkMobile();
		
		// Add event listener for window resize
		window.addEventListener('resize', checkMobile);
		
		// Cleanup
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

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

	const handleDismiss = () => {
		setDismissed(true);
		setVisible(false);
	};

	if (dismissed) {
		return null;
	}

	const styles = {
		container: {
			position: 'fixed',
			top: isMobile ? '4rem' : '6rem',
			left: '50%',
			transform: 'translateX(-50%)',
			width: isMobile ? '90%' : '60%',
			maxWidth: '1200px',
			minWidth: isMobile ? 'auto' : '600px',
			display: display ? 'flex' : 'none',
			flexDirection: isMobile ? 'column' : 'row',
			justifyContent: 'center',
			alignItems: isMobile ? 'flex-start' : 'center',
			gap: isMobile ? '0.5rem' : '1rem',
			backgroundColor: 'rgba(255, 255, 255, 0.95)',
			color: 'var(--color-text)',
			padding: isMobile ? '1rem' : '1.5rem',
			boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
			borderRadius: '8px',
			border: '2px solid var(--color-secondary)',
			zIndex: 99,
			opacity: visible ? 1 : 0,
			transition: 'opacity 0.3s ease-in-out',
			fontSize: '1rem',
		},
		content: {
			display: 'flex',
			flexDirection: isMobile ? 'column' : 'row',
			alignItems: isMobile ? 'flex-start' : 'center',
			gap: isMobile ? '0.5rem' : '1rem',
			width: '100%',
		},
		emoji: {
			fontSize: isMobile ? '1.5rem' : '2rem',
			margin: isMobile ? '0' : '0 0.5rem',
			alignSelf: isMobile ? 'flex-start' : 'center',
		},
		message: {
			flex: 1,
			fontSize: isMobile ? '0.95rem' : '1.1rem',
		},
		closeButton: {
			position: 'absolute',
			top: '0.5rem',
			right: '0.5rem',
			background: 'none',
			border: 'none',
			cursor: 'pointer',
			fontSize: isMobile ? '2rem' : '1.2rem',
			color: 'var(--color-text-light)',
			padding: '0.25rem',
		},
	};

	return (
		<div style={styles.container} role="alert" aria-live="polite">
			<button 
				style={styles.closeButton} 
				onClick={handleDismiss}
				aria-label="Dismiss announcement"
			>
				×
			</button>
			<div style={styles.content}>
				<span style={styles.emoji} aria-hidden="true">{emoji}</span>
				<h3 style={{ margin: 0 }}>
					<div
						style={styles.message}
						dangerouslySetInnerHTML={{ __html: messageHtml }}
					/>
				</h3>
			</div>
		</div>
	);
};

export default AnnouncementBanner;
