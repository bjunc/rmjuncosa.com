<template>
	<div>
		<GeoBackground />
		<nuxt/>
	</div>
</template>
<script>
import GeoBackground from '~/components/GeoBackground'
export default {
	components: { GeoBackground }
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
#__nuxt{
	overflow-x: hidden;
	max-width: 100%;
}
</style>
