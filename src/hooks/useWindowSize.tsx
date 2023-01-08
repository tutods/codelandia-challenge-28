import { useEffect, useState } from 'react';

export const useWindowSize = () => {
	const [windowSize, setWindowsSize] = useState<{
		width?: number;
		height?: number;
	}>({});

	const handleWindowResize = () => {
		setWindowsSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
	};

	useEffect(() => {
		if (!window) {
			return;
		}

		setWindowsSize({
			width: window.innerWidth,
			height: window.innerHeight
		});

		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return windowSize;
};
