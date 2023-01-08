import Link from 'next/link';

type Props = {
	path: string;
	label: string;
};

export const MenuItem = ({ path, label }: Props) => {
	return (
		<Link
			href={path}
			className={
				'border-b-2 border-b-transparent px-1 pb-2 transition-colors duration-300 ease-in-out hover:border-b-custom-red'
			}
		>
			{label}
		</Link>
	);
};
