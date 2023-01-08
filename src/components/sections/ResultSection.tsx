import Image from 'next/image';

import { useWindowSize } from 'hooks/useWindowSize';
import { isWidthSmall } from 'utils/isWidthSmall';

export const ResultSection = () => {
	const { width } = useWindowSize();
	const isWidthSmallerThan768 = isWidthSmall(width, 768);

	return (
		<section className={'py-12 md:py-32'}>
			<div
				className={
					'container mx-auto flex items-center justify-center gap-8 text-4xl font-medium text-custom-dark md:text-2xl'
				}
			>
				<span className={'hidden sm:block'}>Montepellier</span>
				<Image
					alt={'Montepellier'}
					height={isWidthSmallerThan768 ? 80 : 130}
					src={'/assets/media/logo2.svg'}
					width={isWidthSmallerThan768 ? 80 : 130}
				/>
				<span>
					0 <span className={'text-gray-400'}>-</span> 4
				</span>
				<Image
					alt={'Montepellier'}
					height={isWidthSmallerThan768 ? 80 : 130}
					src={'/assets/media/logo1.svg'}
					width={isWidthSmallerThan768 ? 80 : 130}
				/>
				<span className={'hidden sm:block'}>PSG</span>
			</div>
		</section>
	);
};
