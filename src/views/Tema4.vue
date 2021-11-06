<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.texto-blanco
        span 4
      h1 Indicadores ambientales

    .row.justify-content-center.t4-gradiente.mb-5
      .col-lg-6.p-4.py-5
        p.mb-4 En la mayoría de las actividades de la vida cotidiana que requieren tomar decisiones se hace uso de los indicadores, aunque en ocasiones no se tenga conciencia de ello. Un <b>indicador</b> es una señal o advertencia que nos permite conocer algo y tomar decisiones. Se pueden identificar diversos ejemplos de indicadores, tales como la temperatura corporal y la presión arterial, las cuales son indicadores del estado de salud. Así mismo, el testigo de gasolina de los automóviles, el cual al estar en F: <b><i>full</i></b>, nos muestra que el automóvil cuenta con el total de combustible necesario para funcionar y al estar en E: <b><i>empty</i></b>, en español, vacío, deberíamos acercarnos a la estación de gasolina más cercana para adquirir combustible. 
        p.mb-0 Del mismo modo se presentan los indicadores ambientales, para entender, describir y analizar distintos fenómenos como el clima, la pérdida de suelos y el riesgo de especies, entre muchos otros. Si bien el uso de indicadores ambientales se ha extendido, no existe una definición única del concepto y este varía de acuerdo con la institución y a los objetivos específicos que se persiguen. 
      .col-lg-6.d-flex.align-items-center.p-0
        figure
          img(src='@/assets/curso/tema4/img01.png') 
    p.mb-0 Una de las definiciones más conocida y aceptada proviene de la Organización para la Cooperación y el Desarrollo Económico (OCDE), que desde hace varios años utiliza un conjunto de indicadores como información base para realizar evaluaciones periódicas del desempeño ambiental de los diferentes países que integran la organización. Según la OCDE, un indicador ambiental es un parámetro o valor derivado de parámetros que proporciona información para describir el estado de un fenómeno, ambiente o área, con un significado que va más allá del directamente asociado con el valor del parámetro en sí mismo. (Secretaría de Medio Ambiente y Recursos Naturales, 2016).
      
    Separador

    #t_4_1.titulo-segundo
      h2 4.1  Funciones

    p.mb-4 Los indicadores ambientales se han utilizado a nivel regional, nacional e internacional, con la finalidad de informar acerca de los cambios presentados en el medio ambiente, el funcionamiento y desempeño de las políticas y planes ambientales desarrollados por cada gobierno y comunicar el progreso hacia la búsqueda del desarrollo sostenible.
    p.mb-3 Según la OCDE (1998), las dos funciones principales de los indicadores ambientales son:
    
    .row.justify-content-center
      .col-10
        figure 
          img(src='@/assets/curso/tema4/img02.png') 
    Separador

    #t_4_2.titulo-segundo
      h2 4.2  Características

    .row.justify-content-center.mb-5
      .col-7
        figure 
          img(src='@/assets/curso/tema4/img03.png') 

    .row.justify-content-center.mb-4
      .col-10
        p.mb-0 Continuando con lo planteado por la Organización para la Cooperación y el Desarrollo Económico (OCDE), los indicadores ambientales deben: 
    
    .row.justify-content-center
      .col-5
        ul.lista-ul--color
          li 
            i.fas.fa-check.fa-xs
            | Ofrecer una visión de las condiciones ambientales, presiones ambientales y respuestas de la sociedad o gobierno.
          li 
            i.fas.fa-check.fa-xs
            | Ser sencillos, fáciles de interpretar y capaces de mostrar las tendencias a través del tiempo.
          li 
            i.fas.fa-check.fa-xs
            | Responder a cambios en el ambiente y las actividades humanas relacionadas.
          li 
            i.fas.fa-check.fa-xs
            | Proporcionar una base para las comparaciones internacionales (cuando sea necesario).
          li 
            i.fas.fa-check.fa-xs
            | Ser aplicables a escala nacional o regional, según sea el caso.          

      .col-5
        ul.lista-ul--color
          li 
            i.fas.fa-check.fa-xs
            | De preferencia, tener un valor con el cual puedan compararse.
          li 
            i.fas.fa-check.fa-xs
            | Estar teórica y científicamente bien fundamentados.
          li 
            i.fas.fa-check.fa-xs
            | Estar basados en consensos internacionales.
          li 
            i.fas.fa-check.fa-xs
            | Ser capaces de relacionarse con modelos económicos y/o de desarrollo, así como con sistemas de información.
          li 
            i.fas.fa-check.fa-xs
            | Estar disponibles con una razonable relación costo/beneficio.
          li 
            i.fas.fa-check.fa-xs
            | Estar bien documentados y gozar de calidad reconocida.
          li 
            i.fas.fa-check.fa-xs
            | Actualizarse a intervalos regulares con procedimientos confiables.

    Separador
</template>

<script>
export default {
  name: 'Tema4',
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
