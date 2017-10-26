<template>
	<li class="project">
		<h3>{{ project.title }}</h3>
		<h4 class="project__client">
			<span v-if="project.date">{{ project.date }} / </span>
			<span v-if="project.client">{{ project.client }}</span>
		</h4>
		<h4 class="project__status">status: {{ project.status }}</h4>
		<h4 v-if="project.role" class="project__role">role: {{ project.role }}</h4>
		<div class="project__description"><p>{{ project.description }}</p></div>
		<div class="project__technology">
			<div class="project__tech-description">
				<p>{{ project.techDescription }}</p>
			</div>
			<ul class="tags tags--primary">
				<li class="tag" v-for="(tag, index) in project.tags.primary" :key="index">
					<AdobeAirIcon v-if="tag === 'air'" />
					<AwsIcon v-else-if="tag === 'aws'" />
					<BackboneIcon v-else-if="tag === 'backbonejs'" />
					<DrupalIcon v-else-if="tag === 'drupal'" />
          <FlashIcon v-else-if="tag === 'flash'" />
					<GraphQlIcon v-else-if="tag === 'graphql'" />
					<HerokuIcon v-else-if="tag === 'heroku'" />
					<SymfonyIcon v-else-if="tag === 'symfony'" />
					<LaravelIcon v-else-if="tag === 'laravel'" />
					<MySqlIcon v-else-if="tag === 'mysql'" />
					<PhoenixIcon v-else-if="tag === 'phoenix'" />
					<PostgresIcon v-else-if="tag === 'postgres'" />
					<SassIcon v-else-if="tag === 'sass'" />
					<VueIcon v-else-if="tag === 'vuejs'" />
					<WebpackIcon v-else-if="tag === 'webpack'" />
					<span v-else>{{ tag }}</span>
				</li>
			</ul>
			<ul class="tags tags--secondary">
				<li class="tag" v-for="(tag, index) in project.tags.secondary" :key="index">
					<AdobeAirIcon v-if="tag === 'air'" />
					<AwsIcon v-else-if="tag === 'aws'" />
					<BackboneIcon v-else-if="tag === 'backbonejs'" />
					<DrupalIcon v-else-if="tag === 'drupal'" />
          <FlashIcon v-else-if="tag === 'flash'" />
					<GraphQlIcon v-else-if="tag === 'graphql'" />
					<HerokuIcon v-else-if="tag === 'heroku'" />
					<SymfonyIcon v-else-if="tag === 'symfony'" />
					<LaravelIcon v-else-if="tag === 'laravel'" />
					<MySqlIcon v-else-if="tag === 'mysql'" />
					<PhoenixIcon v-else-if="tag === 'phoenix'" />
					<PostgresIcon v-else-if="tag === 'postgres'" />
					<SassIcon v-else-if="tag === 'sass'" />
					<VueIcon v-else-if="tag === 'vuejs'" />
					<WebpackIcon v-else-if="tag === 'webpack'" />
					<span v-else>{{ tag }}</span>
				</li>
			</ul>
			<!-- <ul class="tags tags--tertiary">
				<li class="tag" v-for="(tag, index) in project.tags.services" :key="index">{{ tag }}</li>
			</ul> -->
		</div>
	</li>
</template>
<script>
import AdobeAirIcon from '~/components/icons/AdobeAirIcon'
import AwsIcon from '~/components/icons/AwsIcon'
import BackboneIcon from '~/components/icons/BackboneIcon'
import DrupalIcon from '~/components/icons/DrupalIcon'
import FlashIcon from '~/components/icons/FlashIcon'
import GraphQlIcon from '~/components/icons/GraphQlIcon'
import HerokuIcon from '~/components/icons/HerokuIcon'
import LaravelIcon from '~/components/icons/LaravelIcon'
import MySqlIcon from '~/components/icons/MySqlIcon'
import PhoenixIcon from '~/components/icons/PhoenixIcon'
import PostgresIcon from '~/components/icons/PostgresIcon'
import SassIcon from '~/components/icons/SassIcon'
import SymfonyIcon from '~/components/icons/SymfonyIcon'
import VueIcon from '~/components/icons/VueIcon'
import WebpackIcon from '~/components/icons/WebpackIcon'
export default {
	props: ['project'],
	components: { AdobeAirIcon, AwsIcon, BackboneIcon, DrupalIcon, FlashIcon, GraphQlIcon, HerokuIcon, LaravelIcon, MySqlIcon, PhoenixIcon, PostgresIcon, SassIcon, SymfonyIcon, VueIcon, WebpackIcon }
}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
.project{
	@include border-box;
	width: calc(70.75% - 14.65%);
	position: relative;
	z-index: 2;
	padding-top: $blh*1;
	padding-left: $blh*3;
	padding-bottom: $blh*3;
	margin-left: 14.65%;
	border: 1px solid rgba($gray-z4, 0.6);
	background-color: rgba(darken($gray-z3, 3%), 0.8);

	@include bpXs{
		margin-left: 0px;
		width: 100%;
		padding-left: $blh;
	}

	h3{
		@include vertical-rhythm(3, 3);
		font-weight: 200;
		color: $gray-z7;

		@include bpXs{
			@include vertical-rhythm(2, 2);
		}
	}

	&__description{
		margin-bottom: $blh;
	}

	&__client{
		color: $gray-z5;
	}

	&__status{
		margin-top: -$blh;
		margin-bottom: $blh;
		color: $gray-z5;
	}

	&__role{
		color: $gray-z5;
		margin-top: -$blh;
		margin-bottom: $blh;
	}

	$icon_size: 34px;

	.tags{
		&.tags--primary{
			.tag{
				line-height: $icon_size;
				color: $blue;

				.icon path{
					fill: $blue;
				}
			}
		}

		&.tags--secondary{
			.tag{
				line-height: $icon_size;
				color: $cyan;
				.icon path{ fill: $cyan; }
			}
		}

		.tag{
			height: $icon_size;
			// color: $lime;

			.icon{
				@include size($icon_size);

				path{
					// fill: $deep-purple;
				}
			}
		}

		
	}

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
				@include padding(null $blh*0.5);
				font-size: type-scale(0);
				font-weight: 200;
			}
		}
	}
}
</style>