import { Button } from 'components/ui/Button';

export const HeroSection = () => (
	<section
		className={
			'flex min-h-[80vh] items-center justify-center bg-neymar bg-cover bg-center bg-no-repeat px-6 md:min-h-[50vh] md:bg-top md:px-0'
		}
	>
		<div className={'container'}>
			<div className={'flex flex-col md:max-w-[500px]'}>
				<h1 className={'text-5xl font-bold uppercase italic text-custom-white md:text-7xl'}>
					Neymar Jr
				</h1>
				<p className={'mt-5 text-xl italic text-custom-white'}>
					&quot;Tenho Messi e Cristiano Ronaldo como ídolos. Se der para pegar um
					pouquinho de cada um, fico muito feliz.&quot;
				</p>

				<Button className={'mt-12 w-full md:max-w-fit'} variant={'red'}>
					Ler Matéria
				</Button>
			</div>
		</div>
	</section>
);
