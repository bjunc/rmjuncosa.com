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
			TweenMax.staggerFromTo(document.querySelectorAll('svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut }, 0.1)
		},
		leave (el, done) {
			TweenMax.staggerTo(document.querySelectorAll('svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'none' }, 0.05, done)
		}
	},
	components: { Project },
	data () {
		return {
			projects: [
				{
					title: 'Core22',
					description: 'Wellness app, with ecommerce',
					techDescription: 'Isopmorphic JS (Universal JS / SSR) talking to Phoenix via GraphQL',
					date: '2017',
					tags: {
						primary: ['Phoenix', 'Nuxt/Vue.js', 'GraphQL', 'Postgres', 'Heroku'],
						secondary: ['Webpack', 'SASS'],
						services: ['SendGrid', 'Twilio', 'Stripe', 'Sentry/Raven', 'Mixpanel']
					}
				},
				{
					title: 'S4C',
					client: 'Marketbridge',
					description: 'Asset management portal connecting Dropbox, Box, and AWS S3 storage with tagging, search, and user management.',
					techDescription: 'Vue SPA talking to Laravel via REST',
					date: '2017',
					tags: {
						primary: ['Laravel', 'Vue.js', 'Postgres', 'Heroku'],
						secondary: ['Webpack', 'SASS'],
						services: ['Dropbox', 'Box', 'AWS S3', 'MailGun', 'Sentry/Raven', 'Mixpanel']
					}
				},
				{
					title: 'EdgewiseRealty.com',
					client: 'Edgewise Realty',
					description: 'New construction marketplace',
					techDescription: '...',
					date: '2017',
					tags: {
						primary: ['Symfony', 'Vue.js', 'GraphQL', 'EC2/EBS/S3'],
						secondary: ['Webpack', 'SASS'],
						services: ['Stripe', 'Mandrill', 'Twilio', 'Slack', 'Sentry/Raven', 'Mixpanel', 'GetStream']
					}
				},
				{
					title: 'D2Groups.com',
					client: 'D2 Groups',
					description: '...',
					techDescription: '...',
					date: '2016',
					tags: {
						primary: ['Drupal', 'Backbone.js'],
						secondary: ['SASS']
					}
				},
				{
					title: 'HTHWorldwide.com',
					client: 'HTH Worldwide',
					description: '...',
					techDescription: '...',
					date: '2015',
					tags: {
						primary: ['Drupal', 'Backbone.js', 'EC2'],
						secondary: ['SASS']
					}
				},
				{
					title: 'Visit System',
					client: 'ARI',
					date: '2015',
					description: '...',
					techDescription: '...',
					tags: {
						primary: ['Drupal', 'Backbone.js', 'EC2'],
						secondary: ['SASS']
					}
				},
				{
					title: 'Video Center',
					client: 'GeoBlue',
					date: '2015',
					description: '...',
					techDescription: '...',
					tags: {
						primary: ['Drupal', 'Backbone.js', 'EC2/S3'],
						secondary: ['SASS']
					}
				},
				{
					title: 'Presentation Platform',
					client: 'ARAMARK Education',
					date: '2014',
					description: '...',
					techDescription: '...',
					tags: {
						primary: ['Drupal', 'Backbone.js', 'EC2/S3'],
						secondary: ['SASS']
					}
				},
				{
					title: 'Wall Street Journal',
					client: 'Wall Street Journal',
					date: '2010',
					description: '...',
					techDescription: '...',
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
					tags: {
						primary: [],
						secondary: []
					}
				}
			]
		}
	},
	mounted () {
		this.$store.state.backgroundDataset = 1
	}
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.work-page{
	text-align: right;

	> header{
		// background-color: $gray-z3;
		
		h1{
			margin-top: 0px;
			padding-top: $blh;
		}
	}

	&:before, &:after{
		content: '';
		position: fixed;
		/* trick to remove some annoying flickering on webkit browsers */
		width: $blh*5;
		left: $blh*2;
		// transform: translateX(-50%);
		height: 50vh;
		z-index: -1;
	}
	&:before{
		top: 0px;
		// background-color: $blue;
		transition: all 0.8s;
	}
	&:after{
		top: 50vh;
		// background-color: $gray-z4;
		height: calc(100vh - #{$blh*10});
	}

	.projects{
		text-align: left;

		&:after{
			content: '';
			// background-color: $gray-z3;
			height: 50vh;
			display: block;
		}
	}

	.project{
		margin-top: $blh*4;

		&:first-child{ margin-top: 0px;	}

		h3{
			@include vertical-rhythm(2);
			color: white;
		}
	}
}
</style>