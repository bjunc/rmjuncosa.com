<template>
  <div class="index-page">
		<div class="greeting">
			<h1>Robert M. Juncosa</h1>
			<label>Creative Technologist</label>
			<div class="contacts">
				<a class="contact contact--email" href="mailto:bobbyjuncosa@gmail.com"></a>
				<a class="contact contact--github" href="https://github.com/bjunc" target="_blank"></a>
				<a class="contact contact--location" href="https://www.google.com/maps/place/Brickell,+Miami,+FL/@25.7592852,-80.2116203,14z/data=!3m1!4b1!4m5!3m4!1s0x88d9b680b32f18ad:0x4ad3029ff324f4d5!8m2!3d25.7601793!4d-80.1958755" target="_blank"></a>
			</div>
			<nuxt-link to="/work">Work</nuxt-link>
			<nuxt-link to="/experience">Experience</nuxt-link>
		</div>
		<div class="polymath">
			<span class="polymath__title">polymath</span>
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
	&.index-page{
		.polymath{
			transition: all 0.2s $ease-out-quart;		
		}
	}
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
	@include padding(null $blh*2);

  @include bpXs{
    padding-left: 0px;
  }

  h1{
    @include bpXs{
      @include vertical-rhythm(2, 1.75, 1, 1.5);
    }
  }

	h1 + label{
		display: block;
		margin-top: -$blh;
		font-weight: 200;
		margin-bottom: $blh;
		color: $gray-z6;
	}

	.polymath{
		@include padding($blh $blh*2);
		font-weight: 200;
		margin-top: $blh*2;
		color: $gray-z6;

    @include bpXs{ display: none; }

		span{ display: block; }

		&__title{
      @include vertical-rhythm(4, 4, 1, 1);
			font-style: italic;
			color: $lime;

      @include bpXs{
        @include vertical-rhythm(2, 2, 1, 1);
      }
		}
		&__definition{
			font-size: type-scale(1);
			line-height: $blh*2;
			max-width: 700px;
		}
	}
	.greeting{
		color: white;
		text-align: right;
	}
	.contacts{
		margin-bottom: $blh;

		.contact{
			&:before{
				color: $green;
			}
			&--email{
				&:before{
					@include FontAwesome($fa-var-envelope);
				}
			}
			&--github{
				&:before{
					@include position(relative, 1px null null null);
					@include FontAwesome($fa-var-github);
					font-size: 1.15em;
				}
			}
			&--location{
				&:before{
					@include FontAwesome($fa-var-map-marker);
					font-size: 1.1em;
				}
			}
		}
	}
}
</style>
