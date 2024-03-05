/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			'mediumBlue': '#93c5fd',
			'titleH1': '#9a6e01',
			'menu': '#d4aa07',
			'back': '#0077b6',
			'pageText': '#dbeafe',
			'hoverText': '#976a02',
			'iconColor': '#c5980a',
			'footerBack': '#004a88'
		},
		backgroundImage: {
			'heroImg': "url('/img/hero.png')"
		},
	plugins: [],
	container: {
		center: true,
	  },
	}
}
