import { useState } from 'react';
import Image from 'next/image';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { Button } from 'components/ui/Button';
import { MenuItem } from 'components/ui/Header/partials/MenuItem';

type Props = {
	items: { label: string; path: string }[];
};

export const MobileMenu = ({ items }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMobileMenu = () => setIsOpen((prev) => !prev);

	return (
		<>
			<Button
				className={'inline-flex items-center gap-2 md:hidden'}
				variant={'red'}
				onClick={handleMobileMenu}
			>
				Menu
				<Bars3BottomRightIcon className={'h-6 w-6 text-custom-white'} />
			</Button>
			<div
				className={`absolute top-0 flex h-screen w-full flex-col gap-6 bg-custom-dark px-6 py-4 transition-all duration-500 md:hidden ${
					isOpen ? 'right-0' : '-right-[100%]'
				}`}
			>
				<div className={'flex items-center justify-between'}>
					<Image alt={'PSG'} height={64} src={'/assets/media/psg.svg'} width={64} />

					<XMarkIcon className={'h-6 w-6 text-custom-white'} onClick={handleMobileMenu} />
				</div>

				<nav className={'flex flex-col items-center gap-4 text-xl text-custom-white'}>
					{items.map(({ path, label }) => (
						<MenuItem
							key={label.toLowerCase().replace(' ', '-')}
							label={label}
							path={path}
						/>
					))}
				</nav>

				<section className={'mt-12 flex flex-col items-center gap-4'}>
					<Button className={'w-full'} variant={'transparent'}>
						Entrar
					</Button>
					<Button className={'w-full'} variant={'red'}>
						Registre-se
					</Button>
				</section>
			</div>
		</>
	);
};
