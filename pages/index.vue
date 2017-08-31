<template>
	<div class="index-page">
		<div class="greeting">
			<h1>Robert M. Juncosa</h1>
			<div class="contacts">
				<a class="contact contact--email" href="mailto:bobbyjuncosa@gmail.com"></a>
				<a class="contact contact--github" href="https://github.com/bjunc" target="_blank"></a>
				<a class="contact contact--location" href="https://www.google.com/maps/place/Brickell,+Miami,+FL/@25.7592852,-80.2116203,14z/data=!3m1!4b1!4m5!3m4!1s0x88d9b680b32f18ad:0x4ad3029ff324f4d5!8m2!3d25.7601793!4d-80.1958755" target="_blank"></a>
			</div>
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
	.contacts{
		margin-bottom: $blh;

		.contact{
			&:before{
				color: $green;
			}
			&--email{
				&:before{
					@include FontAwesome($fa-var-envelope);
				}
			}
			&--github{
				&:before{
					@include position(relative, 1px null null null);
					@include FontAwesome($fa-var-github);
					font-size: 1.15em;
				}
			}
			&--location{
				&:before{
					@include FontAwesome($fa-var-map-marker);
					font-size: 1.1em;
				}
			}
		}
	}
}
</style>
