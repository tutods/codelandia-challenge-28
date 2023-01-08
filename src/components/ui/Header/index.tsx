import { useState } from 'react';
import Image from 'next/image';

import { DesktopMenu } from 'components/ui/Header/partials/DesktopMenu';
import { MobileMenu } from 'components/ui/Header/partials/MobileMenu';
import { useScrollEvent } from 'hooks/useScrollEvent';

const MENU_ITEMS = [
	{
		path: '#',
		label: 'Inicio'
	},
	{
		path: '#',
		label: 'Resultados'
	},
	{
		path: '#',
		label: 'Notícias'
	},
	{
		path: '#',
		label: 'Clubes'
	},
	{
		path: '#',
		label: 'Lojas'
	}
];

export const Header = () => {
	const [headerStyle, setHeaderStyle] = useState<string>('bg-transparent');

	useScrollEvent(() =>
		setHeaderStyle(window && window.scrollY >= 20 ? 'bg-custom-dark/90' : 'bg-transparent')
	);

	return (
		<header
			className={`fixed top-0 z-10 w-full py-4 px-6 transition-colors duration-300 ease-in-out md:py-6 md:px-0 ${headerStyle}`}
		>
			<section className={'container mx-auto flex items-center justify-between gap-10'}>
				<Image alt={'PSG'} height={64} src={'/assets/media/psg.svg'} width={64} />

				<DesktopMenu items={MENU_ITEMS} />
				<MobileMenu items={MENU_ITEMS} />
			</section>
		</header>
	);
};
