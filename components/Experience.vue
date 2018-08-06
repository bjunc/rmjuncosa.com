<template>
	<li class="experience">
    <h4 class="experience__date">
			<span v-if="experience.date">{{ experience.date }}</span>
		</h4>
    <h4 class="experience__company">
			<span v-if="experience.company">{{ experience.company }}</span>
		</h4>
		<h3 class="experience__title">{{ experience.title }}</h3>
	</li>
</template>
<script>
export default {
  props: ['experience']
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.experience{
	@include border-box;
	position: relative;
	z-index: 2;
  padding-right: $blh;
	padding-left: $blh * 2;
	padding-bottom: $blh * 2;
	border-bottom: 1px solid $gray_z6;

	@include bpXs{ padding-left: $blh; }

  &__date{
    @include vertical-rhythm(2, 3, 2, 0);
    font-weight: 300;
    text-transform: uppercase;
		color: $gray_z3;
    letter-spacing: -0.02em;
    white-space: nowrap;

    @include bpXs{
		  @include vertical-rhythm(2, 2, 1, 1);
	  }
	}

	&__title{
		@include vertical-rhythm(1, 1, 0, 1);
		font-weight: 200;
		color: $gray_z6;

		@include bpXs{
			@include vertical-rhythm(1, 2, 0, 0);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
		}
	}

	&__company{
		@include vertical-rhythm(1, 2, 0, 0);
    @include bpXs{
			@include vertical-rhythm(1, 1, 0);
		}
	}
}
</style>