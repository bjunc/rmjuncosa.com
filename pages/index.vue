<template>
  <div class="index-page">
    <div class="polymath">
      <span class="polymath__title">polymath [noun]</span>
      <span class="polymath__definition">
        a person whose expertise spans a significant number of different subject areas;
        such a person is known to draw on complex bodies of knowledge to solve specific problems
      </span>
    </div>
	</div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap'
export default {
  transition: {
    enter (el, done) {
      TweenMax.staggerFrom(el.querySelectorAll('.polymath span'), 0.3, { delay: 0.15, opacity: 0, y: '30px', overwrite: 'all', ease: Cubic.easeOut }, 0.1, done)
      TweenMax.staggerFromTo(document.querySelectorAll('.geo-background svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut, overwrite: 'all' }, 0.1)
    },
    leave (el, done) {
      TweenMax.staggerTo(document.querySelectorAll('.geo-background svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'all' }, 0.05, done)
    }
  },
  mounted () {
    this.$store.state.backgroundDataset = 0
  }
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.page-enter-active, .page-leave-active {
	&.index-page{ .polymath{ transition: all 0.2s $ease-out-quart; } }
}
.page-enter, .page-leave-to {
	&.index-page{
		.polymath{
			// transform: translateY(150px);
			// opacity: 0;
		}
	}
}

.index-page{
	.polymath{
		@include padding($blh null null 10%);
		font-weight: 200;
		margin-top: $blh * 2;

    @include bpXs{ display: none; }

		span{ display: block; }

		&__title{
      @include vertical-rhythm(4, 4, 1, 1);
			font-style: italic;
			font-weight: 400;
      color: $gray_z6;

      @include bpXs{
        @include vertical-rhythm(2, 2, 1, 1);
      }
		}

		&__definition{
			font-size: type-scale(1);
			line-height: $blh * 2;
			max-width: 700px;
		}
	}
}
</style>
