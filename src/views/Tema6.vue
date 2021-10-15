<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Guías ambientales

    figure
      img(src='@/assets/curso/tema6/img01.png')  

    Separador

      
    #t_6_1.titulo-segundo
      h2 6.1  Objetivos
    figure
      img(src='@/assets/curso/tema6/img02.png')  
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
