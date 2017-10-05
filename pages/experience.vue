<template>
	<div class="experience-page">
		<h1>Experience</h1>
		<nuxt-link to="/">back</nuxt-link>
	</div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap'
export default {
	transition: {
		enter (el, done) {
			TweenMax.staggerFromTo(document.querySelectorAll('svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut }, 0.1)
		},
		leave (el, done) {
			TweenMax.staggerTo(document.querySelectorAll('svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'none' }, 0.05, done)
		}
	},
	mounted () {
		this.$store.state.backgroundDataset = 3
	}
}
</script>
<style lang="scss">
.experience-page{
	text-align: right;
}
</style>