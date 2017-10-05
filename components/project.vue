<template>
	<li class="project">
		<h3>{{ project.title }}</h3>
		<h4 class="project__client">
			<span v-if="project.date">{{ project.date }} / </span>
			<span v-if="project.client">{{ project.client }}</span>
		</h4>
		<div class="project__description"><p>{{ project.description }}</p></div>
		<div class="project__technology">
			<div class="project__tech-description">
				<p>{{ project.techDescription }}</p>
			</div>
			<ul class="tags">
				<li class="tag" v-for="tag in project.tags.primary">{{ tag }}</li>
			</ul>
			<ul class="tags">
				<li class="tag" v-for="tag in project.tags.secondary">{{ tag }}</li>
			</ul>
			<ul class="tags">
				<li class="tag" v-for="tag in project.tags.services">{{ tag }}</li>
			</ul>
		</div>
	</li>
</template>
<script>
export default {
	props: ['project']
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.project{
	position: relative;
	z-index: 2;
	padding-left: $blh*3;
	margin-left: $blh*2;

	&__description, &__technology{
		color: $gray-z6;

		p{
			width: 600px;
			max-width: 100%;
		}
	}

	&__client{
		margin-bottom: $blh;
	}

	&__tech-description{
		margin-bottom: $blh*2;
	}

	&__technology{
		.tags{
			display: flex;
			margin-top: $blh;

			.tag{
				@include padding(null $blh);
			}
		}
	}
}
</style>