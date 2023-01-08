import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className?: string;
};
export const BorderTitle = ({ children, className = '' }: Props) => (
	<h2
		className={`text-2xl font-semibold uppercase before:mr-4 before:inline-block before:h-5 before:w-1 before:rounded before:bg-custom-red ${className}`}
	>
		{children}
	</h2>
);
