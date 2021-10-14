<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Normativa ambiental

      
    #t_7_1.titulo-segundo
      h2 7.1  Normativa para los recursos naturales
    Separador

    #t_7_2.titulo-segundo
      h2 7.2  Recursos genéticos y propiedad intelectual
    Separador

    #t_7_3.titulo-segundo
      h2 7.3  Permisos y licencias ambientales
    Separador

    #t_7_4.titulo-segundo
      h2 7.4  Manejo de residuos
    Separador

    #t_7_5.titulo-segundo
      h2 7.5  Sustancias o materiales peligrosos
    Separador

</template>

<script>
export default {
  name: 'Tema7',
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
