export const Footer = () => (
	<footer
		className={
			'flex items-center justify-center bg-custom-dark px-6 py-14 text-custom-white md:px-0'
		}
	>
		<section className={'container grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4'}>
			<div>
				<h4 className={'mb-5 text-lg font-semibold uppercase md:mb-8 md:text-2xl'}>
					Languages
				</h4>
				<ul className={'flex flex-col gap-4'}>
					<li className={'cursor-pointer'}>English</li>
					<li className={'cursor-pointer'}>Français</li>
					<li className={'cursor-pointer'}>Español</li>
					<li className={'cursor-pointer'}>العربية</li>
					<li className={'cursor-pointer'}>Bahasa Indonesia</li>
					<li className={'cursor-pointer'}>中文</li>
				</ul>
			</div>
			<div>
				<h4 className={'mb-5 text-lg font-semibold uppercase md:mb-8 md:text-2xl'}>
					Social Network
				</h4>
				<ul className={'flex flex-col gap-4'}>
					<li className={'cursor-pointer'}>Facebook</li>
					<li className={'cursor-pointer'}>Instagram</li>
					<li className={'cursor-pointer'}>Youtube</li>
				</ul>
			</div>
			<div>
				<h4 className={'mb-5 text-lg font-semibold uppercase md:mb-8 md:text-2xl'}>Club</h4>
				<ul className={'flex flex-col gap-4'}>
					<li className={'cursor-pointer'}>Sponsors</li>
				</ul>
			</div>
		</section>
	</footer>
);
