<template>
	<div class="experience-page">
		<h1>Experience</h1>
		<nuxt-link to="/">back</nuxt-link>
	</div>
</template>
<script>
export default {
	mounted () {
		this.$store.state.backgroundDataset = 2
	}
}
</script>
<style lang="scss">
.experience-page{
	text-align: right;
}
</style>