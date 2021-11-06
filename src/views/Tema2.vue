<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.texto-blanco
        span 2
      h1 Medio ambiente

    
    .row(style="position:relative; width:100%")
        .col-lg-12
          figure
            img(src='@/assets/curso/tema2/img19.png')
          .row(style="position:absolute; bottom:0%; width:100%") 
            .col-lg-6.p-4.t2-gradiente
              .row
                .col-lg-8
                  p.mb-0 La ecología es la ciencia que estudia el medio ambiente, la cual abarca todas las relaciones entre los seres vivos y no vivos que interactúan naturalmente.

    Separador

    #t_2_1.titulo-segundo
      h2 2.1  Estructura del ambiente

    p.mb-0 El medio ambiente consta de dos factores que se relacionan estrechamente entre sí en el ecosistema: 
    .row.justify-content-center.mb-5
      .col-10
        figure
          img(src='@/assets/curso/tema2/img32.svg') 
        .row.justify-content-center.my-0.py-4(style="background-color: #A0A603")
          .col-9
            h4.py-0.my-0(style="color:white") En la siguiente imagen se pueden evidenciar algunos ejemplos de cada uno de ellos:
        figure
          img(src='@/assets/curso/tema2/img21.png') 
    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Factores bióticos

   

    .row.justify-content-center.mb-4
      .col-10
        p.mb-0 Teniendo en cuenta la clasificación de los seres vivos que conforman el medio ambiente, es importante tener en cuenta su hábitat, entendido como el lugar específico donde habita cada organismo, es decir, su hogar. Por ejemplo, los murciélagos viven en el interior de las cuevas o los peces en el agua. Así mismo, el nicho ecológico en el cual los organismos desempeñan su función o papel en el hábitat.      
    
    .row.justify-content-center.mb-4
      .col-10
        .bloque-texto-c.color-acento-botones.p-4
          i.fas.fa-quote-right
          h4.mb-2.px-4 Este concepto es algo más complejo, pues está determinado por: las características ambientales que una especie tolera y requiere para sobrevivir y reproducirse, la utilización de los recursos disponibles, el tipo de alimento que consume, la posición trófica que ocupa dicha especie de organismo en el ecosistema y la forma en que es coaccionada por otras especies.
          .div.d-flex.justify-content-end            
            p Según Urrutia (2014)

    .row.justify-content-center.mb-4
      .col-10
        p.mb-0 Los factores bióticos son los seres vivos que pertenecen a un ecosistema, y se clasifican en: 

    .row.justify-content-center
      .col-10
        SlyderA
          .row.justify-content-center(style="position:relative").px-3
            .col-12(:style="{'background-image': `url(${require('@/assets/curso/tema2/img22.png')})`}")
              .row.justify-content-start
                .col-lg-5.ms-5.mt-5
                  figure.mt-4
                    img(src='@/assets/curso/tema2/img23.png') 
                .col-lg-6.mt-5(style="position:relative; left:-6%; color:white")
                  h4.mb-0.texto-blanco Función
                  p.texto-blanco.mb-4 Productor
                  h4.mb-0.texto-blanco Descripción
                  p.texto-blanco.mb-4 Organismos autótrofos fotosintéticos, capaces de captar la energía del sol y transformarla en energía química y materia. Son la base donde inician las cadenas alimenticias.
                  h4.mb-0.texto-blanco Organismos
                  p.mb-0.texto-blanco.mb-5 Plantas, algas y cianobacterias.

          .row.justify-content-center(style="position:relative").px-3
            .col-12(:style="{'background-image': `url(${require('@/assets/curso/tema2/img24.png')})`}")
              .row.justify-content-start
                .col-lg-5.ms-5.mt-5
                  figure.mt-4
                    img.mb-5(src='@/assets/curso/tema2/img25.png') 
                .col-lg-6.mt-5(style="position:relative; left:-6%; color:white")
                  h4.mb-0 Función
                  p.mb-4 Consumidor primario
                  h4.mb-0 Descripción
                  p.mb-4 Organismos heterótrofos herbívoros que se alimentan de hojas, semillas, frutos, madera, raíces, flores y néctar.
                  h4.mb-0 Organismos
                  p.mb-0.mb-5 Insectos, mamíferos herbívoros, algunos peces, algunas aves y ciertos reptiles, entre otros.

          .row.justify-content-center(style="position:relative").px-3
            .col-12(:style="{'background-image': `url(${require('@/assets/curso/tema2/img26.png')})`}")
              .row.justify-content-start
                .col-lg-5.ms-5.mt-5
                  figure.mt-4
                    img.mb-5(src='@/assets/curso/tema2/img27.png') 
                .col-lg-6.mt-5(style="position:relative; left:-6%; color:white")
                  h4.mb-0 Función
                  p.mb-4 Consumidor secundario 
                  h4.mb-0 Descripción
                  p.mb-4 Organismos heterótrofos carnívoros.
                  h4.mb-0 Organismos
                  p.mb-0.mb-5 Arácnidos, mamíferos carnívoros, algunos peces y reptiles.

          .row.justify-content-center(style="position:relative").px-3
            .col-12(:style="{'background-image': `url(${require('@/assets/curso/tema2/img28.png')})`}")
              .row.justify-content-start
                .col-lg-5.ms-5.mt-5
                  figure.mt-4
                    img.mb-5(src='@/assets/curso/tema2/img29.png') 
                .col-lg-6.mt-5(style="position:relative; left:-6%; color:white")
                  h4.mb-0 Función
                  p.mb-4 Consumidor terciario
                  h4.mb-0 Descripción
                  p.mb-0 Organismos heterótrofos carnívoros. 
                  p.mb-0 Depredadores de gran tamaño que se alimentan de los consumidores secundarios.
                  h4.mb-0 Organismos
                  p.mb-0.mb-5 Felinos, tiburones y aves depredadoras.
          
          .row.justify-content-center(style="position:relative").px-3
            .col-12(:style="{'background-image': `url(${require('@/assets/curso/tema2/img30.png')})`}")
              .row.justify-content-start
                .col-lg-5.ms-5.mt-5
                  figure.mt-4
                    img(src='@/assets/curso/tema2/img31.png') 
                .col-lg-6.mt-5(style="position:relative; left:-6%; color:white")
                  h4.mb-0.texto-blanco Función
                  p.texto-blanco.mb-4 Reintegradores
                  h4.mb-0.texto-blanco Descripción
                  p.texto-blanco.mb-4 Organismos heterótrofos que inician el proceso de descomposición de la materia muerta.
                  h4.mb-0.texto-blanco Organismos
                  p.mb-0.texto-blanco.mb-5 Bacterias, hongos e insectos, como las larvas de mosca y algunos coleópteros (escarabajos).

    Separador

    #t_2_3.titulo-segundo
      h2 2.3 Factores abióticos

    .row.justify-content-center
      .col-lg-10.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img08.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Anteriormente se definieron los factores abióticos como los factores externos a los seres vivos, es decir, los componentes sin vida del medio. Urrutia (2014), indica que son las condiciones del medio ambiente determinantes de la existencia y limitaciones de distribución de los organismos, como el clima, temperatura, humedad, relieve, latitud, altitud, características del sustrato, etc., y los recursos que éstos usan o consumen para poder sobrevivir como agua, luz, macro y micronutrientes, entre otros. Así mismo, indica que dentro de los más importantes se encuentran: 

    .row.justify-content-center
      .col-10
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img09.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Altitud:
                p.mb-0 También llamada elevación, es la medida en metros verticales desde el nivel medio del mar (msnm) a cualquier punto sobre la superficie continental. La altitud tiene un efecto directo sobre la temperatura, ya que esta disminuye entre 0.4 y 0.7 °C (grados centígrados), por cada 100 m de elevación, aunque esto varía en función de la proporción de humedad atmosférica, ya que esta absorbe calor, ayudando a mantener más estable la temperatura del aire.
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img10.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Agua: 
                p.mb-0 Es el compuesto más abundante y distribuido que tiene nuestro planeta. Desde el punto de vista biológico, es tal vez el componente más importante para la vida de cualquier organismo conocido.
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img11.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Luz: 
                p.mb-0 Flujo de energía radiante proveniente del sol, es el origen del calor y de toda la energía luminosa (de todas las longitudes de onda) que mantienen vivo a nuestro planeta. Este flujo se encarga de regular los patrones climáticos, la circulación de los vientos y en un sentido amplio, crea las condiciones propicias para la existencia de vida en la tierra.
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img12.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Clima: 
                p.mb-0 Es uno de los factores que más determinan la sobrevivencia de los seres vivos; el estudio de sus fluctuaciones diarias, estacionales, anuales, e incluso, aquellas debidas al efecto de los factores geográficos (altitud, latitud, relieve), o al resultado de la presencia de cuerpos de agua y vegetación; es un factor de gran relevancia en el estudio de los ecólogos. Los fenómenos climáticos pueden estudiarse a escala global, continental, en localidades focalizadas (mesoclima), en un bosque, una caverna, una cañada, la cima de una montaña, o a escala de un organismo, incluso debajo de una roca o en alguna grieta del suelo (microclima).
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img13.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Temperatura: 
                p.mb-0 Es una medida de la energía calorífica que presenta un cuerpo, y aunque en la Tierra depende en primera instancia del calor generado por la radiación solar, existe un sinnúmero de factores que determinan sus modificaciones, como la latitud, altitud, circulación atmosférica y oceánica, etc.
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img14.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Humedad atmosférica: 
                p.mb-0 Es la cantidad de agua en forma de vapor que contiene el aire de un lugar, esta mezcla varía de un lugar a otro con respecto a las condiciones climáticas, la cercanía de cuerpos de agua (ríos, lagos o el océano), la altitud dentro de la tropósfera (desde el nivel del mar hasta una altitud promedio de 11 km), la proporción de vegetación existente en la zona y la sombra que esta produce.
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img15.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Relieve: 
                p.mb-0 Es la configuración del terreno tanto de las tierras emergidas como subacuáticas. Cada elevación, hundimiento del terreno o irregularidad, genera variación en las condiciones ambientales como la humedad, la temperatura, la radiación solar, el clima, etc., por lo que ofrece nuevas oportunidades a los seres vivos para alojarse, adaptándose a las circunstancias.
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img16.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Latitud: 
                p.mb-0 Es la medida en grados, minutos y segundos de distancia angular del Ecuador hacia cualquier punto sobre la superficie terrestre hacia el Norte o hacia el Sur del planeta. Aproximadamente, cada grado de latitud corresponde a 111.12 Km, cada minuto a 1,852 metros y cada segundo a 30.86 metros
        .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img17.png' alt='AvatarTop')        
            .tarjeta.color-acento-botones
              .p-4
                h4.mb-1 Nutrientes minerales: 
                p.mb-0 Son sustancias esenciales que las plantas toman del suelo para vivir, pues estas no sólo necesitan luz, agua y CO2 para realizar fotosíntesis. Existen dos principales grupos de nutrientes: los macronutrientes como el nitrógeno (N), fósforo (P), potasio (K), calcio (Ca), magnesio (Mg) y azufre (S). Y los micronutrientes u oligoelementos como el hierro (Fe), zinc (Zn), manganeso (Mn), boro (B), cobre (Cu), molibdeno (Mo) y cloro (Cl), entre algunos otros.     
    Separador

    #t_2_4.titulo-segundo
      h2 2.4 Variables ambientales

    p.mb-5 Es momento de precisar las diferentes variables ambientales existentes, entre ellas se encuentran: 

    .row.justify-content-center
      .col-lg-9.pb-5
        figure
          img(src='@/assets/curso/tema2/img33.svg') 
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
