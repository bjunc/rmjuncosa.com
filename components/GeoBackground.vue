<template>
	<div class="geo-background">
		<svg viewBox="0 0 100 100" preserveAspectRatio="none">
			<path 
				v-for="path in currentDataset.paths" 
				:d="buildPath(path)" 
				vector-effect="non-scaling-stroke"
				:class="`layer${path.layer}`" />
			<path 
				v-for="path in currentDataset.grid" 
				:d="buildPath(path)" 
				vector-effect="non-scaling-stroke"
				:class="[`grid-path layer${path.layer}`, `layer${path.layer}`]" />
		</svg>
	</div>
</template>
<script>
export default {
	data () {
		return {
			datasets: [
				{
					grid: [
						// Vertical
						{
							m: { x: 14.65, y: 0 },
							q: { x: 14.65, y: 0 },
							end: { x: 14.65, y: 100 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 0 },
							l: { x: 29.25, y: 100 },
							layer: 1
						},
						{
							m: { x: 50, y: 0 },
							q: { x: 50, y: 0 },
							end: { x: 50, y: 100 },
							layer: 1
						},
						{
							m: { x: 64.75, y: 0 },
							q: { x: 64.75, y: 0 },
							end: { x: 64.75, y: 100 },
							layer: 1
						},
						// Horizontal
						{
							m: { x: 0, y: 29.25 },
							q: { x: 0, y: 29.25 },
							end: { x: 100, y: 29.25 },
							layer: 1
						},
						{
							m: { x: 0, y: 50 },
							q: { x: 0, y: 50 },
							end: { x: 100, y: 50 },
							layer: 1
						}
					],
					paths: [
						{
							m: { x: 0, y: 100 },
							a: { rx: 50, ry: 110, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 29.25, y: 0 },
							layer: 1
						},
						{
							m: { x: 29.25, y: 100 },
							a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 0 },
							layer: 1
						},
						{
							m: { x: 50, y: 100 },
							a: { rx: 50, ry: 100 - 29.25, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 29.25 },
							layer: 1
						},
						{
							m: { x: 29.25, y: 0 },
							a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 100, y: 100 },
							layer: 3
						},
						{
							m: { x: 50, y: 0 },
							a: { rx: 50, ry: 75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 64.75, y: 50 },
							layer: 2
						},
						{
							m: { x: 64.75, y: 100 },
							a: { rx: 100 - 64.75, ry: 50, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 50 },
							layer: 3
						},
						// diag
						{
							m: { x: 29.25, y: 0 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 29.25, y: 100 },
							l: { x: 100, y: 0 },
							layer: 2
						},
						{
							m: { x: 50, y: 100 },
							l: { x: 100, y: 29.25 },
							layer: 2
						},
						{
							m: { x: 64.75, y: 100 },
							l: { x: 100, y: 50 },
							layer: 3
						}
					]
				},
				{
					grid: [
						// Vertical
						{
							m: { x: 14.65, y: 0 },
							q: { x: 14.65, y: 0 },
							end: { x: 14.65, y: 100 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 0 },
							q: { x: 29.25, y: 0 },
							end: { x: 29.25, y: 100 },
							layer: 1
						},
						{
							m: { x: 50, y: 0 },
							q: { x: 50, y: 0 },
							end: { x: 50, y: 100 },
							layer: 1
						},
						{
							m: { x: 70.75, y: 0 },
							q: { x: 70.75, y: 0 },
							end: { x: 70.75, y: 100 },
							layer: 2
						},
						// Horizontal
						{
							m: { x: 0, y: 29.25 },
							q: { x: 0, y: 29.25 },
							end: { x: 100, y: 29.25 },
							layer: 1
						},
						{
							m: { x: 0, y: 50 },
							q: { x: 0, y: 50 },
							end: { x: 100, y: 50 },
							layer: 1
						}
					],
					paths: [
						{
							m: { x: 0, y: 50 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 0, y: 29.25 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 0, y: 0 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 29.25, y: 0 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 50, y: 0 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 70.75, y: 0 },
							l: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 29.25, y: 100 },
							l: { x: 100, y: 0 },
							layer: 2
						},
						// bezier
						{
							m: { x: 29.25, y: 100 },
							a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 0 },
							layer: 2
						},
						{
							m: { x: 50, y: 100 },
							a: { rx: 50, ry: 100 - 29.25, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 29.25 },
							layer: 2
						}
					]
				},
				{
					grid: [
						// Vertical
						{
							m: { x: 14.65, y: 0 },
							l: { x: 14.65, y: 100 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 0 },
							l: { x: 29.25, y: 100 },
							layer: 1
						},
						{
							m: { x: 50, y: 0 },
							l: { x: 50, y: 100 },
							layer: 1
						},
						{
							m: { x: 85.35, y: 0 },
							l: { x: 85.35, y: 100 },
							layer: 2
						},
						// Horizontal
						{
							m: { x: 0, y: 50 },
							q: { x: 0, y: 50 },
							end: { x: 100, y: 50 },
							layer: 2
						}
					],
					paths: [
						{
							m: { x: 29.25, y: 0 },
							q: { x: 29.25, y: 0 },
							end: { x: 100, y: 100 },
							layer: 1
						},
						{
							m: { x: 29.25, y: 100 },
							q: { x: 29.25, y: 100 },
							end: { x: 100, y: 0 },
							layer: 2
						},
						// arcs
						{
							m: { x: 0, y: 0 },
							a: { rx: 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 29.25, y: 100 },
							layer: 2
						},
						{
							m: { x: 0, y: 100 },
							a: { rx: 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 29.25, y: 0 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 0 },
							a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 100, y: 100 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 100 },
							a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 0 },
							layer: 1
						}
					]
				},
				{
					grid: [
						// Vertical
						{
							m: { x: 14.65, y: 0 },
							l: { x: 14.65, y: 100 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 0 },
							q: { x: 29.25, y: 0 },
							end: { x: 29.25, y: 100 },
							layer: 1
						},
						{
							m: { x: 50, y: 0 },
							q: { x: 50, y: 0 },
							end: { x: 50, y: 100 },
							layer: 1
						},
						{
							m: { x: 70.75, y: 0 },
							l: { x: 70.75, y: 100 },
							layer: 1
						},
						{
							m: { x: 85.35, y: 0 },
							l: { x: 85.35, y: 100 },
							layer: 2
						},
						// Horizontal
						{
							m: { x: 0, y: 50 },
							q: { x: 0, y: 50 },
							end: { x: 100, y: 50 },
							layer: 1
						},
						{
							m: { x: 0, y: 29.25 },
							l: { x: 100, y: 29.25 },
							layer: 1
						},
						{
							m: { x: 0, y: 70.75 },
							l: { x: 100, y: 70.75 },
							layer: 1
						}
					],
					paths: [
						{
							m: { x: 0, y: 0 },
							l: { x: 100, y: 100 },
							layer: 2
						},
						{
							m: { x: 29.25, y: 0 },
							l: { x: 100, y: 100 },
							layer: 2
						},
						{
							m: { x: 0, y: 29.25 },
							l: { x: 100, y: 100 },
							layer: 2
						},
						{
							m: { x: 0, y: 70.75 },
							l: { x: 50, y: 0 },
							layer: 2
						},
						{
							m: { x: 0, y: 29.25 },
							l: { x: 50, y: 100 },
							layer: 2
						},
						{
							m: { x: 100, y: 0 },
							l: { x: 0, y: 70.75 },
							layer: 2
						},
						{
							m: { x: 100, y: 0 },
							l: { x: 0, y: 100 },
							layer: 2
						},
						{
							m: { x: 100, y: 0 },
							l: { x: 29.25, y: 100 },
							layer: 2
						},
						// arcs
						{
							m: { x: 0, y: 70.75 },
							a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 50, y: 0 },
							layer: 1
						},
						{
							m: { x: 50, y: 0 },
							a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 100, y: 70.75 },
							layer: 1
						},
						{
							m: { x: 100, y: 29.25 },
							a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 50, y: 100 },
							layer: 1
						},
						{
							m: { x: 50, y: 100 },
							a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 0, y: 29.25 },
							layer: 1
						}
						// {
						// 	m: { x: 0, y: 100 },
						// 	a: { rx: 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 29.25, y: 0 },
						// 	layer: 2
						// },
						// {
						// 	m: { x: 29.25, y: 0 },
						// 	a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 100, y: 100 },
						// 	layer: 2
						// },
						// {
						// 	m: { x: 29.25, y: 100 },
						// 	a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 0 },
						// 	layer: 1
						// }
					]
				}
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
.geo-background{
	@include position(fixed, 0px 0px 0px 0px);
	background: linear-gradient(160deg, $gray-z3, darken($gray-z3, 6%));
	z-index: -1;

	svg{
		@include size(100%);
		opacity: 0.6;

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