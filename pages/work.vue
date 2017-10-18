<template>
	<div class="work-page">
		<header>
			<h1>Work</h1>
			<nuxt-link to="/">back</nuxt-link>
		</header>
		<ul class="projects">
			<project v-for="project in projects" :project="project" :key="project.title"></project>
		</ul>
	</div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap'
import Project from '~/components/Project'
export default {
	transition: {
		enter (el, done) {
			TweenMax.staggerFromTo(document.querySelectorAll('.geo-background svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut }, 0.1)
		},
		leave (el, done) {
			TweenMax.staggerTo(document.querySelectorAll('.geo-background svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'none' }, 0.05, done)
		}
	},
	components: { Project },
	data () {
		return {
			projects: [
				{
					title: 'Core22',
					client: 'Core',
					description: 'Wellness / weight-loss app, with ecommerce, and real-time coaching.',
					role: 'full-stack dev',
					techDescription: `
					Isopmorphic JS (Universal JS / SSR) talking to Phoenix via GraphQL over socket channels.
					Payment processing through Stripe.
					`,
					date: '2017',
					status: 'MVP development',
					tags: {
						primary: ['vuejs', 'graphql', 'phoenix', 'postgres', 'heroku'],
						secondary: ['webpack', 'sass'],
						services: ['SendGrid', 'Twilio', 'Stripe', 'Sentry/Raven', 'Mixpanel']
					}
				},
				{
					title: 'S4C',
					client: 'Marketbridge',
					description: 'b2b asset management connecting Dropbox, Box, and AWS S3 storage with tagging, search, and user management.',
					techDescription: 'Vue SPA talking to Laravel via REST.',
					date: '2017',
					status: 'MVP private beta',
					role: 'front-end dev',
					tags: {
						primary: ['vuejs', 'laravel', 'postgres', 'heroku'],
						secondary: ['webpack', 'sass'],
						services: ['Dropbox', 'Box', 'aws', 'MailGun', 'Sentry/Raven', 'Mixpanel']
					}
				},
				{
					title: 'EdgewiseRealty.com',
					client: 'Edgewise Realty',
					description: `
						New construction marketplace connecting buyers and sellers from 
						lead-gen through fulfillment (move-in).
					`,
					techDescription: 'Multi-page Vue app calling both GraphQL and REST APIs.',
					date: '2017',
					status: 'active',
					role: 'CTO (full-stack dev), creative & marketing director',
					tags: {
						primary: ['vuejs', 'graphql', 'symfony', 'mysql', 'aws'],
						secondary: ['webpack', 'sass'],
						services: ['Stripe', 'Mandrill', 'Twilio', 'Slack', 'Sentry/Raven', 'Mixpanel', 'GetStream']
					}
				},
				{
					title: 'D2Groups.com',
					client: 'D2 Groups',
					description: '...',
					techDescription: '...',
					date: '2016',
					status: 'active, unmaintained',
					role: 'front-end dev',
					tags: {
						primary: ['backbonejs', 'drupal', 'mysql'],
						secondary: ['sass']
					}
				},
				{
					title: 'HTHWorldwide.com',
					client: 'HTH Worldwide',
					description: '...',
					techDescription: '...',
					date: '2015',
					status: 'active, unmaintained',
					role: 'full-stack dev, creative director',
					tags: {
						primary: ['backbonejs', 'drupal', 'mysql', 'aws'],
						secondary: ['sass']
					}
				},
				{
					title: 'Visit System',
					client: 'ARI',
					date: '2015',
					status: 'end-of-life',
					role: 'full-stack dev',
					description: '...',
					techDescription: '...',
					tags: {
						primary: ['backbonejs', 'drupal', 'mysql', 'aws'],
						secondary: ['sass']
					}
				},
				{
					title: 'Video Center',
					client: 'GeoBlue',
					date: '2015',
					status: 'retired',
					description: '...',
					techDescription: '...',
					role: 'full-stack dev, creative director',
					tags: {
						primary: ['backbonejs', 'drupal', 'mysql', 'aws'],
						secondary: ['sass']
					}
				},
				{
					title: 'Presentation Platform',
					client: 'ARAMARK Education',
					date: '2014',
					status: 'retired',
					description: '...',
					techDescription: '...',
					role: 'full-stack dev, creative director',
					tags: {
						primary: ['backbonejs', 'drupal', 'mysql', 'air', 'aws'],
						secondary: ['sass']
					}
				},
				{
					title: 'Wall Street Journal',
					client: 'Wall Street Journal',
					date: '2010',
					status: 'unknown',
					description: '...',
					techDescription: '...',
					role: 'front-end dev',
					tags: {
						primary: [],
						secondary: []
					}
				},
				{
					title: 'Lincoln Financial',
					client: 'Lincoln Financial',
					date: '2010',
					description: 'Intranet UX/UI consultant.',
					techDescription: '...',
					status: 'unknown',
					tags: {
						primary: [],
						secondary: []
					}
				},
				{
					title: 'Dow Jones',
					client: 'Dow Jones',
					date: '2009',
					description: 'Consultant.  Mobile and mobile web UX/UI best practices, emerging trends, and optimization.',
					techDescription: '...',
					status: 'unknown',
					tags: {
						primary: [],
						secondary: []
					}
				}
			]
		}
	},
	mounted () {
		this.$store.state.backgroundDataset = 2
	}
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.work-page{
	text-align: right;
	padding-right: $blh*2;
	padding-bottom: $blh*4;

	@include bpXs{
		padding-left: $blh;
		padding-right: $blh;
	}

	> header{
		h1{
			margin-top: 0px;
			padding-top: $blh;
		}
	}

	.projects{
		text-align: left;
	}

	.project{
		margin-top: $blh*2;

		&:first-child{ margin-top: 0px;	}
	}
}
</style>