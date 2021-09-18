<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-4.gx-0
        figure.w-100
          img(src='@/assets/curso/intro/img01.jpg', alt='')     
    .row.justify-content-end.mtN01
      .col-9.BG05.round01.p-4.gx-0
        p.mb-4 Actualmente, el medio ambiente es uno de los temas con mayor relevancia a nivel mundial. Constantemente, las organizaciones gubernamentales y no gubernamentales estudian estrategias para lograr el desarrollo económico y social sin dejar de un lado el cuidado, protección y conservación de este.
        p.mb-4 Mediante el estudio del presente material, el aprendiz logrará identificar los conceptos de ecología, medio ambiente, desarrollo sostenible y los factores que hacen parte de ellos. Así mismo, se estudiarán las variables y atributos ambientales y las estrategias que, a nivel local, regional, nacional e internacional, las entidades estatales y corporaciones han desarrollado con el fin de cuidar los recursos que el entorno proporciona a cada comunidad.
        p.mb-0 Finalmente, se presentará una breve descripción de la normativa vinculada a estos procesos, su importancia y las organizaciones que lideran los diferentes planes de mejoramiento ambiental a nivel mundial.
    .row
      .col-12.gx-0
        figure
          img(src='@/assets/curso/intro/img02.svg', alt='')  
    
        .BG03.p-4
          .cajon-b.color-acento-contenido.p-3.mb-0
            p.mb-0 La sociedad actual se encuentra en un constante desarrollo de alternativas que le proporcionan mejores oportunidades de desarrollo social, económico y cultural. Del mismo modo, es más consciente de la necesidad de crear alternativas sostenibles que no sólo brinden beneficios económicos, disminuyan el desempleo y la pobreza de un país, sino que también permitan el desarrollo sostenible, factor que implica la conservación y cuidado del medio ambiente, el cual se considera el hogar, entorno y proveedor de recursos vitales para la existencia de los seres vivos.
              br
              br
              | A través de los años, en Colombia los negocios verdes se han convertido en una importante alternativa para el sector productivo del país, permitiendo que muchas familias encuentren en el desarrollo de productos y servicios sostenibles, el sustento para sus hogares y el de muchos colombianos. Pero ¿en qué consisten los negocios verdes?, para comprender este concepto, es importante realizar un recorrido por los fundamentos, principios y teorías que los fundamentan. Por medio del estudio del presente material, usted logrará identificar las características y aspectos relevantes de ecología, variables y problemas ambientales, desarrollo sostenible y normativa ambiental, entre otros.

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
