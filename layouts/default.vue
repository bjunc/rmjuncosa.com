<template>
	<div>
		<nuxt/>
	</div>
</template>

<style lang="scss">
@import "~assets/scss/mixins";
body{
	font-family: 'Montserrat', sans-serif;
	color: $gray-z4;
	font-size: $default-font-size;
	line-height: $blh;
	background-color: $gray-z3;
	padding: $blh*2;
}

$h1-font-size: type-scale(3);
$h1-line: $blh;
$h1-lines: 4;
$h1-line-height: $h1-line * $h1-lines;
$h1-margin-top: 2 * $h1-line;
$h1-margin-bottom: 1 * $h1-line;

h1{
	font-size: $h1-font-size;
	line-height: $h1-line-height;
	margin-top: $h1-margin-top;
	margin-bottom: $h1-margin-bottom;
	text-transform: uppercase;
	font-weight: 200;
	color: $gray-z7;
}

$h2-font-size: type-scale(2);
$h2-line: $blh;
$h2-lines: 3;
$h2-line-height: $h2-line * $h2-lines;
$h2-margin-top: 2 * $h2-line;
$h2-margin-bottom: 1 * $h2-line;

h2{
	font-size: $h2-font-size;
	line-height: $h2-line-height;
	margin-top: $h2-margin-top;
	margin-bottom: $h2-margin-bottom;
	text-transform: uppercase;
	font-weight: 200;
	color: $gray-z7;
}

a{
	text-decoration: none;
	color: $primary;
	display: inline-block;
	@include padding(null $blh);
}
</style>
