import { Button } from 'components/ui/Button';
import { MenuItem } from 'components/ui/Header/partials/MenuItem';

type Props = {
	items: { path: string; label: string }[];
};

export const DesktopMenu = ({ items }: Props) => (
	<>
		<nav className={'hidden items-center gap-8 text-custom-white md:flex'}>
			{items.map(({ path, label }) => (
				<MenuItem key={label.toLowerCase().replace(' ', '-')} label={label} path={path} />
			))}
		</nav>

		<section className={'hidden items-center gap-12 md:flex'}>
			<Button variant={'transparent'}>Entrar</Button>
			<Button variant={'red'}>Registre-se</Button>
		</section>
	</>
);
