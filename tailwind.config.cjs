/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{jsx,tsx}', 'public/*.html'], theme: {
		extend: {
			colors: {
				custom: {
					red: '#DA2535',
					gray: '#515151',
					dark: '#0B1421',
					white: '#F9F9F9'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			backgroundImage: {
				neymar: 'linear-gradient(0deg, rgba(11, 20, 33, 0.8), rgba(11, 20, 33, 0.8)), url(/assets/media/image1.png)',
				stadium: 'linear-gradient(0deg, rgba(11, 20, 33, 0.8), rgba(11, 20, 33, 0.8)), url(/assets/media/image2.png)'
			}
		}

	}, plugins: []
};
