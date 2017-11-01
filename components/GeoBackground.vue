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
						{
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
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.geo-background{
	@include position(fixed, 0px 0px 0px 0px);
	background: linear-gradient(160deg, $gray-z3, darken($gray-z3, 2%));
	z-index: -1;

	svg{
		@include size(100%);
		opacity: 0.6;

		@include bpSm{
			transform: translateX(-100%) scaleX(3);
		}

		path{
			fill: none;
			stroke: $cyan;
			stroke-width: 1;

			&.layer1{
				stroke-opacity: 0.5;
			}
			&.layer2{
				stroke-opacity: 0.25;
				color: $indigo;
			}
			&.layer3{
				stroke-opacity: 0.1;
			}

			&.grid-path{
				stroke-width: 1;
				stroke: rgba($teal, 0.5);
			}
		}
	}
}
</style>