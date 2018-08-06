<template>
	<div class="geo-background">
		<svg viewBox="0 0 100 100" preserveAspectRatio="none">
			<path 
				v-for="(path, index) in currentDataset.paths" 
				:key="index"
				:d="buildPath(path)" 
				vector-effect="non-scaling-stroke"
				:class="`layer${path.layer}`" />
			<path 
				v-for="(path, index) in currentDataset.grid" 
				:key="index"
				:d="buildPath(path)" 
				vector-effect="non-scaling-stroke"
				:class="[`grid-path layer${path.layer}`, `layer${path.layer}`]" />
		</svg>
	</div>
</template>
<script>
import pattern1 from '~/store/pattern1'
import pattern2 from '~/store/pattern2'
import pattern3 from '~/store/pattern3'
import pattern4 from '~/store/pattern4'
export default {
  data () {
    return {
      datasets: [
        pattern1,
        pattern2,
        pattern3,
        pattern4
      ]
    }
  },
  computed: {
    currentDataset () {
      return this.datasets[this.$store.state.backgroundDataset]
    }
  },
  methods: {
    buildPath (data) {
      let description = []
      if (data.m) description.push(`M${data.m.x},${data.m.y}`)
      if (data.q) description.push(`Q ${data.q.x} ${data.q.y}`)
      if (data.a) description.push(`A ${data.a.rx} ${data.a.ry} ${data.a.xAxisRotation} ${data.a.largeArcFlag} ${data.a.sweepFlag} ${data.a.x} ${data.a.y}`)
      if (data.end) description.push(`${data.end.x},${data.end.y}`)
      if (data.l) description.push(`L ${data.l.x} ${data.l.y}`)
      return description
    }
  }
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.layout{
  &.route--experience .geo-background{
    background-color: darken($teal, 6%);
    svg path{ stroke: rgba($cyan, 0.85); }
  }

  &.route--work .geo-background{
    background-color: darken($blue, 10%);
    svg path{ stroke: rgba($yellow, 0.7); }
  }
  
  &.route--index .geo-background{
    background-color: darken($deep_purple, 5%);
    svg path{ stroke: rgba($cyan, 0.8); }
  }
}

.geo-background{
	@include position(fixed, 0px 0px $blh * 14 0px);
  transition: background 2.0s $ease-in-out-quad;
  background: $red;
	z-index: -1;

	svg{
		@include size(100%);
    opacity: 0.8;

		@include bpSm{
			transform: translateX(-100%) scaleX(3);
		}

		path{
			fill: none;
			stroke: $cyan;
      stroke-width: 1;
      transition: stroke 2.0s $ease-out-quad;

			&.layer1{ stroke-opacity: 0.5; }
			&.layer2{ stroke-opacity: 0.3; color: white; }
			&.layer3{ stroke-opacity: 0.1; }
			&.grid-path{ stroke-width: 1; stroke: rgba(white, 0.5); }
		}
	}
}
</style>