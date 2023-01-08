import { PostCard } from 'components/cards/PostCard';
import { BorderTitle } from 'components/ui/BorderTitle';
import { Button } from 'components/ui/Button';

export const BlogSection = () => {
	return (
		<section className={'flex items-center justify-center py-12 px-6 md:py-32 md:px-0'}>
			<div className={'container'}>
				<BorderTitle>Últimas Notícias</BorderTitle>
				<div className={'mb-16 mt-14 grid grid-cols-1 gap-5 md:grid-cols-3'}>
					<PostCard
						category={'Equipa Principal'}
						date={new Date('2022-05-17')}
						img={'/assets/media/image3.png'}
						link={'#'}
						title={'Messi deseja comprar 35% das ações de clube.'}
					/>
					<PostCard
						category={'Equipa Principal'}
						date={new Date('2022-05-15')}
						img={'/assets/media/image5.png'}
						link={'#'}
						title={'Tudo sobre a vitória em Montpellier'}
					/>
					<PostCard
						category={'Equipa Principal'}
						date={new Date('2022-05-15')}
						img={'/assets/media/image4.png'}
						link={'#'}
						title={'Mbappé no Liverpool?'}
					/>
				</div>

				<div className={'flex items-center justify-center'}>
					<Button className={'w-full md:w-fit'} variant={'red'}>
						Carregar Mais
					</Button>
				</div>
			</div>
		</section>
	);
};
