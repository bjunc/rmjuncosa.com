<template>
  <div class="work-page">
    <ul class="projects">
      <Project v-for="project in projects" :project="project" :key="project.title" />
    </ul>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import { TweenMax, Quad, Cubic, Quart } from 'gsap/TweenMax'
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
.work-page{
  text-align: right;
  padding-top: $blh;
	padding-bottom: $blh * 4;

	@include bpXs{ padding-left: $blh; padding-right: $blh; }

	> header{ margin-bottom: $blh * 2; }
  > header h1{ margin-top: 0px; padding-top: $blh; }
	.projects{ @include margin(null auto); text-align: left; width: $breakpoint_md; max-width: 100%; }
	.project{ margin-top: $blh; }
}
</style>
