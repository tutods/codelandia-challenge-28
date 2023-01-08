import { BorderTitle } from 'components/ui/BorderTitle';
import { Button } from 'components/ui/Button';

export const WelcomeSection = () => (
	<section
		className={
			'flex items-center justify-center bg-stadium bg-cover bg-center bg-no-repeat py-10 px-6 md:min-h-[800px] md:py-0 md:px-0'
		}
	>
		<div className={'container rounded bg-white p-10 shadow'}>
			<BorderTitle>Bem vindo ao Parc Des Princes</BorderTitle>
			<p className={'mb-9 mt-6 text-custom-gray'}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				ullamco laboris nisi ut aliquip ex ea commodo consequat. Uis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.&quot;
			</p>

			<Button variant={'transparent-red'}>Ler Mais</Button>
		</div>
	</section>
);
