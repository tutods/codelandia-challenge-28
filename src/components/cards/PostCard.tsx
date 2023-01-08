import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: ReactNode;
	date: Date;
	category: string;
	img: string;
	link: string;
};

export const PostCard = ({ title, link, date, category, img }: Props) => {
	return (
		<Link
			className={'durantion-300 group flex flex-col gap-4 transition-all ease-in-out'}
			href={link}
		>
			<div className={'relative h-[300px] w-full rounded group-hover:opacity-80'}>
				<Image
					fill
					alt={String(title)}
					className={'aspect-square rounded object-cover object-top'}
					src={img}
				/>
			</div>
			<div className={'flex items-center justify-between gap-4 text-sm'}>
				<span className={'font-semibold uppercase text-custom-red'}>{category}</span>
				<span className={'text-custom-gray text-opacity-40'}>
					{date.toLocaleDateString('pt-PT', {
						day: '2-digit',
						month: 'long',
						year: 'numeric'
					})}
				</span>
			</div>

			<h3 className={'text-xl font-medium text-custom-dark group-hover:text-opacity-80'}>
				{title}
			</h3>
		</Link>
	);
};
