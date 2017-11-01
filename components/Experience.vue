<template>
	<li class="experience">
    <h4 class="experience__date">
			<span v-if="experience.date">{{ experience.date }}</span>
		</h4>
		<h3 class="experience__title">{{ experience.title }}</h3>
    <h4 class="experience__company">
			<span v-if="experience.company">{{ experience.company }}</span>
		</h4>
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
	width: calc(70.75% - 14.65%);
	position: relative;
	z-index: 2;
	padding-top: $blh*1;
  padding-right: $blh;
	padding-left: $blh*2;
	padding-bottom: $blh*3;
	margin-left: 14.65%;
	border: 1px solid rgba($gray-z4, 0.6);
	background-color: rgba(darken($gray-z3, 3%), 0.8);

  @include bpLg{
		width: 80%;
	}

	@include bpXs{
		margin-left: 0px;
		width: 100%;
		padding-left: $blh;
	}

  &__date{
    @include vertical-rhythm(3, 2, 1, 1);
    font-weight: 300;
    text-transform: uppercase;
		color: $teal;
    letter-spacing: -0.04em;
    white-space: nowrap;

    @include bpXs{
		  @include vertical-rhythm(2, 2, 1, 1);
	  }
	}

	&__title{
		@include vertical-rhythm(2, 2, 0, 0);
		font-weight: 200;
		color: $gray-z7;

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