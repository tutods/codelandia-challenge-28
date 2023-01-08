export const isWidthSmall = (width?: number, breakpoint = 640) => {
	return !!width && width < breakpoint;
};
