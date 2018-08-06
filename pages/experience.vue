<template>
  <div class="experience-page">
    <ul class="experiences">
      <Experience v-for="(experience, index) in experiences" :experience="experience" :key="index" />
    </ul>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap'
import experiences from '~/store/experiences'
import Experience from '~/components/Experience'
export default {
  transition: {
    enter (el, done) {
      TweenMax.staggerFromTo(document.querySelectorAll('svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut, overwrite: 'all' }, 0.1)
    },
    leave (el, done) {
      TweenMax.staggerTo(document.querySelectorAll('svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'all' }, 0.05, done)
    }
  },
  components: { Experience },
  data () {
    return { experiences }
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
  @include padding($blh $blh $blh * 4);

	> header{
    margin-bottom: $blh * 2;

		h1{
			margin-top: 0px;
			padding-top: $blh;
		}
	}

	.experiences{ text-align: left; width: $breakpoint_sm; max-width: 100%; @include margin(null auto); }

	.experience{
		margin-top: $blh;

    @include bpXs{ margin-top: $blh; }
		&:first-child{ margin-top: 0px;	}
	}
}
</style>
