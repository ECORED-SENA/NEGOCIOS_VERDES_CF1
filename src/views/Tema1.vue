<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Ecología 

      
    #t_1_1.titulo-segundo
      h2 1.1  Raíces de la ecología
    Separador
  
    #t_1_2.titulo-segundo
      h2 1.2  Aplicaciones
    Separador

    #t_1_3.titulo-segundo
      h2 1.3 Niveles ecológicos
    Separador

    #t_1_4.titulo-segundo
      h2 1.4 Especialidades
    Separador

    
   

</template>

<script>
export default {
  name: 'Tema1',
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
