<template>
	<div class="index-page">
		<div class="greeting">
			<h1>Robert M. Juncosa</h1>
			<nuxt-link to="/work">Work</nuxt-link>
			<nuxt-link to="/experience">Experience</nuxt-link>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.index-page{
	.greeting{
		// padding-top: 55vh;
		// padding-left: 55vw;
		color: white;
		text-align: right;
	}
}
</style>
