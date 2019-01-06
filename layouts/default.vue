<template>
  <div class="layout" :class="`route--${$route.name}`">
    <GeoBackground />
    <header>
      <div class="greeting">
        <h1><nuxt-link to="/">Robert M. Juncosa</nuxt-link></h1>
        <!-- <label>Creative Technologist</label> -->
        <div class="contacts">
          <a class="contact contact--email" href="mailto:bobbyjuncosa@gmail.com"></a>
          <a class="contact contact--github" href="https://github.com/bjunc" target="_blank"></a>
          <a class="contact contact--medium" href="https://medium.com/@bobbyjuncosa" target="_blank"></a>
          <a class="contact contact--linkedin" href="https://www.linkedin.com/in/bobbyjuncosa/" target="_blank"></a>
          <a class="contact contact--location" href="https://www.google.com/maps/place/Brickell,+Miami,+FL/@25.7592852,-80.2116203,14z/data=!3m1!4b1!4m5!3m4!1s0x88d9b680b32f18ad:0x4ad3029ff324f4d5!8m2!3d25.7601793!4d-80.1958755" target="_blank"></a>
        </div>
        <nav> 
          <nuxt-link to="/work">Work</nuxt-link>
          <nuxt-link to="/experience">Experience</nuxt-link>
        </nav>
      </div>
    </header>
    <main>
      <nuxt class="page" />
    </main>
  </div>
</template>
<script>
import GeoBackground from '~/components/GeoBackground'
export default {
  components: { GeoBackground }
}
</script>
<style lang="scss">
#__nuxt{ overflow-x: hidden; max-width: 100%; }

.layout{
  &.route--index nav a{ color: $lime; }
  &.route--work nav a{ color: $orange; }
  &.route--experience nav a{ color: $cyan; } 
}

.layout{
  & > header{
    @include padding(0px $blh * 2 $blh);
    @include border-box;
    height: $blh * 12;
    text-align: right;
    display: inline-block;
    width: 100%;

    @include bpXs{ @include padding(null $blh); }

    h1{
      @include bpXs{ @include vertical-rhythm(2, 1.75, 1, 1.5); }
      a{ color: white; padding: 0px; }
    }

    h1 + label{
      display: block;
      margin-top: $blh * -1;
      font-weight: 200;
      margin-bottom: $blh;
      color: rgba(white, 0.7);
      letter-spacing: 0.05em;
    }

    nav a{ display: inline-block; transition: color 1s $ease-in-out-quad; text-transform: uppercase; font-weight: 200; letter-spacing: 0.05em; }
    nav a:after{ margin-top: $blh * 0.25; display: block; width: 100%; height: 1px; background: rgba(white, 0.75); content: ''; transform: scaleX(0); transition: transform 0.3s $ease-out-cubic; }
    nav a:hover:after{ transform: scaleX(0.25); }
    nav a.nuxt-link-active:after{ transform: scaleX(1); }

    .contacts{
      display: flex;
      margin-bottom: $blh;
      justify-content: flex-end;

      .contact{
        &:before{ color: rgba(white, 0.4); font-size: 25px; }

        &--email{ &:before{ @include FontAwesome($fa-var-envelope); font-size: 20px; } }
        &--github{ &:before{ @include position(relative, 1px null null null); @include FontAwesome($fa-var-github); font-size: 22px; } }
        &--location{ &:before{ @include FontAwesome($fa-var-map-marker); font-size: 21px; } }
        &--linkedin{ &:before{ @include FontAwesome($fa-var-linkedin); font-size: 21px; } }
        &--medium{ &:before{ @include FontAwesome($fa-var-medium); font-size: 21px; } }
      }
    }
  }
}

.page{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

main{
  background-color: white;
  flex-grow: 1;
  color: $gray_z4;
  box-shadow: 0px 0px 40px 1px rgba(black, 0.15);
  margin: 0px auto $blh * 3;
  width: $breakpoint_md;
  max-width: 100%;
}
</style>
