<template>
  <div class="experience-page">
    <h1>Experience</h1>
    <nuxt-link to="/">back</nuxt-link>
    <nuxt-link to="/work">work</nuxt-link>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap'
export default {
  transition: {
    enter (el, done) {
      TweenMax.staggerFromTo(document.querySelectorAll('svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut, overwrite: 'all' }, 0.1)
    },
    leave (el, done) {
      TweenMax.staggerTo(document.querySelectorAll('svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'all' }, 0.05, done)
    }
  },
  mounted () {
    this.$store.state.backgroundDataset = 3
  }
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.experience-page{
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