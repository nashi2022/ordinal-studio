/* ════════════════════════════════════════════════════════════
   ordinal. — i18n ES / EN
   data-i18n      → textContent
   data-i18n-html → innerHTML (permite <em>, <br>, <small>…)
   ════════════════════════════════════════════════════════════ */

const I18N = {
  es: {
    /* ── navegación / footer ── */
    "nav.collection": "La colección",
    "nav.propose": "Proponer un proyecto",
    "footer.tag": "Un museo de historias de datos. Corre el verde para que veas el dorado que ya tenías.",
    "footer.rights": "todas las hojas reservadas",

    /* ── home · hero ── */
    "hero.eyebrow": "museo de historias de datos",
    "hero.l1": "Ningún dato",
    "hero.l2": "es solo un <em>número</em>.",
    "hero.p1": "Te confieso algo raro para una econometrista: los números, en sí, me aburren. Lo que no me aburre nunca es lo que esconden.",
    "hero.p2": "Un <span class=\"highlight\">0,3</span> puede ser una familia. Un punto porcentual, un pueblo entero. Una fila cualquiera de una planilla puede ser una persona parada en una esquina a la que nadie le preguntó cómo llegó hasta ahí.",
    "hero.p3": "<span class=\"highlight\">Leo datos para encontrar a esa persona.</span>",
    "hero.cta1": "Ver la colección",
    "hero.cta2": "Proponer un proyecto",
    "hero.scroll": "Te voy revelando el mundo de ordinal a medida que vas bajando",
    "quotes": "“No agrego. No invento. Corro el verde.” · “El dorado siempre estuvo ahí.” · “No decoro información. La hago hablar.” · “Un dato puede ser una persona en una esquina.” · ",

    /* ── placas del museo ── */
    "plaque.ordinal": "Sala I",
    "plaque.curator": "La curadora",
    "wing.read": "ala de lectura",
    "wing.art": "ala de obra",

    /* ── variable ordinal ── */
    "c1.p1": "Hay un tipo de dato que me da esperanza. Se llama <span class=\"highlight\">variable ordinal</span>.",
    "c1.p2": "Es la que mide lo que no tiene número exacto, pero igual tiene un orden. El dolor del uno al diez. El “un poco, bastante, demasiado”. Primero, segundo, tercero.",
    "c1.s1": "primero", "c1.s2": "segundo", "c1.s3": "tercero",
    "c1.p3": "No te dice cuánto. Te dice qué pesa más que qué. Es la única clase de dato que admite, de entrada, que hay cosas que no se dejan contar —y que aun así merecen medirse.",
    "c1.p4": "El estudio se llama así por eso. Porque trabajo justo en ese borde: <span class=\"highlight\">donde el número se rinde y la historia empieza.</span>",

    /* ── datos mudos ── */
    "c2.phrase": "La mayoría de los datos del mundo mueren <span class=\"highlight\">mudos</span>.",
    "c2.p1": "Y sin embargo, casi nadie los lee.",
    "c2.p2": "Información que costó años, presupuesto y el trabajo de mucha gente, encerrada en un PDF que abrieron tres personas y entendieron dos.",
    "c2.p3": "Es un <span class=\"highlight\">desperdicio</span> de tiempo, conocimiento y dinero.",
    "c2.p4": "Ahí adentro hay números que podrían cambiar una política, mover un presupuesto, sostener un programa que se está por caer. Y se apagan sin decir una palabra —porque están escritos en un idioma que solo hablan los que ya sabían la respuesta.",

    /* ── ala de lectura ── */
    "c3.p1": "Mi trabajo es llegar antes de que se apaguen.",
    "c3.p2": "Tomo ese dato —denso, técnico, ilegible— y le encuentro la historia que ya tenía adentro. No la invento. La destapo. Y la cuento de una forma que no necesita diccionario: que se entiende con el cuerpo, que deja ver el impacto que siempre estuvo en los números y que nadie se había detenido a mirar.",
    "c3.p3": "No decoro información. <span class=\"highlight\">Hago que cuente una historia.</span>",
    "c3.p4": "Para organismos, instituciones y multilaterales que tienen algo enorme para decir, y están cansados de que no se escuche.",
    "c3.badge": "data storytelling",

    /* ── ala de obra ── */
    "c4.p1": "A veces una historia no quiere que la lean. <span class=\"highlight\">Quiere que la miren.</span>",
    "c4.p2": "Cuando la información es tan rica que quiere trascender la pantalla o la interactividad, le doy cuerpo. La vuelvo instalación: a veces algo que se contempla en silencio; otras, algo que podés acercar, colgar o tomar en las manos.",
    "c4.p3": "Ahí la econometría y el arte dejan de ser dos cosas distintas.",
    "c4.p4": "Un conjunto de números que era una tabla deja de ser abstracto. <span class=\"highlight\">Se convierte en forma, en color, en algo que podés observar y admirar</span> —conectando lo que ves con la información que hay detrás. Eso me parece mágico.",
    "c4.badge": "data art",

    /* ── marquee ── */
    "marquee": "destapar\u2002·\u2002contar\u2002·\u2002mirar\u2002·\u2002tocar\u2002·\u2002revelar\u2002·\u2002",

    /* ── demos ala de lectura ── */
    "demo.read.t0": "informe_final_v47.pdf",
    "demo.read.m0": "3 personas lo abrieron",
    "demo.read.m1": "denso · técnico · ilegible",
    "demo.read.t2": "historia",
    "demo.read.t3": "El dato aprendió a hablar.",

    /* ── demos ala de obra ── */
    "demo.art.m0": "una celda · una tabla",
    "demo.art.m1": "trasciende la pantalla",
    "demo.art.m2": "contemplar · colgar · tocar",
    "demo.art.t3": "abstracto → forma → sentido",

    /* ── curadora ── */
    "c5.hook": "Te cuento lo que pasa de verdad cuando me siento frente a una base de datos.",
    "c5.p1": "Soy <span class=\"highlight\">dos cosas que casi nunca van juntas</span>. Una economista que aprendió a no equivocarse con los números. Y una artista que nunca pudo ver una planilla sin buscarle la belleza adentro.",
    "c5.p2": "Donde casi todos ven una grilla —<span class=\"curator__muted\">filas, columnas, decimales para entregar antes del viernes</span>—, yo veo otra cosa.",
    "c5.v1": "Veo a la persona que se fue de su pueblo.",
    "c5.v2": "La cosecha que no llegó.",
    "c5.v3": "La decisión que cambió mil vidas y terminó encogida en una celda gris.",
    "c5.v4": "Veo, casi siempre, <span class=\"highlight\">una historia que alguien dejó a medio contar.</span>",
    "c5.p3": "Me llamo <strong>Nashira Calvo</strong>. Me formé para el rigor: dos maestrías, quince años leyendo datos para organismos internacionales que deciden sobre países enteros. Aprendí a no equivocarme con los números —porque <span class=\"highlight\">un número mal leído termina en una decisión mal tomada</span>, y esas decisiones caen sobre la vida de miles de personas.",
    "c5.st1": "maestrías", "c5.st2": "años leyendo datos",
    "c5.p4": "Pero nunca los traté como una herramienta. <span class=\"highlight\">Los traté como un material.</span> Como la arcilla, el óleo: algo que, si lo trabajás con oficio y con paciencia, deja salir una forma que ya estaba adentro. A veces esa forma es una historia para leer y comprender. A veces la saco de la pantalla y se vuelve materia: un mural, un cuadro, un libro, objetos, datos que se pueden tocar.",
    "c5.p5": "Crecí entre Bolivia y Buenos Aires, que es aprender a leer el mundo desde dos orillas a la vez. Quizás por eso nunca me cerró elegir. Me lo pidieron muchas veces —<em>o economista, o artista</em>—. No pude.",
    "c5.duo1": "Rigor de economista.",
    "c5.duo2": "Ojo de artista.",
    "c5.p6": "Así que hice un estudio entero de esa rareza. Se llama <span class=\"highlight\">Ordinal</span>. Un museo de historias que, hasta hace poco, eran apenas números.",

    /* ── ginkgo ── */
    "c6.s1": "El ginkgo es el árbol más viejo que sigue en pie. Doscientos millones de años. Sobrevivió a lo que borró a casi todo lo demás —incluso a una bomba.",
    "c6.s2": "Cada otoño se vuelve dorado, entero, casi de un día para el otro. Y casi todos creemos que el otoño le regala ese color.",
    "c6.s3": "Mentira.",
    "c6.s4": "El dorado estuvo ahí siempre, abajo del verde, esperando. El árbol solo dejó de tapar lo que ya era.",
    "c6.s5": "En un organismo pasa exactamente lo mismo. El informe, la planilla, el PDF —todo ese verde técnico cubriendo lo que importa—. No agrego. No invento. No maquillo.<br><br><em>Corro el verde.</em>",
    "c6.s6": "Y aparece lo que siempre estuvo ahí: el impacto detrás de cada número, la historia que costó años reunir y que casi nadie alcanzó a leer.<br><strong>Eso es leer ordinal.</strong>",

    /* ── cta home ── */
    "cta.q": "¿Tenés un dato con una historia adentro, esperando que alguien la lea antes de que se apague?",
    "cta.fav": "Esa es, exactamente, mi parte favorita.",
    "cta.b1": "Ver la colección",
    "cta.b2": "Proponer un proyecto",

    /* ════════ colección · catálogo ════════ */
    "cat.eyebrow": "la colección · catálogo",
    "cat.title": "Las hojas.",
    "cat.subtitle": "Historias que dejaron de ser solo archivos.",
    "cat.intro1": "Todo árbol tiene su forma de guardar el año. El ginkgo lo hace en sus hojas: cada una es el registro de una estación, de un otoño que pasó. Este catálogo funciona igual.",
    "cat.intro2": "Acá vive la obra. Lo que ya se puede ver y lo que todavía viaja. Lo que nace de un encargo y lo que nace de adentro. Lo que se lee en una pantalla y lo que se toca con la mano.",
    "cat.intro3": "Tres salas. Una sola pregunta detrás de cada pieza: <span class=\"highlight\">¿qué estaban tratando de decir estos números?</span>",
    /* puertas + salas */
    "cat.r1.kicker": "sala i",
    "cat.r1.name": "Colección permanente",
    "cat.r1.sub": "Las piezas que nadie encargó",
    "cat.r1.count": "2 obras",
    "cat.r1.label": "Sala i · Colección permanente",
    "cat.r1.title": "Las piezas que nadie <em>encargó.</em>",
    "cat.r1.desc": "La Colección Permanente es la obra más propia de Ordinal. Piezas que no nacen de un encargo externo sino de una pregunta que el estudio no podía dejar sin responder. Nadie las pidió. Aparecieron porque había algo que valía la pena leer y nadie lo estaba leyendo. Son la razón por la que existe el estudio — no al revés.",
    "cat.o1.t": "El Estudio<br>del Propósito.",
    "cat.o1.tech": "Investigación cualitativa · Data storytelling · Podcast · Ordinal Studio · 2025",
    "cat.o1.p1": "El podcast With Purpose no era un show de entrevistas. Era un método de campo: escuchar, que es la forma más subestimada de leer. En cada conversación aparecía la misma pregunta debajo de todas las otras — qué significa trabajar en algo que importa, y cómo se mide eso cuando no hay un número que lo capture del todo.",
    "cat.o1.p2": "El Estudio del Propósito toma esa información cualitativa —fragmentos, silencios, frases que se repiten de boca en boca— y la cruza con research cuantitativo complementario para leer un patrón que estaba ahí, distribuido en decenas de horas de escucha, esperando que alguien lo ordenara.",
    "cat.o1.noteLabel": "Nota de la lectora",
    "cat.o1.quote": "Empecé a notar que todos describían lo mismo con palabras distintas. Eso, en investigación, es la señal más importante: cuando el lenguaje varía pero la estructura se repite, hay algo real adentro.",
    "cat.o2.t": "Las que<br>se van.",
    "cat.o2.tech": "Scrollytelling · Data storytelling · Estadística · Historias · Ordinal Studio · 2025",
    "cat.o2.p1": "En los últimos dos años, miles de mujeres dejaron de hacer lo que hacían. Algunas lo llamaron renuncia. Otras, reinvención. Muchas no lo llamaron de ninguna manera — simplemente se fueron, sin comunicado, sin anuncio, sin que nadie registrara bien el movimiento.",
    "cat.o2.p2": "Esta pieza lee ese movimiento. Cruza los datos estadísticos de la salida —tasas, sectores, edades, geografías— con las historias de las que se fueron: qué vieron venir, qué no pudieron ignorar, qué tiene que ver la IA con todo esto. Los números dicen cuántas. Las historias dicen por qué.",
    "cat.o2.noteLabel": "Nota de la lectora",
    "cat.o2.quote": "Había algo que los datos no alcanzaban a decir. Y había algo que las historias solas no podían probar. Esta pieza existe para leer las dos cosas a la vez.",
    "cat.r2.kicker": "sala ii",
    "cat.r2.name": "Ala de Historias",
    "cat.r2.sub": "Los datos que alguien tenía que contar",
    "cat.r2.count": "2 obras",
    "cat.r2.label": "Sala ii · Ala de Historias",
    "cat.r2.title": "Los datos que alguien <em>tenía que contar.</em>",
    "cat.r2.desc": "Esta ala se llena cuando un organismo, una institución o un equipo de investigación llega con la misma frase: tenemos esto desde hace años. Sabemos que importa. No sabemos cómo hacer que se entienda.",
    "cat.r2.desc2": "Lo que entra acá es eso: información que costó años, presupuesto y trabajo de mucha gente, y que vivía en formatos que casi nadie podía leer. No decoro datos. Los hago contar lo que vinieron a contar.",
    "cat.r2.desc3": "Las piezas que vas a ver acá tienen algo en común que tardé en notar: casi todas son sobre cosas que dependen del suelo. La tierra, lo que crece de ella, lo que dejamos de comer cuando deja de crecer, lo que pasa cuando el clima cambia las reglas. Quizás no sea casualidad — son los datos que el mundo más está necesitando leer ahora mismo.",
    "cat.r2.interLabel": "Nota de sala",
    "cat.r2.inter": "La obra de arriba pregunta qué decidimos sembrar. La siguiente pregunta qué pasa cuando el clima decide por nosotros.",
    "cat.o3.t": "Lo que se siembra<br>también se piensa.",
    "cat.o3.tech": "Scrollytelling · Agricultura nutricionalmente inteligente · Banco Mundial · 2025",
    "cat.o3.p1": "América Latina produce comida en cantidades históricas. Y a la vez tiene cifras de mala nutrición —obesidad, déficit de micronutrientes, hambre invisible— que crecen al mismo tiempo. No es una paradoja. Es un sistema. Lo que se siembra hoy decide qué se va a comer mañana, y nadie estaba leyendo esos dos lados del problema en el mismo idioma.",
    "cat.o3.p2": "Esta pieza traduce la evidencia del Banco Mundial sobre agricultura nutricionalmente inteligente —cultivos, biodiversidad, decisiones de política, datos de consumo— en una historia que conecta el surco con el plato. Para que cualquiera —ministro, productor, periodista, alguien curioso— pueda entender por qué algunas decisiones agrícolas son, en realidad, decisiones de salud pública.",
    "cat.o3.noteLabel": "Nota de la lectora",
    "cat.o3.quote": "La pregunta no era cuánto se produce. Era qué se produce, para quién, y qué pasa adentro del cuerpo de quien después se lo come.",
    "cat.o4.t": "El año en que El Niño<br>cambió la cosecha.",
    "cat.o4.tech": "Scrollytelling · Clima & agricultura · Organismo internacional · 2025",
    "cat.o4.p1": "Cada cierto número de años, una corriente del Pacífico se calienta unas pocas décimas de grado. Suena chico. No lo es. El Niño reordena todo lo que crece en el continente. Llueve donde no debería, se seca lo que tendría que estar verde, se adelantan las siembras y se atrasan las cosechas. Las decisiones del año dejan de servir.",
    "cat.o4.p2": "Esta pieza lee el fenómeno desde adentro de los datos: cómo afecta la productividad por cultivo y por país, qué regiones quedan más expuestas, qué pierde el productor que no lo vio venir y qué gana el que tuvo la información a tiempo. Es la lectura que necesitan los que deciden políticas y la que merecen los que dependen de la tierra para vivir.",
    "cat.o4.noteLabel": "Nota de la lectora",
    "cat.o4.quote": "Hay datos del clima que existen desde hace décadas. El trabajo no era encontrarlos. Era contarlos de manera que un ministerio y un productor de soja pudieran usar la misma página para entender el mismo año.",
    "cat.r3.kicker": "sala iii",
    "cat.r3.name": "Ala de Arte",
    "cat.r3.sub": "Cuando un dato se vuelve materia",
    "cat.r3.count": "1 obra",
    "cat.r3.label": "Sala iii · Ala de Arte",
    "cat.r3.title": "Cuando un dato <em>se vuelve materia.</em>",
    "cat.r3.desc": "Hay datos que no quieren ser leídos. Quieren ser tocados, mirados de cerca, rodeados a pie. Información que pide salir de la pantalla y volverse arcilla, papel, hilo, pared — algo frente a lo que uno se queda quieto un rato.",
    "cat.r3.desc2": "Esta ala es para eso. Aquí los números no se grafican: se encarnan. Una hoja de cerámica puede ser un dato. Una serie de manchas, una corriente. El mismo rigor de siempre, en otro estado de la materia.",
    "cat.o5.t": "Fenología<br>del sur.",
    "cat.o5.tech": "Mural · Cerámica · 168 hojas · Buenos Aires · Otoño 2027",
    "cat.o5.p1": "Esta obra empezó como una pregunta de chica. Cada otoño en Buenos Aires hay un día en que el jacarandá se queda quieto, el plátano se enciende, el ginkgo se vuelve oro, el liquidámbar se va al rojo. Nunca el mismo día. Nunca en el mismo orden. Y sin embargo, año tras año, el barrio entero cambia de color.",
    "cat.o5.p2": "Quise saber qué había detrás de eso. Qué decide que una hoja deje de ser verde. Resulta que abajo de cada color hay una decisión química — la clorofila se retira y deja ver los pigmentos que estuvieron escondidos todo el año. El otoño no agrega color. Lo revela.",
    "cat.o5.q1": "¿Y si la información que hay detrás de un otoño fuera, también, una obra de arte?",
    "cat.o5.p3": "Fenología del sur es esa pregunta hecha cerámica. Cuatro especies, doce semanas, una hoja modelada a mano por cada lectura: el porcentaje de verde que cedió, el pigmento que salió a la luz, la temperatura mínima del día, el agua que cayó esa noche. Cada hoja es un dato. La fila de hojas es la semana. El mural entero es el año.",
    "cat.o5.p4": "Visto de lejos parece un poema sobre el otoño porteño. Visto de cerca es lo que es: un dataset hecho con las manos. Una base de datos donde cada fila pesa, se rompe si se cae, y tiene un color que no se eligió desde un menú — se calculó.",
    "cat.o5.q2": "Una hoja pierde el color. ¿Cuánta información cabe en eso? ¿Y qué pasa si la pongo en una pared, una al lado de la otra, hasta llenarla?",
    "cat.o5.p5": "El mural se monta en mayo de 2027, cuando empiece el otoño porteño, y crece semana a semana hasta junio. Lo que ves no es una representación del otoño. Es el otoño traducido a otro idioma — el de la materia que se queda.",
    "cat.o5.sp1": "jacarandá",
    "cat.o5.sp2": "plátano",
    "cat.o5.sp3": "ginkgo",
    "cat.o5.sp4": "liquidámbar",
    "cat.o5.k1": "Técnica",
    "cat.o5.v1": "Cerámica esmaltada, modelado a mano",
    "cat.o5.k2": "Especies",
    "cat.o5.v2": "Jacarandá, plátano, ginkgo, liquidámbar",
    "cat.o5.k3": "Período",
    "cat.o5.v3": "12 semanas (mayo–junio 2027)",
    "cat.o5.k4": "Variables",
    "cat.o5.v4": "Color foliar · temperatura mínima · precipitación · pigmento revelado",
    "cat.o5.k5": "Formato",
    "cat.o5.v5": "Mural · aprox. 168 hojas",
    "cat.o5.k6": "Origen",
    "cat.o5.v6": "Obra autoral del estudio. Nadie la encargó.",
    /* estados */
    "cat.st.available": "Disponible",
    "cat.st.travel": "En viaje",
    "cat.st.process": "En proceso",
    /* obras */
    "cat.cta": "¿Tenés un dato con una historia adentro, <em>esperando que alguien la lea</em>?",
    "cat.ctaBtn": "Proponer un proyecto",

    /* ════════ proponer un proyecto ════════ */
    "prop.eyebrow": "Hablemos",
    "prop.title": "Cuéntame qué dato <em>necesitas que se lea.</em>",
    "prop.intro": "Si tu organización tiene información que merece encontrar a su lector —un estudio, una base de datos, un informe que vive encerrado en un PDF— este es el lugar para escribirme.",
    "prop.intro2": "Trabajo con organismos internacionales, instituciones, fundaciones y equipos de investigación que ya saben que sus datos importan, y que necesitan que ese valor se vuelva legible para audiencias más amplias. Esa traducción es lo que hace el estudio.",
    "prop.stepsTitle": "Cómo trabajamos juntos",
    "prop.s1t": "Una primera lectura.",
    "prop.s1d": "Reviso el material con tiempo. Acordamos una reunión preliminar. Cruzo información. Identifico la historia que el conjunto de datos ya contiene y su potencial narrativo para la audiencia que tienen en mente.",
    "prop.s2t": "Una respuesta en una semana.",
    "prop.s2d": "Les envío un primer documento de lectura: qué veo en los datos, qué tipo de pieza podría darles mejor llegada, y una primera estimación de alcance, tiempos y honorarios.",
    "prop.s3t": "Una conversación para decidir.",
    "prop.s3d": "Una reunión para revisar la propuesta y ajustarla a sus objetivos. Si el proyecto encaja con lo que el estudio hace bien, avanzamos. Si no, lo digo con la misma claridad.",
    "prop.formKicker": "Para iniciar la conversación",
    "prop.formTitle": "El camino corto: escríbeme.",
    "prop.formSub": "Con estos datos tengo lo suficiente para hacer una primera lectura. Respondo dentro de la semana hábil siguiente.",
    "prop.f.name": "Nombre y cargo",
    "prop.f.namePh": "María García, directora de comunicación",
    "prop.f.email": "Correo de contacto",
    "prop.f.emailPh": "maria.garcia@institucion.org",
    "prop.f.org": "Organización",
    "prop.f.orgPh": "Organismo, institución, programa o área",
    "prop.f.type": "Qué tipo de pieza tienen en mente",
    "prop.f.t1": "Data storytelling",
    "prop.f.t2": "Pieza de data art",
    "prop.f.t3": "Abierto a propuesta",
    "prop.f.msg": "Sobre el proyecto y los datos",
    "prop.f.msgPh": "Cuéntenme del material disponible, la audiencia que esperan alcanzar y, si lo tienen, el horizonte de tiempo. Las preguntas abiertas también son bienvenidas — muchas piezas empiezan así.",
    "prop.send": "Enviar →",
    "prop.sending": "Enviando…",
    "prop.note": "Uso tus datos solo para responderte. Nada más.",
    "prop.error": "Algo falló al enviar. Escríbeme directo a hola@ordinalstudio.co.",
    "prop.okT": "Tu mensaje ya está en camino.",
    "prop.okD": "Gracias por escribirme. Hago una primera lectura y respondo dentro de la semana hábil siguiente.",
    "prop.okBtn": "Mientras tanto, conocé la colección",
  },

  en: {
    /* ── nav / footer ── */
    "nav.collection": "The collection",
    "nav.propose": "Propose a project",
    "footer.tag": "A museum of data stories. Pulling back the green so you can see the gold you already had.",
    "footer.rights": "all leaves reserved",

    /* ── home · hero ── */
    "hero.eyebrow": "museum of data stories",
    "hero.l1": "No data point",
    "hero.l2": "is just a <em>number</em>.",
    "hero.p1": "I'll confess something odd for an econometrician: numbers, on their own, bore me. What never bores me is what they hide.",
    "hero.p2": "A <span class=\"highlight\">0.3</span> can be a family. One percentage point, an entire town. Any row in a spreadsheet can be a person standing on a corner nobody asked how they got there.",
    "hero.p3": "<span class=\"highlight\">I read data to find that person.</span>",
    "hero.cta1": "See the collection",
    "hero.cta2": "Propose a project",
    "hero.scroll": "I'll reveal the world of ordinal to you as you scroll down",
    "quotes": "“I don't add. I don't invent. I pull back the green.” · “The gold was always there.” · “I don't decorate information. I make it speak.” · “A data point can be a person on a corner.” · ",

    /* ── museum plaques ── */
    "plaque.ordinal": "Room I",
    "plaque.curator": "The curator",
    "wing.read": "reading wing",
    "wing.art": "works wing",

    /* ── ordinal variable ── */
    "c1.p1": "There is a kind of data that gives me hope. It's called an <span class=\"highlight\">ordinal variable</span>.",
    "c1.p2": "It measures what has no exact number, yet still has an order. Pain from one to ten. “A little, quite a lot, too much.” First, second, third.",
    "c1.s1": "first", "c1.s2": "second", "c1.s3": "third",
    "c1.p3": "It doesn't tell you how much. It tells you what weighs more than what. It's the only kind of data that accepts, from the start, that some things can't be counted —and still deserve to be measured.",
    "c1.p4": "The studio is named after it for that reason. Because I work right on that edge: <span class=\"highlight\">where the number gives up and the story begins.</span>",

    /* ── silent data ── */
    "c2.phrase": "Most of the world's data dies <span class=\"highlight\">silent</span>.",
    "c2.p1": "And yet, almost no one reads them.",
    "c2.p2": "Information that took years, budgets, and many people's work, locked inside a PDF that three people opened and two understood.",
    "c2.p3": "It's a <span class=\"highlight\">waste</span> of time, knowledge, and money.",
    "c2.p4": "Inside there are numbers that could change a policy, move a budget, sustain a program about to collapse. And they go out without saying a word —because they're written in a language only those who already knew the answer can speak.",

    /* ── reading wing ── */
    "c3.p1": "My job is to get there before they go out.",
    "c3.p2": "I take that data —dense, technical, illegible— and find the story it already had inside. I don't invent it. I uncover it. And I tell it in a way that needs no dictionary: understood with the body, showing the impact that was always in the numbers and that no one had stopped to look at.",
    "c3.p3": "I don't decorate information. <span class=\"highlight\">I make it tell a story.</span>",
    "c3.p4": "For organizations, institutions, and multilaterals that have something enormous to say, and are tired of not being heard.",
    "c3.badge": "data storytelling",

    /* ── works wing ── */
    "c4.p1": "Sometimes a story doesn't want to be read. <span class=\"highlight\">It wants to be looked at.</span>",
    "c4.p2": "When the information is so rich it wants to transcend the screen or interactivity, I give it a body. I turn it into installation: sometimes something you contemplate in silence; other times something you can bring close, hang on a wall, or hold in your hands.",
    "c4.p3": "There econometrics and art stop being two different things.",
    "c4.p4": "A set of numbers that was a table stops being abstract. <span class=\"highlight\">It becomes form, color, something you can observe and admire</span> —connecting what you see with the information behind it. That feels magical to me.",
    "c4.badge": "data art",

    /* ── marquee ── */
    "marquee": "uncover\u2002·\u2002tell\u2002·\u2002look\u2002·\u2002touch\u2002·\u2002reveal\u2002·\u2002",

    /* ── reading wing demos ── */
    "demo.read.t0": "final_report_v47.pdf",
    "demo.read.m0": "3 people opened it",
    "demo.read.m1": "dense · technical · illegible",
    "demo.read.t2": "story",
    "demo.read.t3": "The data learned to speak.",

    /* ── works wing demos ── */
    "demo.art.m0": "a cell · a table",
    "demo.art.m1": "transcends the screen",
    "demo.art.m2": "contemplate · hang · touch",
    "demo.art.t3": "abstract → form → meaning",

    /* ── curator ── */
    "c5.hook": "I'll tell you what really happens when I sit down in front of a database.",
    "c5.p1": "I am <span class=\"highlight\">two things that almost never go together</span>. An economist who learned not to get the numbers wrong. And an artist who could never look at a spreadsheet without searching for the beauty inside it.",
    "c5.p2": "Where almost everyone sees a grid —<span class=\"curator__muted\">rows, columns, decimals to deliver before Friday</span>—, I see something else.",
    "c5.v1": "I see the person who left their town.",
    "c5.v2": "The harvest that never came.",
    "c5.v3": "The decision that changed a thousand lives and ended up shrunk inside a gray cell.",
    "c5.v4": "I see, almost always, <span class=\"highlight\">a story someone left half-told.</span>",
    "c5.p3": "My name is <strong>Nashira Calvo</strong>. I trained for rigor: two master's degrees, fifteen years reading data for international organizations that decide over entire countries. I learned not to get the numbers wrong —because <span class=\"highlight\">a misread number ends in a bad decision</span>, and those decisions fall on the lives of thousands of people.",
    "c5.st1": "master's degrees", "c5.st2": "years reading data",
    "c5.p4": "But I never treated them as a tool. <span class=\"highlight\">I treated them as a material.</span> Like clay, like oil paint: something that, if you work it with craft and patience, lets a form come out that was already inside. Sometimes that form is a story to read and understand. Sometimes I take it off the screen and it becomes matter: a mural, a painting, a book, objects, data you can touch.",
    "c5.p5": "I grew up between Bolivia and Buenos Aires, which is learning to read the world from two shores at once. Maybe that's why I never settled for choosing. I was asked many times —<em>economist or artist</em>—. I couldn't.",
    "c5.duo1": "An economist's rigor.",
    "c5.duo2": "An artist's eye.",
    "c5.p6": "So I built an entire studio around that rarity. It's called <span class=\"highlight\">Ordinal</span>. A museum of stories that, until recently, were barely numbers.",

    /* ── ginkgo ── */
    "c6.s1": "The ginkgo is the oldest tree still standing. Two hundred million years. It survived what erased almost everything else —including a bomb.",
    "c6.s2": "Every autumn it turns gold, all at once, almost overnight. And most of us believe autumn gives it that color.",
    "c6.s3": "It doesn't.",
    "c6.s4": "The gold was always there, underneath the green, waiting. The tree only stopped covering what was already there.",
    "c6.s5": "The same thing happens inside an institution. The report, the spreadsheet, the PDF —all that technical green covering what matters—. I don't add. I don't invent. I don't dress it up.<br><br><em>I pull back the green.</em>",
    "c6.s6": "And what was always there appears: the impact behind every number, the story that took years to gather and that almost no one got to read.<br><strong>That is reading ordinal.</strong>",

    /* ── home cta ── */
    "cta.q": "Do you have a data point with a story inside, waiting for someone to read it before it goes out?",
    "cta.fav": "That is, exactly, my favorite part.",
    "cta.b1": "See the collection",
    "cta.b2": "Propose a project",

    /* ════════ collection · catalogue ════════ */
    "cat.eyebrow": "the collection · catalogue",
    "cat.title": "The leaves.",
    "cat.subtitle": "Stories that stopped being just files.",
    "cat.intro1": "Every tree has its own way of keeping the year. The ginkgo does it in its leaves: each one is the record of a season, of an autumn that passed. This catalogue works the same way.",
    "cat.intro2": "This is where the work lives. What can already be seen and what is still traveling. What is born from a commission and what is born from within. What is read on a screen and what is touched with the hand.",
    "cat.intro3": "Three rooms. A single question behind every piece: <span class=\"highlight\">what were these numbers trying to say?</span>",
    "cat.r1.kicker": "room i",
    "cat.r1.name": "Permanent collection",
    "cat.r1.sub": "The pieces no one commissioned",
    "cat.r1.count": "2 works",
    "cat.r1.label": "Room i · Permanent collection",
    "cat.r1.title": "The pieces no one <em>commissioned.</em>",
    "cat.r1.desc": "The Permanent Collection is Ordinal's most personal work. Pieces that aren't born from an external commission but from a question the studio couldn't leave unanswered. No one asked for them. They appeared because there was something worth reading and no one was reading it. They are the reason the studio exists — not the other way around.",
    "cat.o1.t": "The Study<br>of Purpose.",
    "cat.o1.tech": "Qualitative research · Data storytelling · Podcast · Ordinal Studio · 2025",
    "cat.o1.p1": "The podcast With Purpose wasn't an interview show. It was a field method: listening, the most underrated way of reading. In every conversation the same question appeared beneath all the others — what it means to work on something that matters, and how you measure that when there's no number that fully captures it.",
    "cat.o1.p2": "The Study of Purpose takes that qualitative information —fragments, silences, phrases repeated from mouth to mouth— and cross-references it with complementary quantitative research to read a pattern that was already there, scattered across dozens of hours of listening, waiting for someone to put it in order.",
    "cat.o1.noteLabel": "Reader's note",
    "cat.o1.quote": "I started to notice that everyone described the same thing with different words. In research, that's the most important signal: when the language varies but the structure repeats, there's something real inside.",
    "cat.o2.t": "The ones<br>who leave.",
    "cat.o2.tech": "Scrollytelling · Data storytelling · Statistics · Stories · Ordinal Studio · 2025",
    "cat.o2.p1": "In the last two years, thousands of women stopped doing what they were doing. Some called it resignation. Others, reinvention. Many didn't call it anything at all — they simply left, with no statement, no announcement, with no one quite registering the movement.",
    "cat.o2.p2": "This piece reads that movement. It cross-references the statistical data of the exit —rates, sectors, ages, geographies— with the stories of those who left: what they saw coming, what they couldn't ignore, what AI has to do with all of it. The numbers say how many. The stories say why.",
    "cat.o2.noteLabel": "Reader's note",
    "cat.o2.quote": "There was something the data couldn't quite say. And something the stories alone couldn't prove. This piece exists to read both things at once.",
    "cat.r2.kicker": "room ii",
    "cat.r2.name": "Wing of Stories",
    "cat.r2.sub": "The data someone had to tell",
    "cat.r2.count": "2 works",
    "cat.r2.label": "Room ii · Wing of Stories",
    "cat.r2.title": "The data someone <em>had to tell.</em>",
    "cat.r2.desc": "This wing fills up when an organization, an institution, or a research team arrives with the same sentence: we've had this for years. We know it matters. We don't know how to make it understood.",
    "cat.r2.desc2": "That's what comes in here: information that cost years, budget, and the work of many people, and that lived in formats almost no one could read. I don't decorate data. I make it tell what it came to tell.",
    "cat.r2.desc3": "The pieces you'll see here have something in common that took me a while to notice: almost all of them are about things that depend on the soil. The land, what grows from it, what we stop eating when it stops growing, what happens when the climate changes the rules. Maybe it's no coincidence — they're the data the world most needs to read right now.",
    "cat.r2.interLabel": "Room note",
    "cat.r2.inter": "The work above asks what we decide to plant. The next one asks what happens when the climate decides for us.",
    "cat.o3.t": "What is sown<br>is also thought.",
    "cat.o3.tech": "Scrollytelling · Nutrition-smart agriculture · World Bank · 2025",
    "cat.o3.p1": "Latin America produces food in historic quantities. And at the same time it has malnutrition figures —obesity, micronutrient deficiency, invisible hunger— growing at the same rate. It's not a paradox. It's a system. What is sown today decides what will be eaten tomorrow, and no one was reading those two sides of the problem in the same language.",
    "cat.o3.p2": "This piece translates the World Bank's evidence on nutrition-smart agriculture —crops, biodiversity, policy decisions, consumption data— into a story that connects the furrow with the plate. So that anyone —a minister, a farmer, a journalist, a curious person— can understand why some agricultural decisions are, in fact, public health decisions.",
    "cat.o3.noteLabel": "Reader's note",
    "cat.o3.quote": "The question wasn't how much is produced. It was what is produced, for whom, and what happens inside the body of whoever eats it afterward.",
    "cat.o4.t": "The year El Niño<br>changed the harvest.",
    "cat.o4.tech": "Scrollytelling · Climate & agriculture · International organization · 2025",
    "cat.o4.p1": "Every so many years, a Pacific current warms by a few tenths of a degree. It sounds small. It isn't. El Niño rearranges everything that grows on the continent. It rains where it shouldn't, what should be green dries out, planting moves up and harvests fall behind. The year's decisions stop working.",
    "cat.o4.p2": "This piece reads the phenomenon from inside the data: how it affects productivity by crop and by country, which regions are most exposed, what the farmer who didn't see it coming loses and what the one who had the information in time gains. It's the reading that policymakers need and the one that those who depend on the land to live deserve.",
    "cat.o4.noteLabel": "Reader's note",
    "cat.o4.quote": "There is climate data that has existed for decades. The work wasn't finding it. It was telling it in a way that a ministry and a soy farmer could use the same page to understand the same year.",
    "cat.r3.kicker": "room iii",
    "cat.r3.name": "Wing of Art",
    "cat.r3.sub": "When data becomes matter",
    "cat.r3.count": "1 work",
    "cat.r3.label": "Room iii · Wing of Art",
    "cat.r3.title": "When data <em>becomes matter.</em>",
    "cat.r3.desc": "There is data that doesn't want to be read. It wants to be touched, looked at up close, walked around. Information that asks to leave the screen and become clay, paper, thread, wall — something you stand still in front of for a while.",
    "cat.r3.desc2": "This wing is for that. Here the numbers aren't graphed: they're embodied. A ceramic leaf can be a data point. A series of stains, a current. The same rigor as always, in another state of matter.",
    "cat.o5.t": "Phenology<br>of the south.",
    "cat.o5.tech": "Mural · Ceramic · 168 leaves · Buenos Aires · Autumn 2027",
    "cat.o5.p1": "This work began as a question I had as a girl. Every autumn in Buenos Aires there's a day when the jacaranda stays still, the plane tree catches fire, the ginkgo turns to gold, the sweetgum goes red. Never the same day. Never in the same order. And yet, year after year, the whole neighborhood changes color.",
    "cat.o5.p2": "I wanted to know what was behind that. What decides that a leaf stops being green. It turns out that beneath each color there's a chemical decision — the chlorophyll withdraws and reveals the pigments that were hidden all year. Autumn doesn't add color. It reveals it.",
    "cat.o5.q1": "What if the information behind an autumn were, also, a work of art?",
    "cat.o5.p3": "Phenology of the south is that question made ceramic. Four species, twelve weeks, one leaf hand-modeled for each reading: the percentage of green that gave way, the pigment that came to light, the day's minimum temperature, the water that fell that night. Each leaf is a data point. The row of leaves is the week. The whole mural is the year.",
    "cat.o5.p4": "From afar it looks like a poem about the Buenos Aires autumn. Up close it's what it is: a dataset made by hand. A database where each row has weight, breaks if it falls, and has a color that wasn't chosen from a menu — it was calculated.",
    "cat.o5.q2": "A leaf loses its color. How much information fits in that? And what happens if I put it on a wall, one beside the other, until it's full?",
    "cat.o5.p5": "The mural is mounted in May 2027, when the Buenos Aires autumn begins, and grows week by week until June. What you see is not a representation of autumn. It's autumn translated into another language — the one of matter that stays.",
    "cat.o5.sp1": "jacaranda",
    "cat.o5.sp2": "plane tree",
    "cat.o5.sp3": "ginkgo",
    "cat.o5.sp4": "sweetgum",
    "cat.o5.k1": "Technique",
    "cat.o5.v1": "Glazed ceramic, hand-modeled",
    "cat.o5.k2": "Species",
    "cat.o5.v2": "Jacaranda, plane tree, ginkgo, sweetgum",
    "cat.o5.k3": "Period",
    "cat.o5.v3": "12 weeks (May–June 2027)",
    "cat.o5.k4": "Variables",
    "cat.o5.v4": "Leaf color · minimum temperature · precipitation · revealed pigment",
    "cat.o5.k5": "Format",
    "cat.o5.v5": "Mural · approx. 168 leaves",
    "cat.o5.k6": "Origin",
    "cat.o5.v6": "Authorial work of the studio. No one commissioned it.",
    "cat.st.available": "Available",
    "cat.st.travel": "Traveling",
    "cat.st.process": "In progress",
    "cat.cta": "Do you have a data point with a story inside, <em>waiting for someone to read it</em>?",
    "cat.ctaBtn": "Propose a project",

    /* ════════ propose a project ════════ */
    "prop.eyebrow": "Let's talk",
    "prop.title": "Tell me what data <em>needs to be read.</em>",
    "prop.intro": "If your organization has information that deserves to find its reader —a study, a database, a report locked inside a PDF— this is the place to write to me.",
    "prop.intro2": "I work with international organizations, institutions, foundations, and research teams that already know their data matters, and that need that value to become legible for wider audiences. That translation is what the studio does.",
    "prop.stepsTitle": "How we work together",
    "prop.s1t": "A first reading.",
    "prop.s1d": "I review the material carefully. We agree on a preliminary meeting. I cross-reference information. I identify the story the dataset already contains and its narrative potential for the audience you have in mind.",
    "prop.s2t": "A reply within a week.",
    "prop.s2d": "I send you a first reading document: what I see in the data, what kind of piece could give it the best reach, and a first estimate of scope, timing, and fees.",
    "prop.s3t": "A conversation to decide.",
    "prop.s3d": "A meeting to review the proposal and adjust it to your goals. If the project fits what the studio does well, we move forward. If not, I'll say so with the same clarity.",
    "prop.formKicker": "To start the conversation",
    "prop.formTitle": "The short path: write to me.",
    "prop.formSub": "With these details I have enough to do a first reading. I reply within the following business week.",
    "prop.f.name": "Name and role",
    "prop.f.namePh": "María García, communications director",
    "prop.f.email": "Contact email",
    "prop.f.emailPh": "maria.garcia@institution.org",
    "prop.f.org": "Organization",
    "prop.f.orgPh": "Organization, institution, program, or area",
    "prop.f.type": "What kind of piece do you have in mind",
    "prop.f.t1": "Data storytelling",
    "prop.f.t2": "A data art piece",
    "prop.f.t3": "Open to a proposal",
    "prop.f.msg": "About the project and the data",
    "prop.f.msgPh": "Tell me about the available material, the audience you hope to reach, and, if you have one, the timeframe. Open questions are welcome too — many pieces start that way.",
    "prop.send": "Send →",
    "prop.sending": "Sending…",
    "prop.note": "I only use your details to reply to you. Nothing else.",
    "prop.error": "Something went wrong. Write to me directly at hola@ordinalstudio.co.",
    "prop.okT": "Your message is on its way.",
    "prop.okD": "Thank you for writing. I'll do a first reading and reply within the following business week.",
    "prop.okBtn": "Meanwhile, explore the collection",
  },
};

/* Títulos de pestaña por página */
const PAGE_TITLES = {
  home:       { es: "ordinal — museo de historias de datos", en: "ordinal — museum of data stories" },
  collection: { es: "ordinal — la colección", en: "ordinal — the collection" },
  propose:    { es: "ordinal — proponer un proyecto", en: "ordinal — propose a project" },
};

function getLang() {
  return localStorage.getItem("ordinal-lang") || "es";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;
  localStorage.setItem("ordinal-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll("[data-lang-opt]").forEach((el) => {
    el.classList.toggle("is-on", el.getAttribute("data-lang-opt") === lang);
  });

  const page = document.body.dataset.page;
  if (PAGE_TITLES[page]) document.title = PAGE_TITLES[page][lang];

  document.dispatchEvent(new CustomEvent("ordinal:lang", { detail: { lang } }));
}
