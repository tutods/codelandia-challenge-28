import { BlogSection } from 'components/sections/BlogSection';
import { HeroSection } from 'components/sections/HeroSection';
import { ResultSection } from 'components/sections/ResultSection';
import { WelcomeSection } from 'components/sections/WelcomeSection';
import { Footer } from 'components/ui/Footer';
import { Header } from 'components/ui/Header';

const Home = () => {
	return (
		<>
			<Header />

			<HeroSection />

			<ResultSection />

			<WelcomeSection />

			<BlogSection />

			<Footer />
		</>
	);
};

export default Home;
