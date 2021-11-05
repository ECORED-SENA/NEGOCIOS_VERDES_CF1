export default {
  global: {
    componenteFormativo: 'Diagnóstico del entorno ambiental',
    descripcionCurso:
      'Actualmente, el medio ambiente es uno de los temas con mayor relevancia a nivel mundial. Constantemente, las organizaciones gubernamentales y no gubernamentales estudian estrategias para lograr el desarrollo económico y social sin dejar de un lado el cuidado, protección y conservación de este.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ecología ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Raíces de la ecología',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Aplicaciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Niveles ecológicos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Especialidades',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medio ambiente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura del ambiente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores bióticos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Factores abióticos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Variables ambientales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de Manejo Ambiental (PMA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetivos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Contenido del PMA',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Marco legal',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Indicadores ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Funciones',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Desarrollo sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Agenda 2030 Objetivos del Desarrollo Sostenible (ODS)',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Componentes fundamentales',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Objetivos de Desarrollo Sostenible ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Guías ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Objetivos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Medidas de manejo ambiental',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Normativa ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Normativa para los recursos naturales',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Recursos genéticos y propiedad intelectual',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Permisos y licencias ambientales',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Manejo de residuos',
            hash: 't_7_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.5',
            titulo: 'Sustancias o materiales peligrosos',
            hash: 't_7_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'CEUPE - Centro Europeo de Postgrado. (s.f.). Variables ambientales. Madrid, España.',
    },
    {
      referencia:
        'De Pablo, C., & Martín de Agar, P. (2005). La Ecología y sus aplicaciones: la Ciencia de la Ecología. Madrid.',
    },
    {
      referencia: 'García, L. (2014). Ecología y medio ambiente. Pearson.',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente y Desarrollo Sostenible. (2020). www.minambiente.gov.co. ',
      link:
        'https://www.minambiente.gov.co/index.php/negocios-verdes-y-sostenibles',
    },
    {
      referencia: 'Organización de las Naciones Unidas. (2015). www.un.org. ',
      link: 'https://www.un.org/sustainabledevelopment/es/development-agenda/',
    },
    {
      referencia:
        'Odum, E. P. (1972). Ecología. Ciudad de México: Nueva Editorial Interamericana S.A.',
    },
    {
      referencia:
        'Oficina de Gestión Ambiental Alcaldía Local de Tunjuelito. (2009). Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA). Bogotá.',
    },
    {
      referencia:
        'Secretaría de Medio Ambiente y Recursos Naturales. (2016). Indicadores básicos del desempeño ambiental de México. Ciudad de México.',
    },
    {
      referencia:
        'Smith, T., & Smith, R. (6° edición). (2007). Ecología. Madrid: Pearson Educaión, S.A.',
    },
    {
      referencia:
        'Unesco. (2015). Los Objetivos de Desarrollo Sostenible (ODS).',
    },
    {
      referencia:
        'Urrutia, A. L. (2014). Ecología y medio ambiente. McGraw-Hill Education.',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades.',
    },
    {
      termino: 'Ecología',
      significado:
        'El conjunto de conocimientos referentes a la economía de la naturaleza, la investigación de todas las relaciones del animal, tanto con su medio inorgánico como orgánico, incluyendo sobre todo su relación amistosa y hostil con aquellos animales y plantas con los que se relaciona directa o indirectamente.',
    },
    {
      termino: 'Factores abióticos',
      significado:
        'Son los distintos componentes que determinan el espacio físico en el cual habitan los seres vivos; entre los más importantes podemos encontrar: el agua, la temperatura, la luz, el pH, el suelo, la humedad, el aire (sin el cual muchos seres vivos no podrían vivir) y los nutrientes.',
    },
    {
      termino: 'Factores bióticos',
      significado: 'Son todos los seres vivos y su interacción entre ellos.',
    },
    {
      termino: 'Indicador ambiental',
      significado:
        'Es un parámetro o valor derivado de parámetros, que proporciona información para describir el estado de un fenómeno, ambiente o área, con un significado que va más allá del directamente asociado con el valor del parámetro en sí mismo.',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'Sistema que abarca todas las relaciones entre los seres vivos y no vivos que interactúan naturalmente.',
    },
    {
      termino: 'Plan de Manejo Ambiental (PMA)',
      significado:
        'Conjunto detallado de actividades, que producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales que se causen por el desarrollo de un proyecto, obra o actividad. Incluye los planes de seguimiento, monitoreo, contingencia y abandono, según la naturaleza del proyecto, obra o actividad.',
    },
  ],
  complementario: [
    {
      texto:
        'Naciones Unidas. (2015). Importancia de los Objetivos de Desarrollo Sostenible.',
      tipo: 'PDF>',
      descarga: '/downloads/Importancia_Objetivos_Desarrollo_Sostenible.pdf',
    },
    {
      texto:
        'UNESCO. (2017). Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos.',
      tipo: 'Vídeo YouTube',
      link: 'https://youtu.be/MCKH5xk8X-g',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama Varón',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Adriana Lozano Zapata',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
