import { HTMLAttributes, ReactNode } from 'react';

const VARIANTS = {
	transparent: 'uppercase font-semibold bg-transparent text-custom-white border-none shadow-none',
	'transparent-red':
		'uppercase font-semibold bg-transparent text-custom-red border-none shadow-none',
	red: 'uppercase font-semibold bg-custom-red text-custom-white rounded py-3 px-6 transition-all ease-in-out durante-300 hover:bg-opacity-75'
};

type Props = HTMLAttributes<HTMLButtonElement> & {
	variant: keyof typeof VARIANTS;
	children: ReactNode;
	className?: string;
};

export const Button = ({ variant, children, className = '', ...props }: Props) => {
	return (
		<button {...props} className={`cursor-pointer ${VARIANTS[variant]} ${className}`}>
			{children}
		</button>
	);
};
