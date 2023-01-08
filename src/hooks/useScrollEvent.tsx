import { RefObject, useEffect } from 'react';

export const useScrollEvent = (callback: () => void, element?: RefObject<any>) => {
	useEffect(() => {
		if (!element && !window) {
			return;
		}

		const elementToAddListener = element && element.current ? element.current : window;

		elementToAddListener.addEventListener('scroll', callback, {
			passive: true
		});

		return () => elementToAddListener.removeEventListener('scroll', callback);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
