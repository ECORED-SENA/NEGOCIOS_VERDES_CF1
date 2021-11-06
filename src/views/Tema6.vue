<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.texto-blanco
        span 6
      h1 Guías ambientales

    .row(style="position:relative; width:100%")
        .col-lg-12
          figure
            img(style="border-radius: 9px" src='@/assets/curso/tema6/img04.png')
          .row(style="position:absolute; bottom:0%; width:100%") 
            .col-lg-8.p-4.t2-gradiente
              .row
                .col-lg-9
                  p.mb-0 Las guías ambientales son instrumentos técnicos en donde se consolidan esquemas para el mejoramiento de la gestión, manejo y desempeño ambiental de los sectores productivos. Así mismo, se consideran mecanismos de autogestión, de consulta y de referencia de carácter conceptual y metodológico para las autoridades ambientales, así como para la ejecución o desarrollo de proyectos, obras o actividades.
    

    Separador

      
    #t_6_1.titulo-segundo
      h2 6.1  Objetivos
    figure.mb-5
      img(src='@/assets/curso/tema6/img09.png') 
    div.d-none.d-lg-block
      .row.justify-content-center
        .col-lg-9
          figure.mb-3
            img(src='@/assets/curso/tema6/img08.svg')  
    .row.justify-content-center
      .col-lg-3
        figure.mb-3.d-lg-none
          img(src='@/assets/curso/tema6/img05.svg')  
        p.px-3.mb-4 Conocer los requisitos establecidos en la legislación ambiental, así como establecer reglas claras para mejorar el desempeño ambiental.

      .col-lg-3
        figure.mb-3.d-lg-none
          img(src='@/assets/curso/tema6/img06.svg')  
        p.px-3.mb-4 Orientar la implementación de medidas de producción más limpia; así como la elaboración de planes de manejo ambiental y mejor aprovechamiento de los recursos naturales.

      .col-lg-3
        figure.mb-3.d-lg-none
          img(src='@/assets/curso/tema6/img07.svg')  
        p.px-3.mb-4 Lograr en el corto, mediano y largo plazo la sostenibilidad, competitividad y productividad que permitan mejorar las relaciones con el entorno natural.

    Separador

    #t_6_2.titulo-segundo
      h2 6.2  Medidas de manejo ambiental
    figure.mb-5
      img(src='@/assets/curso/tema6/img03.png') 
    .row.justify-content-center
      .col-lg-10
        p.mb-4 Se describen a continuación las diferentes medidas de manejo ambiental.
        ul.lista-ul--color
          li 
            i.fas.fa-check.fa-xs
            p.mb-0 <b>Medidas de prevención:</b> son obras o actividades encaminadas a prevenir y controlar los posibles impactos y efectos negativos que pueda generar un proyecto, obra o actividad sobre el entorno humano y natural.
          li 
            i.fas.fa-check.fa-xs
            p.mb-0 <b>Medidas de mitigación:</b> son obras o actividades dirigidas a atenuar y minimizar los impactos y efectos negativos de un proyecto, obra o actividad sobre el entorno humano o natural.
          li 
            i.fas.fa-check.fa-xs
            p.mb-0 <b>Medidas de corrección:</b> son obras o actividades dirigidas a recuperar, restaurar o reparar las condiciones del medio ambiente afectado.
          li 
            i.fas.fa-check.fa-xs
            p.mb-0 <b>Medidas de compensación:</b> son obras o actividades tendientes a resarcir y retribuir a las comunidades, las regiones o localidades por los impactos o efectos negativos que no puedan evitarse, corregidos o satisfactoriamente mitigados.

    Separador
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
