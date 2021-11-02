<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Normativa ambiental

    .row.justify-content-center.mb-5 
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5          
            br
            p.mb-0 A continuación se presenta la normativa vigente en Colombia, relacionada con los aspectos ambientales:
            br
            br

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="La Constitución Política de Colombia ")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img02.svg')
        .col-lg-9
          p.mb-4 En materia ambiental ordena que las instituciones del gobierno protejan el medio ambiente y que la ley permita a los ciudadanos participar en las decisiones que afectan su derecho a un medio ambiente adecuado. 
          p.mb-0 Asimismo, la promoción de la protección ambiental y el desarrollo sostenible encuentran su base en la Constitución Política de 1991, que a través de su artículo 79 tutela el ambiente sano, garantizando la participación de la comunidad en las decisiones que puedan afectarlo. Mientras tanto, el artículo 95 determina que toda persona está obligada a proteger los recursos culturales y naturales del país y velar por la conservación de un ambiente sano. Establece también que el Estado debe planificar el manejo y aprovechamiento sostenible de los recursos naturales para garantizar el desarrollo sostenible por medio del artículo 80, y le da prioridad al espacio público mediante el artículo 82.  
      .row.justify-content-center(titulo="Ley 23 de 1973 ")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img03.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Ley 23 de 1973 reglamentada parcialmente por los decretos 704 de 1986, 305 de 1988 y 1794 de 1989, establece el control de la contaminación del medio ambiente, alternativas y estrategias para la conservación y recuperación de los recursos naturales, para la salud y el bienestar de la población. 
      .row.justify-content-center(titulo="Decreto Ley 2811 de 1974")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img04.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Decreto Ley 2811 de 1974, por el cual se establece el Código de los Recursos Naturales y de Protección al Medio Ambiente. Este código regula la atmósfera y el espacio aéreo nacional, las aguas en cualquiera de sus estados, la tierra, el suelo y el subsuelo, la flora, la fauna, las fuentes primarias de energía no agotables, las pendientes topográficas con potencial energético, los recursos geotérmicos, los recursos biológicos de las aguas y del suelo y el subsuelo del mar territorial y de la zona económica de dominio continental e insular de la República y los recursos del paisaje.
      .row.justify-content-center(titulo="Ley 9 de 1979")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img05.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Ley 9 de 1979, Código Sanitario Nacional, establece los procedimientos y medidas para legislar, regular y controlar las descargas de los residuos y materiales. Indica además los parámetros para controlar las actividades que afecten el medio ambiente. 
      .row.justify-content-center(titulo="Ley 99 de 1993")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img06.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Ley 99 de 1993, por la cual se crea el Sistema Nacional Ambiental, establece el marco general de gestión ambiental y está orientada a promover el desarrollo sostenible, de manera general. La ley 99 estableció el Ministerio del Medio Ambiente, hoy Ministerio de Ambiente y Desarrollo Sostenible (MADS), como organismo rector de la gestión sostenible del medioambiente y de los recursos naturales y del ordenamiento ambiental del territorio. 
      .row.justify-content-center(titulo="Decreto 1076 de 2015")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img07.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Decreto 1076 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.
      .row.justify-content-center(titulo="Resolución 689 de 2016")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img08.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Resolución 689 de 2016, expide el reglamento que define los límites máximos de fósforo y biodegrabilidad de los tensoactivos presentes en detergentes y jabones.
      .row.justify-content-center(titulo="Ley 1844 de 2017")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img09.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Ley 1844 de 2017, adopta el acuerdo de París del convenio marco de las Naciones Unidas sobre el cambio climático. 
      .row.justify-content-center(titulo="Decreto 870 de 2017")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img10.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Decreto 870 de 2017, crea el sistema de pago por servicios ambientales y otros incentivos de conservación. 
      .row.justify-content-center(titulo="Resolución 1447 de 2018")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img11.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Resolución 1447 de 2018, reglamenta el monitoreo, reporte y verificación de las acciones de mitigación a nivel nacional frente a la reducción y remoción de emisiones de gases de invernadero.
      .row.justify-content-center(titulo="Resolución 2210 de 2018")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img12.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Resolución 2210 de 2018, por la cual se reglamenta el uso del sello minero ambiental colombiano de naturaleza voluntaria. 
      .row.justify-content-center(titulo="Ley 1931 de 2018")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img13.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Ley 1931 de 2018, define las directrices para la gestión del cambio climático de las personas públicas y privadas.
      .row.justify-content-center(titulo="Resolución 1561 de 2019 ")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img14.svg')
        .col-lg-9.d-flex.align-items-center
          p.mb-0 Resolución 1561 de 2019 establece los términos de referencia para elaborar estudios de impacto ambiental, para poder tramitar las licencias ambientales de los proyectos de explotación de materias de construcción.
      
    Separador
      
    #t_7_1.titulo-segundo
      h2 7.1  Normativa para los recursos naturales
    p.mb-5 A continuación se relacionan la normatividad vigente asociada con los recursos naturales:

    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img20.png' alt='AvatarTop')               
          .tarjeta.color-acento-botones(style="width:100%")
            div.p-4
              h4.text-center Aire
              ul.lista-ul--color
                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 2206 de 1983</b>, por el cual se sustituye el Capítulo XVI de la vigilancia, el control y las sanciones, del Decreto No. 02 de 1982 sobre emisiones atmosféricas. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 948 de 1995</b>, por el cual se reglamentan parcialmente, la Ley 23 de 1973, los artículos 33, 73, 74, 75 y 76 del Decreto - Ley 2811 de 1974; los artículos 41, 42, 43, 44, 45, 48 y 49 de la Ley 9 de 1979; y la Ley 99 de 1993, en relación con la Prevención y Control de la Contaminación Atmosférica y la Protección de la Calidad del Aire. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 2107 de 1995</b>, por medio del cual se modifica parcialmente el Decreto 948 de 1995, que contiene el Reglamento de Protección y Control de la Calidad del Aire. 
                
                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 1697 de 1997</b>, por medio del cual se modifica parcialmente el decreto 948 de 1995, que contiene el Reglamento de Protección y Control de la Calidad del Aire. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Ley 629 de 2000</b>, por medio de la cual se aprueba el "Protocolo de Kyoto de la Convención Marco de las Naciones Unidas sobre el Cambio Climático", hecho en Kyoto el 11 de diciembre de 1997. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Resolución 909 de 2008</b>, por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Resolución 910 de 2008</b>, por la cual se reglamentan los niveles permisibles de emisión de contaminantes que deberán cumplir las fuentes móviles terrestres, se reglamenta el artículo 91 del Decreto 948 de 1995 y se adoptan otras disposiciones. 

    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img15.png' alt='AvatarTop')               
          .tarjeta.color-acento-botones(style="width:100%")
            div.p-4
              h4.text-center Ruido
              ul.lista-ul--color
                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Resolución 627 de 2006</b>, por la cual se establece la norma nacional de emisión de ruido y ruido ambiental. 
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img16.png' alt='AvatarTop')               
          .tarjeta.color-acento-botones(style="width:100%")
            div.p-4
              h4.text-center Contaminación visual
              ul.lista-ul--color
                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Ley 140 de 1994</b>, por la cual se reglamenta la Publicidad Exterior Visual en el territorio nacional.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img17.png' alt='AvatarTop')               
          .tarjeta.color-acento-botones(style="width:100%")
            div.p-4
              h4.text-center Biodiversidad
              ul.lista-ul--color
                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Política Nacional para la Gestión de la Biodiversidad y sus Servicios Ecosistémicos</b>, su objetivo es promover la gestión integral de la biodiversidad y sus servicios ecosistémicos, para mantener o aumentar la capacidad adaptativa (resiliencia) de los socio-ecosistemas a escalas nacional, regional y local en escenarios de cambio, mediante la acción conjunta, coordinada y concertada del Estado, el sector productivo y la sociedad civil. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Convención sobre el comercio internacional de especies amenazadas de fauna y flora silvestre</b>, este incluye, en el apéndice I, todas las especies en peligro de extinción que son o pueden ser afectadas por el comercio. El comercio en especímenes de estas especies deberá estar sujeto a una reglamentación particularmente estricta, a fin de no poner en peligro aún mayor su supervivencia, y se autorizará solamente bajo circunstancias excepcionales.<br><br>El apéndice II incluye todas las especies que, si bien en la actualidad no se encuentran necesariamente en peligro de extinción, podrían llegar a esa situación, a menos que el comercio en especímenes de dichas especies esté sujeto a una reglamentación estricta a fin de evitar utilización incompatible con su supervivencia; y aquellas otras especies no afectadas por el comercio, que también deberán sujetarse a reglamentación con el fin de permitir un eficaz control del comercio en las especies.<br><br>Adicionalmente reglamenta el comercio en especímenes de especies incluidas en el Apéndice I y II, y los permisos y certificados asociados al comercio de las especies incluidas en la convención.  

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Ley 165 de 1994</b>, por la cual se aprueba el Convenio de Diversidad Biológica, cuyo objetivo es perseguir la conservación de la diversidad biológica, la utilización sostenible de sus componentes y la participación justa y equitativa en los beneficios que se deriven de la utilización de los recursos genéticos, mediante, entre otras cosas, un acceso adecuado a esos recursos y una transferencia apropiada de las tecnologías pertinentes, teniendo en cuenta todos los derechos sobre esos recursos y a esas tecnologías, así como mediante una financiación apropiada. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 900 de 1997</b>, por el cual se reglamenta el Certificado de incentivo forestal para conservación.

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decisión 562 de 2003</b>, tiene por objetivo establecer requisitos y procedimientos para la elaboración, adopción y aplicación de Reglamentos Técnicos al interior de los Países Miembros y a nivel comunitario, a fin de evitar que estos se constituyan en obstáculos técnicos innecesarios al comercio intrasubregional. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Ley 846 de 2003</b>, por medio de la cual se aprueba el Protocolo Adicional al Acuerdo de Cartagena "Compromiso de la Comunidad Andina por la Democracia", hecho en Oporto, Portugal, el diecisiete (17) de octubre de mil novecientos noventa y ocho (1998).

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 2372 de 2010</b>, por el cual se reglamenta el Decreto - Ley 2811 de 1974, la Ley 99 de 1993, la Ley 165 de 1994 y el Decreto - Ley 216 de 2003, en relación con el Sistema Nacional de Áreas Protegidas, las categorías de manejo que lo conforman y se dictan otras disposiciones.

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 2803 de 2010</b>, por el cual se reglamenta la Ley 1377 de 2010, sobre registro de cultivos forestales y sistemas agroforestales con fines comerciales, de plantaciones protectoras-productoras, la movilización de productos forestales de transformación primaria y se dictan otras disposiciones.

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Resolución 192 de 2014</b>, por la cual se establece el listado de las especies silvestres amenazadas de la diversidad biológica colombiana que se encuentran en el territorio nacional, y se dictan otras disposiciones. 
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img18.png' alt='AvatarTop')               
          .tarjeta.color-acento-botones(style="width:100%")
            div.p-4
              h4.text-center Hídrico
              ul.lista-ul--color
                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Ley 373 de 1997</b>, por la cual se establece el programa para el uso eficiente y ahorro del agua. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 1575 de 2007</b>, establece el Sistema para la Protección y Control de Calidad del Agua para Consumo Humano, con el fin de monitorear, prevenir y controlar los riesgos de la salud humana causados por su consumo. 

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Decreto 3930 de 2010</b>, por el cual se fijan disposiciones sobre el uso del agua y residuos líquidos, relacionadas con los usos del recurso hídrico, el Ordenamiento del Recurso Hídrico y los vertimientos al recurso hídrico, al suelo y a los alcantarillados. Este decreto se modifica parcialmente por el Decreto 4728 de 2010.  

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Resolución 75 de 2011</b>, por la cual se adopta el formato de reporte sobre el estado de cumplimiento de la norma de vertimiento puntual al alcantarillado público.   

                li 
                  i.fas.fa-circle.fa-xs
                  p.mb-0 <b>Resolución 1514 de 2012</b>, por la cual adoptan los Términos de referencia para la elaboración del Plan de Gestión del Riesgo para el manejo de vertimientos. 

    Separador

    #t_7_2.titulo-segundo
      h2 7.2  Recursos genéticos y propiedad intelectual

    AcordionA(tipo="a" clase-tarjeta="tarjeta t7-div1")
      .row.justify-content-center(titulo="Decisión Nº 391 de la Comunidad Andina")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Decisión Nº 391 de la Comunidad Andina</b>, establece el Régimen Común sobre el acceso a los Recursos Genéticos. Incluye: conocimientos tradicionales, observancia de las leyes de propiedad intelectual y leyes conexas, organismo regulador de Propiedad Intelectual (PI), patentes (invenciones), recursos genéticos, transferencia de tecnología. 

      .row.justify-content-center(titulo="Decisión Nº 486 de la Comunidad Andina")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Decisión Nº 486 de la Comunidad Andina</b>, que establece el Régimen Común sobre Propiedad Industrial, la cual regula el otorgamiento de marcas y patentes y protege los secretos industriales y las denominaciones de origen, entre otros.  

      .row.justify-content-center(titulo="Decreto 2811 de 1974")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Decreto 2811 de 1974</b>, en su artículo 8 indica los factores que deterioran el ambiente, entre otros: la extinción o disminución cuantitativa o cualitativa de especies animales y vegetales o de recursos genéticos. El artículo 291 establece que se requiere autorización especial a la importación, producción, venta y expendio de híbridos o nuevas especies, logradas mediante el uso de recursos genéticos. 

      .row.justify-content-center(titulo="Resolución 620 de 1997")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Resolución 620 de 1997</b>, delega algunas funciones contenidas en la Decisión 391/96 de la Comisión del Acuerdo de Cartagena y establece el procedimiento interno para tramitar las solicitudes de acceso a los Recursos Genéticos y sus productos derivados. 
    Separador

    #t_7_3.titulo-segundo
      h2 7.3  Permisos y licencias ambientales
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Decreto 1541 de 1978")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-4 Decreto 1541 de 1978 artículo 146, establece que la explotación que incluye perforaciones de prueba en búsqueda de agua subterránea, con miras a su posterior aprovechamiento, requiere de un permiso de concesión de agua subterránea.  La Sección 3 del decreto establece los procedimientos para otorgar concesiones de agua superficial.
      .row.justify-content-center(titulo="Decreto 1791 de 1996")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Decreto 1791 de 1996, por medio del cual se establece el régimen de aprovechamiento forestal. 
      .row.justify-content-center(titulo="Resolución 619 de 1997")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Resolución 619 de 1997, por la cual se establecen parcialmente los factores a partir de los cuales se requiere permiso de emisión atmosférica para fuentes fijas. 
      .row.justify-content-center(titulo="Decreto 1324 de 2007")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Decreto 1324 de 2007, por el cual se crea el Registro de Usuarios del Recurso Hídrico y se dictan otras disposiciones. 
      .row.justify-content-center(titulo="Decreto 2803 de 2010")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Decreto 2803 de 2010, por el cual se reglamenta la Ley 1377 de 2010, sobre registro de cultivos forestales y sistemas agroforestales con fines comerciales, de plantaciones protectoras - productoras la movilización de productos forestales de transformación primaria y se dictan otras disposiciones. 
      .row.justify-content-center(titulo="Decreto 3930 de 2010")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Decreto 3930 de 2010, en su Artículo 41 establece que toda persona natural o jurídica, cuya actividad o servicio genere vertimientos a aguas superficiales, marinas o al suelo, deberá solicitar y tramitar ante la autoridad ambiental competente, el respectivo permiso de vertimientos.  
      .row.justify-content-center(titulo="Decreto 3016 de 2013")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Decreto 3016 de 2013, por el cual se reglamenta el permiso de estudio para la recolección de especímenes de especies silvestres de la diversidad biológica con fines de elaboración de estudios ambientales. 
      .row.justify-content-center(titulo="Decreto 2041 de 2014")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9
          p.mb-0 Decreto 2041 de 2014, por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales. El capítulo II, define el Estudio de Impacto ambiental (EIA) e indica el contenido mínimo que este debe incluir.  Título IV, define la evaluación del Diagnóstico Ambiental de Alternativas (DAA), los proyectos que están sujetos a su elaboración y los requisitos para su presentación ante la autoridad ambiental competente.  
    Separador

    #t_7_4.titulo-segundo
      h2 7.4  Manejo de residuos
    p.mb-5 A continuación se relacionan la normatividad vigente asociada con los recursos naturales:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Decreto 1140 de 2003")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9          
          p.mb-0 Decreto 1140 de 2003, por el cual se modifica parcialmente el Decreto 1713 de 2002, en relación con el tema de las unidades de almacenamiento, y se dictan otras disposiciones. 
      .row.justify-content-center(titulo="Decreto 1443 de 2004")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9          
          p.mb-0 Decreto 1443 de 2004, por el cual se reglamenta parcialmente el Decreto 2811 de 1974, la Ley 253 de 1996, y la Ley 430 de 1998, en relación con la prevención y control de la contaminación ambiental por el manejo de plaguicidas y desechos o residuos peligrosos provenientes de los mismos y se dictan otras disposiciones. 
      .row.justify-content-center(titulo="Decreto 838 de 2005")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9          
          p.mb-0 Decreto 838 de 2005, por el cual se modifica la Resolución 541 de 1994 para la disposición final de residuos sólidos y se dictan otras disposiciones.
      .row.justify-content-center(titulo="Ley 1252 de 2008")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9          
          p.mb-0 Ley 1252 de 2008, por la cual se dictan normas prohibitivas en materia ambiental, referentes a los residuos y desechos peligrosos y se dictan otras disposiciones. 
      .row.justify-content-center(titulo="Decreto 3930 de 2010")
        .col-lg-2
          figure
            img(src='@/assets/curso/tema7/img19.png')
        .col-lg-9          
          p.mb-0 Decreto 3930 de 2010, por el cual se reglamenta parcialmente el Título I de la Ley 9ª de 1979, así como el Capítulo II del Título VI -Parte III- Libro II del Decreto-ley 2811 de 1974 en cuanto a usos del agua y residuos líquidos y se dictan otras disposiciones. Este Decreto se modifica parcialmente por el Decreto 4728 de 2010.  
    
    Separador

    #t_7_5.titulo-segundo
      h2 7.5  Sustancias o materiales peligrosos
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta t7-div1")
      .row.justify-content-center(titulo="Agroquímicos Ia/Ib según la OMS")
        .col-lg-10.d-flex.align-items-center
          div
            p.mb-0 <b>Agroquímicos Ia/Ib según la OMS:</b>  
            p.mb-0 La OMS clasifica los plaguicidas por orden de peligrosidad, tomando como referencia la dosis letal (DL) promedio oral o cutánea. Una medición llamada LD50 (siglas en inglés) se calcula midiendo el número de miligramos de componente activo por kilogramo del peso del cuerpo, necesario para matar el 50 % de un muestreo de animales - con frecuencia ratas. Cada plaguicida es luego clasificado en cuatro categorías (WHO, 2009): la, extremadamente peligroso y Ib, altamente peligroso (Ministerio de Ambiente, 2020).
      .row.justify-content-center(titulo="Ley 960 de 2005")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Ley 960 de 2005</b>, por medio de la cual se aprueba la "Enmienda del Protocolo de Montreal relativo a las sustancias que agotan la capa de ozono", adoptada en Beijing, China, el 3 de diciembre de 1999. 
      .row.justify-content-center(titulo="Resolución 186 de 2007")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Resolución 186 de 2007</b>, por la cual se adopta el Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación, comercialización, y se establece el Sistema de Control de Productos Agropecuarios Ecológicos. 
      .row.justify-content-center(titulo="Decisión 684 de 2008")
        .col-lg-10.d-flex.align-items-center
          p.mb-0 <b>Decisión 684 de 2008</b>, modificación de la Decisión 436 (Norma Andina para el Registro y Control de Plaguicidas Químicos de Uso Agrícola.) 

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
