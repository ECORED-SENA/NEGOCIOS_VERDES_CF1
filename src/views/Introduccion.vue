<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.texto-blanco
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-7
        figure
          img(src='@/assets/curso/introduccion/img01.svg') 

    p.mb-5 La sociedad actual se encuentra en un constante desarrollo de alternativas que le proporcionan mejores oportunidades de desarrollo social, económico y cultural. Del mismo modo, es más consciente de la necesidad de crear alternativas sostenibles que no sólo brinden beneficios económicos, disminuyan el desempleo y la pobreza de un país, sino que también permitan el desarrollo sostenible, factor que implica la conservación y cuidado del medio ambiente, el cual se considera el hogar, entorno y proveedor de recursos vitales para la existencia de los seres vivos.

    .cajon.color-acento-contenido.p-4
      p.mb-0 A través de los años, en Colombia los negocios verdes se han convertido en una importante alternativa para el sector productivo del país, permitiendo que muchas familias encuentren en el desarrollo de productos y servicios sostenibles, el sustento para sus hogares y el de muchos colombianos. Pero ¿en qué consisten los negocios verdes?, para comprender este concepto, es importante realizar un recorrido por los fundamentos, principios y teorías que los fundamentan. Por medio del estudio del presente material, usted logrará identificar las características y aspectos relevantes de ecología, variables y problemas ambientales, desarrollo sostenible y normativa ambiental, entre otros.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
