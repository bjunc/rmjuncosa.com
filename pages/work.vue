<template>
	<div class="work-page">
		<h1>Work</h1>
		<nuxt-link to="/">back</nuxt-link>
	</div>
</template>
<script>
export default {

	mounted () {
		this.$store.state.backgroundDataset = 1
	}
}
</script>
<style lang="scss">
.work-page{
	text-align: right;
}
</style>