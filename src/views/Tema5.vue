<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Desarrollo sostenible

      
    #t_5_1.titulo-segundo
      h2 5.1  Agenda 2030 Objetivos del Desarrollo Sostenible (ODS)
    Separador

    #t_5_2.titulo-segundo
      h2 5.2  Componentes fundamentales
    Separador

    #t_5_3.titulo-segundo
      h2 5.3  Objetivos de Desarrollo Sostenible 
    Separador

</template>

<script>
export default {
  name: 'Tema5',
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
