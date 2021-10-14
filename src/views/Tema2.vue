<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Medio ambiente

      
    #t_2_1.titulo-segundo
      h2 2.1  Estructura del ambiente
    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Factores bióticos
    Separador

    #t_2_3.titulo-segundo
      h2 2.3 Factores abióticos
    Separador

    #t_2_4.titulo-segundo
      h2 2.4 Variables ambientales
    Separador
</template>

<script>
export default {
  name: 'Tema2',
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
