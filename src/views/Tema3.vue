<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Plan de manejo ambiental (PMA)

    .row.justify-content-center
      .col-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El Decreto 1220 del 21 de abril de 2005, en su artículo 1º, define el Plan de Manejo Ambiental (PMA) como el conjunto detallado de actividades, que producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales que se causen por el desarrollo de un proyecto, obra o actividad. Incluye los planes de seguimiento, monitoreo, contingencia y abandono, según la naturaleza del proyecto, obra o actividad.

    Separador 

    #t_3_1.titulo-segundo
      h2 3.1  Objetivos

    .row.justify-content-center
      .col-7
        .cajon.color-acento-contenido.p-4
          p.mb-0 El PMA tiene por objetivo mitigar, compensar o eliminar progresivamente en plazos racionales, los impactos ambientales negativos generados por una obra o actividad en desarrollo. Por lo tanto, deberá incluir las propuestas de acción y los programas y cronogramas de inversión necesarios para incorporar las medidas alternativas de prevención de contaminación, cuyo propósito sea optimizar el uso de las materias primas e insumos, y minimizar o eliminar las emisiones, descargas y/o vertimientos, acorde a lo establecido en la normativa ambiental vigente (Oficina de Gestión Ambiental Alcaldía Local de Tunjuelito, 2009).
      .col-5
        figure
          img(src='@/assets/curso/tema3/img02.png') 
    Separador

    #t_3_2.titulo-segundo
      h2 3.2  Contenido del PMA
    p.mb-5 El plan de manejo ambiental debe contar con los siguientes elementos: 
    .row.justify-content-start
      .col-5
        figure
          img(src='@/assets/curso/tema3/img03.png') 
      .col-5
        ul.lista-ul--color
          li 
            i.fas.fa-circle.fa-xs
            | Nombre de la empresa u organización.
          li 
            i.fas.fa-circle.fa-xs
            | Representante legal. 
          li 
            i.fas.fa-circle.fa-xs
            | Responsables del PMA.
          li 
            i.fas.fa-circle.fa-xs
            | Nombre completo, cargo y firma del responsable del PMA.
          li 
            i.fas.fa-circle.fa-xs
            | Dirección de la empresa.
          li 
            i.fas.fa-circle.fa-xs
            | Croquis de la localización. 
          li 
            i.fas.fa-circle.fa-xs
            | Ubicación geográfica.
          li 
            i.fas.fa-circle.fa-xs
            | Relación de autorizaciones, licencias, permisos y similares en materia ambiental con que cuenta la organización. 
          li 
            i.fas.fa-circle.fa-xs
            | Fecha de inicio de operaciones. 
          li 
            i.fas.fa-circle.fa-xs
            | Personal o número de empleados u obreros en la planta. 
          li 
            i.fas.fa-circle.fa-xs
            | Turnos de trabajo.
          li 
            i.fas.fa-circle.fa-xs
            | Actividad de la empresa.
    Separador

    #t_3_3.titulo-segundo
      h2 3.3  Marco legal

    .row.justify-content-center
      .col-10
        figure.mb-5 
          img(src='@/assets/curso/tema3/img04.png') 

        p.mb-4 De acuerdo con la Oficina de Gestión Ambiental de la alcaldía local de Tunjuelito (2009), el Plan de Manejo Ambiental se debe elaborar teniendo en cuenta lo establecido en la Constitución Política Colombiana, que incluye artículos que de manera directa o indirecta tienen que ver con la conservación y preservación del medio ambiente, la Ley 99 de 1.993, por la cual se creó el Sistema Nacional Ambiental (SINA) y en particular el Decreto 1220 de 2005, por el cual se reglamenta el título VIII de la ley 99 de 1993, sobre licencias ambientales.
        p.mb-0 En adición debe contemplar la normativa relacionada con el recurso hídrico, el aire, el suelo, la flora y fauna, el paisaje, los recursos energéticos, los residuos sólidos, el ruido, y los aspectos sociales, culturales y económicos.
    Separador

</template>

<script>
export default {
  name: 'Tema3',
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
