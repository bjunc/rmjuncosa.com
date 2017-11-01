<template>
  <div class="work-page">
    <header>
      <h1>Work</h1>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/experience">experience</nuxt-link>
    </header>
    <ul class="projects">
      <Project v-for="project in projects" :project="project" :key="project.title" />
    </ul>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap'
import Project from '~/components/Project'
import projects from '~/store/projects'
export default {
  transition: {
    enter (el, done) {
      TweenMax.staggerFromTo(document.querySelectorAll('.geo-background svg path'), 3, { opacity: 0 }, { opacity: 1, ease: Cubic.easeOut, overwrite: 'all' }, 0.1)
    },
    leave (el, done) {
      TweenMax.staggerTo(document.querySelectorAll('.geo-background svg path'), 0.1, { opacity: 0, ease: Cubic.easeOut, overwrite: 'all' }, 0.05, done)
    }
  },
  components: { Project },
  data () {
    return { projects }
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
    margin-bottom: $blh*2;
    
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
