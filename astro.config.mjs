import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'درس برنامه‌نویسی (مبانی و پیشرفته)',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			locales: {
				root: {
					label: 'Farsi',
					lang: 'fa',
					dir: 'rtl',
				},
			},
			// social: {
			// 	github: 'https://github.com/aryansabet/FC_Recitation',
			// },
			sidebar: [
				{
					label: 'حل تمرین',
					autogenerate: { directory: 'haltamrin' },

				},
				{
					label: 'کارگاه',
					autogenerate: { directory: 'Workshop' },
				},
				// {
				// 	label: 'مقدمات',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'معرفی پروژه', link: '/main/example/' },
				// 	],
				// },
				// {
				// 	label: 'موضوع اول',
				// 	autogenerate: { directory: 'topic1' },
				// },


			],
		}),
	],
});
