/* ============================================================
   STOCKIA — i18n (Internationalization)
   Languages: Español (es) | English (en)
   Mismo patrón que el i18n.js de Qullqa (misma API pública:
   i18n.t / i18n.setLang / i18n.init / i18n.currentLang), solo con
   las llaves y textos propios de StockIA / DataBite Corp.
   ============================================================ */

const i18n = (() => {
  const translations = {
    es: {
      /* ── Navbar ── */
      'nav.home':     'Inicio',
      'nav.features': 'Características',
      'nav.pricing':  'Precios',
      'nav.about':    'Nosotros',
      'login.tag':    'Iniciar sesión',
      'nav.demo':     'Solicitar demo',

      /* ── Hero (index) ── */
      'hero.badge':           'DataBite Corp · Inventario impulsado por IA',
      'hero.title.line1':     'Predicción de demanda e inventario inteligente para tu',
      'hero.title.highlight': 'restaurante',
      'hero.desc':            'StockIA aprende de tus ventas históricas, el clima y la afluencia de comensales para decirte qué preparar, cuánto comprar y cuándo actuar — con sensores IoT que cuidan tu cocina las 24 horas.',
      'hero.cta.primary':     'Optimiza tu inventario →',
      'hero.cta.secondary':   'Ver cómo funciona',
      'hero.stat1.val':       '−25%',
      'hero.stat1.lbl':       'Desperdicio de alimentos*',
      'hero.stat2.val':       '+18%',
      'hero.stat2.lbl':       'Margen operativo estimado*',
      'hero.stat3.val':       '<5s',
      'hero.stat3.lbl':       'Descuento de insumos por venta',

      /* ── Stats bar (index) ── */
      'stats.s1.val': '30%*',   'stats.s1.lbl': 'de insumos comprados se desperdicia',
      'stats.s2.val': '1 de 3*','stats.s2.lbl': 'restaurantes sin sistema predictivo',
      'stats.s3.val': '−20%*',  'stats.s3.lbl': 'de pérdidas evitables con IA',
      'stats.s4.val': '24/7',   'stats.s4.lbl': 'monitoreo IoT de cocina y almacén',
      'stats.note': '* Cifras referenciales de ejemplo — reemplazar con datos reales una vez validados con el estudio de mercado.',

      /* ── Segments (index) ── */
      'seg.label':        '¿Para quién es StockIA?',
      'seg.owner.name':   'Dueños y CEOs de restaurante',
      'seg.owner.desc':   'Visualiza el estado real de tu negocio: inventario, mermas y rentabilidad en un solo dashboard ejecutivo, sin depender de reportes manuales.',
      'seg.manager.name': 'Administradores y jefes de cocina',
      'seg.manager.desc': 'Controla el día a día: recetas, stock de insumos, alertas de vencimiento y tareas del equipo, todo en un solo lugar.',

      /* ── Features (index) ── */
      'feat.tag':      'Funcionalidades',
      'feat.title':    'Todo lo que necesita tu restaurante',
      'feat.subtitle': 'Funcionalidades pensadas para reducir el desperdicio, anticipar la demanda y dar visibilidad total sobre tu operación diaria.',
      'feat.f1.name':  'Inventario Inteligente',
      'feat.f1.desc':  'Controla el stock en tiempo real, agrega o edita insumos y descuenta automáticamente los ingredientes de cada receta vendida.',
      'feat.f1.tag':   'Gestión de stock',
      'feat.f2.name':  'Predicción de Demanda con IA',
      'feat.f2.desc':  'Modelos de Machine Learning que aprenden de tus ventas y patrones de asistencia. Ej.: "Los viernes aumenta la demanda de pizza en 30%, prepara más masa desde la mañana".',
      'feat.f2.tag':   'Machine Learning',
      'feat.f3.name':  'Recomendaciones Automáticas',
      'feat.f3.desc':  'Alertas de compra de insumos antes de que falten y sugerencias de menú según popularidad y estacionalidad.',
      'feat.f3.tag':   'Compras inteligentes',
      'feat.f4.name':  'Monitoreo IoT de Cocina',
      'feat.f4.desc':  'Sensores de ocupación y electrodomésticos que detectan puertas de refrigerador abiertas, posibles fallas de equipos y flujo de clientes en tiempo real.',
      'feat.f4.tag':   'Hardware conectado',
      'feat.f5.name':  'Roles y Permisos',
      'feat.f5.desc':  'Configura roles para dueño, administrador, cocina y caja, con accesos distintos según la responsabilidad de cada persona en tu restaurante.',
      'feat.f5.tag':   'Control de equipo',
      'feat.f6.name':  'Sostenibilidad y Gamificación',
      'feat.f6.desc':  'Métricas de reducción de desperdicio y logros para tu equipo: "Redujeron el desperdicio un 20% este mes".',
      'feat.f6.tag':   'Impacto medible',
      'feat.viewall':  'Ver todas las características →',

      /* ── Diferenciadores (index) ── */
      'diff.tag':      'Diferenciadores',
      'diff.title':    'Más que un inventario',
      'diff.subtitle': 'StockIA va más allá del control de stock: convierte los datos de tu restaurante en decisiones y en resultados visibles para tu equipo.',
      'diff.d1.title': 'Gamificación',
      'diff.d1.text':  'Logros y reconocimientos para tu equipo cuando reducen el desperdicio o mejoran la rotación de inventario.',
      'diff.d2.title': 'Sostenibilidad',
      'diff.d2.text':  'Métricas de impacto ambiental que muestran cuánta comida se dejó de desperdiciar mes a mes.',
      'diff.d3.title': 'Aprende de tu restaurante',
      'diff.d3.text':  'La IA se entrena con los datos propios de tu negocio — tus platos, tus clientes y tu estacionalidad — no con promedios genéricos de la industria.',

      /* ── Integraciones (index) ── */
      'integ.tag':      'Integraciones',
      'integ.title':    'Se conecta con el ecosistema que ya usas',
      'integ.subtitle': 'Como parte de la arquitectura de StockIA se evalúa la integración con un servicio externo. Estas son las opciones en evaluación por el equipo (pendiente de decisión final).',
      'integ.i1.name': 'Google Maps API',
      'integ.i1.desc': 'Ubicación del restaurante y análisis de flujo de clientes por zona.',
      'integ.i2.name': 'OpenWeather API',
      'integ.i2.desc': 'Correlaciona el clima con la demanda, ej. más sopas en días fríos.',
      'integ.i3.name': 'Stripe / PayPal',
      'integ.i3.desc': 'Pagos y suscripciones para el acceso al software StockIA.',
      'integ.i4.name': 'Twilio / SendGrid',
      'integ.i4.desc': 'Alertas críticas de inventario e IoT por SMS o correo electrónico.',
      'integ.status':  'En evaluación',

      /* ── Portfolio (index) ── */
      'port.tag':      'Portafolio',
      'port.title':    'La plataforma en acción',
      'port.subtitle': 'Vistas de referencia de la futura Web Application de StockIA — dashboard, predicciones, recetas y alertas.',
      'port.tab1':     'Todas las vistas',
      'port.tab2':     'Inventario',
      'port.tab3':     'IA & IoT',
      'port.p1.name':  'Dashboard principal',
      'port.p1.desc':  'Resumen visual de inventario, predicciones y alertas',
      'port.p2.name':  'Predicción de Demanda',
      'port.p2.desc':  'Proyección semanal por plato según historial, clima y estacionalidad',
      'port.p3.name':  'Recetas y Descuento Automático',
      'port.p3.desc':  'Vincula cada plato del menú con sus insumos para descontar stock al vender',
      'port.p4.name':  'Sistema de Alertas IoT',
      'port.p4.desc':  'Notificaciones de ocupación, fallas de equipos y consumo energético',

      /* ── Video "About the Product" (index) ── */
      'vid.tag':      'Producto',
      'vid.title':    'Mira StockIA en acción',
      'vid.sub':      'Descubre cómo StockIA transforma la gestión de inventario en tu restaurante.',
      'vid.ph.title': 'Video demostrativo próximamente',
      'vid.ph.text':  'Aquí se incrustará el video "About the Product" de StockIA una vez grabado y publicado.',

      /* ── CTA Banner (todas las páginas) ── */
      'cta.title': 'Empieza a optimizar tu inventario hoy',
      'cta.sub':   'Agenda una demo personalizada para tu restaurante. Sin tarjeta de crédito ni compromiso.',
      'cta.btn1':  'Solicitar demo',
      'cta.btn2':  'Optimiza tu inventario →',

      /* ── Features page ── */
      'fp.tag':   'Características',
      'fp.title': 'Todo lo que necesitas, en un solo lugar',
      'fp.sub':   'Tu restaurante merece un ecosistema completo de gestión, no solo una hoja de cálculo.',
      'fp.f1.name': 'Inventario Inteligente',
      'fp.f1.desc': 'Registra entradas y salidas de insumos y vincula cada plato del menú con su receta. Al vender un producto, el stock se descuenta automáticamente.',
      'fp.f1.tag':  'Gestión de stock',
      'fp.f2.name': 'Predicción de Demanda con IA',
      'fp.f2.desc': 'Modelos de Machine Learning que analizan tus ventas históricas, el clima y la asistencia para anticipar cuánto vas a vender de cada plato.',
      'fp.f2.tag':  'Machine Learning',
      'fp.f3.name': 'Recomendaciones Automáticas',
      'fp.f3.desc': 'Alertas de compra antes de que falten insumos y sugerencias de menú según popularidad y estacionalidad.',
      'fp.f3.tag':  'Compras inteligentes',
      'fp.f4.name': 'Monitoreo IoT de Cocina',
      'fp.f4.desc': 'Sensores de ocupación y de electrodomésticos que detectan puertas abiertas, fallas de equipos (ej. un horno que consume más energía de lo normal) y flujo de clientes.',
      'fp.f4.tag':  'Hardware conectado',
      'fp.f5.name': 'Roles y Permisos',
      'fp.f5.desc': 'Define qué puede ver y hacer cada persona: dueño, administrador, cocina o caja, con un dashboard adaptado a cada rol.',
      'fp.f5.tag':  'Control de equipo',
      'fp.f6.name': 'Sostenibilidad y Gamificación',
      'fp.f6.desc': 'Métricas de reducción de desperdicio y logros visibles para el equipo, para mantener el hábito de un inventario bien administrado.',
      'fp.f6.tag':  'Impacto medible',
      'how.tag':    'Cómo funciona',
      'how.title':  'Empieza en minutos',
      'how.sub':    'Sin instalaciones complicadas. Configura tu restaurante y comienza a ver predicciones desde el primer día.',
      'how.s1.title': 'Registra tu restaurante',
      'how.s1.desc':  'Crea tu cuenta y configura los datos básicos de tu restaurante y tu equipo.',
      'how.s2.title': 'Carga tu inventario y recetas',
      'how.s2.desc':  'Agrega tus insumos y vincula cada plato del menú con los ingredientes que consume.',
      'how.s3.title': 'La IA empieza a aprender',
      'how.s3.desc':  'StockIA analiza tus ventas y, con el tiempo, empieza a predecir tu demanda real.',
      'how.s4.title': 'Recibe alertas y decide',
      'how.s4.desc':  'Actúa sobre las recomendaciones de compra y las alertas IoT antes de que se conviertan en un problema.',

      /* ── Pricing page ── */
      'pr.tag':      'Planes',
      'pr.title':    'Elige el plan que se adapta a tu restaurante',
      'pr.sub':      'Desde funciones básicas gratuitas hasta predicción con IA y monitoreo IoT completo.',
      'pr.monthly':  'Mensual',
      'pr.annual':   'Anual',
      'pr.discount': '30% descuento',
      'pr.example':  'Planes de ejemplo — validar precios y features finales con el modelo de negocio del equipo.',
      'pr.note':     'Sin tarjeta de crédito · Cancela cuando quieras · Precios de ejemplo',
      'pr.p1.name': 'Esencial',
      'pr.p1.desc': 'Para restaurantes que recién empiezan a digitalizar su inventario.',
      'pr.p1.f1': 'Hasta 50 insumos',
      'pr.p1.f2': 'Registro de ventas básico',
      'pr.p1.f3': '1 usuario',
      'pr.p1.f4': 'Predicción de demanda con IA',
      'pr.p1.f5': 'Sensores IoT',
      'pr.p1.f6': 'Reportes de sostenibilidad',
      'pr.p1.cta': 'Comenzar gratis',
      'pr.p2.name':    'Profesional',
      'pr.p2.popular': 'Más popular',
      'pr.p2.desc':    'Para un restaurante que quiere anticiparse a su demanda real.',
      'pr.p2.f1': 'Insumos ilimitados',
      'pr.p2.f2': 'Predicción de demanda con IA',
      'pr.p2.f3': 'Hasta 5 usuarios (roles)',
      'pr.p2.f4': 'Recomendaciones automáticas de compra',
      'pr.p2.f5': 'Reportes de sostenibilidad y gamificación',
      'pr.p2.f6': 'Sensores IoT',
      'pr.p2.cta': 'Elegir plan',
      'pr.p3.name': 'IoT Completo',
      'pr.p3.desc': 'Control total con monitoreo de cocina en tiempo real.',
      'pr.p3.f1': 'Todo lo de Profesional',
      'pr.p3.f2': 'Sensores IoT (ocupación y electrodomésticos)',
      'pr.p3.f3': 'Alertas críticas en tiempo real',
      'pr.p3.f4': 'Usuarios ilimitados',
      'pr.p3.f5': 'Integración con servicio externo',
      'pr.p3.f6': 'Soporte prioritario',
      'pr.p3.cta': 'Elegir plan',
      'pr.faq.tag':   'FAQ',
      'pr.faq.title': 'Preguntas frecuentes',
      'pr.faq.q1': '¿Puedo cambiar de plan en cualquier momento?',
      'pr.faq.a1': 'Sí. Podrás actualizar o degradar tu plan cuando lo necesites desde la configuración de tu cuenta.',
      'pr.faq.q2': '¿Qué pasa con mis datos si cancelo?',
      'pr.faq.a2': 'Tus datos se conservarán por un periodo definido tras la cancelación y podrás exportar tu historial en cualquier momento.',
      'pr.faq.q3': '¿El módulo IoT requiere hardware adicional?',
      'pr.faq.a3': 'Sí, requiere sensores compatibles (ocupación y electrodomésticos). El equipo de StockIA ayuda con la instalación inicial.',

      /* ── About page ── */
      'ab.hero.title': 'Ayudamos a los restaurantes a no dejar nada al azar',
      'ab.hero.sub':   'Somos DataBite Corp, un equipo enfocado en llevar inteligencia artificial e IoT al día a día de un restaurante.',
      'ab.m1.title': 'Nuestra Misión',
      'ab.m1.text':  'Ayudar a los restaurantes a operar con la misma precisión que una cocina profesional: sin desperdicio, sin sorpresas y con decisiones basadas en datos reales.',
      'ab.m2.title': 'Nuestra Visión',
      'ab.m2.text':  'Ser la plataforma de referencia en inventario inteligente para restaurantes en Perú, integrando IA e IoT para transformar la gestión gastronómica tradicional.',
      'ab.val1': 'Innovación', 'ab.val2': 'Precisión', 'ab.val3': 'Sostenibilidad',
      'ab.val4': 'Confiabilidad', 'ab.val5': 'Cercanía',
      'ab.team.tag':   'Equipo',
      'ab.team.title': 'El equipo detrás de StockIA',
      'ab.team.sub':   'El equipo de DataBite Corp trabajando en llevar StockIA de la idea al restaurante.',
      'ab.team.note':  'Fichas de ejemplo — completar con los nombres, roles y códigos reales del equipo.',
      'ab.t1.name': 'Integrante 1', 'ab.t1.role': 'Rol pendiente', 'ab.t1.badge': 'Código pendiente',
      'ab.t2.name': 'Integrante 2', 'ab.t2.role': 'Rol pendiente', 'ab.t2.badge': 'Código pendiente',
      'ab.t3.name': 'Integrante 3', 'ab.t3.role': 'Rol pendiente', 'ab.t3.badge': 'Código pendiente',
      'ab.t4.name': 'Integrante 4', 'ab.t4.role': 'Rol pendiente', 'ab.t4.badge': 'Código pendiente',
      'ab.vid.tag':      'Equipo',
      'ab.vid.title':    'Conoce al equipo de DataBite Corp',
      'ab.vid.sub':      'El proceso, los aprendizajes y las personas detrás de StockIA.',
      'ab.vid.ph.title': 'Video del equipo próximamente',
      'ab.vid.ph.text':  'Aquí se incrustará el video "About the Team" una vez grabado y publicado.',
      'ab.s.tag':   'Startup',
      'ab.s.title': 'Sobre DataBite Corp',
      'ab.s.sub':   'DataBite Corp es una startup tecnológica enfocada en llevar inteligencia artificial e IoT a la gestión de inventario de restaurantes.',
      'ab.s.s1.val': '2026',    'ab.s.s1.lbl': 'Año de fundación',
      'ab.s.s2.val': 'IA + IoT','ab.s.s2.lbl': 'Enfoque tecnológico',
      'ab.s.s3.val': '1',       'ab.s.s3.lbl': 'Restaurante piloto (meta inicial)',
      'ab.s.s4.val': 'Perú',    'ab.s.s4.lbl': 'Mercado inicial',

      /* ── Contact (about.html) ── */
      'ct.tag':   'Contacto',
      'ct.title': 'Conversemos sobre tu restaurante',
      'ct.sub':   'Cuéntanos sobre tu operación y te mostramos cómo StockIA se adapta a tus necesidades.',
      'ct.loc.title':  'Ubicación',
      'ct.loc.val':    'Lima, Perú',
      'ct.mail.title': 'Correo',
      'ct.mail.val':   'contacto@databitecorp.com (pendiente de definir)',
      'ct.form.title': 'Solicita una demo',
      'ct.form.name':     'Nombre',
      'ct.form.business': 'Restaurante',
      'ct.form.email':    'Correo',
      'ct.form.msg':      'Mensaje',
      'ct.form.ph.name':     'Tu nombre',
      'ct.form.ph.business': 'Nombre del restaurante',
      'ct.form.ph.email':    'tu@correo.com',
      'ct.form.ph.msg':      'Cuéntanos sobre tu restaurante (tamaño, tipo de cocina, etc.)',
      'ct.form.submit':      'Enviar solicitud',

      /* ── Footer ── */
      'ft.tagline': 'Inventario inteligente para restaurantes que no dejan nada al azar.',
      'ft.product': 'Producto',
      'ft.company': 'Empresa',
      'ft.legal':   'Legal',
      'ft.terms':   'Términos',
      'ft.privacy': 'Privacidad',
      'ft.support': 'Soporte',
      'ft.copy':    '© 2026 DataBite Corp · Perú',
    },

    en: {
      /* ── Navbar ── */
      'nav.home':     'Home',
      'nav.features': 'Features',
      'nav.pricing':  'Pricing',
      'nav.about':    'About',
      'login.tag':    'Log in',
      'nav.demo':     'Request demo',

      /* ── Hero (index) ── */
      'hero.badge':           'DataBite Corp · AI-powered inventory',
      'hero.title.line1':     'Demand prediction and smart inventory for your',
      'hero.title.highlight': 'restaurant',
      'hero.desc':            'StockIA learns from your sales history, the weather and how many diners show up to tell you what to prep, how much to buy and when to act — with IoT sensors watching over your kitchen 24/7.',
      'hero.cta.primary':     'Optimize your inventory →',
      'hero.cta.secondary':   'See how it works',
      'hero.stat1.val':       '−25%',
      'hero.stat1.lbl':       'Food waste*',
      'hero.stat2.val':       '+18%',
      'hero.stat2.lbl':       'Estimated operating margin*',
      'hero.stat3.val':       '<5s',
      'hero.stat3.lbl':       'Ingredient deduction per sale',

      /* ── Stats bar (index) ── */
      'stats.s1.val': '30%*',   'stats.s1.lbl': 'of purchased supplies go to waste',
      'stats.s2.val': '1 in 3*','stats.s2.lbl': 'restaurants with no predictive system',
      'stats.s3.val': '−20%*',  'stats.s3.lbl': 'of avoidable losses with AI',
      'stats.s4.val': '24/7',   'stats.s4.lbl': 'IoT monitoring of kitchen and storage',
      'stats.note': '* Example reference figures — replace with real data once validated with market research.',

      /* ── Segments (index) ── */
      'seg.label':        'Who is StockIA for?',
      'seg.owner.name':   'Restaurant owners & CEOs',
      'seg.owner.desc':   'See the real state of your business: inventory, waste and profitability in one executive dashboard, with no manual reports.',
      'seg.manager.name': 'Managers & kitchen leads',
      'seg.manager.desc': 'Handle the day to day: recipes, ingredient stock, expiration alerts and team tasks, all in one place.',

      /* ── Features (index) ── */
      'feat.tag':      'Features',
      'feat.title':    'Everything your restaurant needs',
      'feat.subtitle': 'Features designed to cut waste, anticipate demand and give you full visibility over your daily operation.',
      'feat.f1.name':  'Smart Inventory',
      'feat.f1.desc':  'Track stock in real time, add or edit ingredients, and automatically deduct the ingredients of every recipe sold.',
      'feat.f1.tag':   'Stock management',
      'feat.f2.name':  'AI Demand Forecasting',
      'feat.f2.desc':  'Machine Learning models that learn from your sales and attendance patterns. E.g.: "Pizza demand rises 30% on Fridays, prep more dough in the morning."',
      'feat.f2.tag':   'Machine Learning',
      'feat.f3.name':  'Automatic Recommendations',
      'feat.f3.desc':  'Purchase alerts before ingredients run out, plus menu suggestions based on popularity and seasonality.',
      'feat.f3.tag':   'Smart purchasing',
      'feat.f4.name':  'Kitchen IoT Monitoring',
      'feat.f4.desc':  'Occupancy and appliance sensors that detect open fridge doors, possible equipment failures and customer flow in real time.',
      'feat.f4.tag':   'Connected hardware',
      'feat.f5.name':  'Roles & Permissions',
      'feat.f5.desc':  'Set up roles for owner, manager, kitchen and cashier, each with access tailored to their responsibility in your restaurant.',
      'feat.f5.tag':   'Team control',
      'feat.f6.name':  'Sustainability & Gamification',
      'feat.f6.desc':  'Waste-reduction metrics and achievements for your team: "You cut waste by 20% this month."',
      'feat.f6.tag':   'Measurable impact',
      'feat.viewall':  'See all features →',

      /* ── Differentiators (index) ── */
      'diff.tag':      'Differentiators',
      'diff.title':    'More than an inventory',
      'diff.subtitle': 'StockIA goes beyond stock control: it turns your restaurant\'s data into decisions and visible results for your team.',
      'diff.d1.title': 'Gamification',
      'diff.d1.text':  'Achievements and recognition for your team when they cut waste or improve inventory turnover.',
      'diff.d2.title': 'Sustainability',
      'diff.d2.text':  'Environmental impact metrics showing how much food waste was avoided month over month.',
      'diff.d3.title': 'Learns your restaurant',
      'diff.d3.text':  'The AI trains on your own business data — your dishes, your customers, your seasonality — not generic industry averages.',

      /* ── Integrations (index) ── */
      'integ.tag':      'Integrations',
      'integ.title':    'Connects with the tools you already use',
      'integ.subtitle': 'As part of StockIA\'s architecture, integration with one external service is being evaluated. These are the options the team is considering (final decision pending).',
      'integ.i1.name': 'Google Maps API',
      'integ.i1.desc': 'Restaurant location and customer-flow analysis by area.',
      'integ.i2.name': 'OpenWeather API',
      'integ.i2.desc': 'Correlates weather with demand, e.g. more soup on cold days.',
      'integ.i3.name': 'Stripe / PayPal',
      'integ.i3.desc': 'Payments and subscriptions for access to the StockIA software.',
      'integ.i4.name': 'Twilio / SendGrid',
      'integ.i4.desc': 'Critical inventory and IoT alerts by SMS or email.',
      'integ.status':  'Under evaluation',

      /* ── Portfolio (index) ── */
      'port.tag':      'Portfolio',
      'port.title':    'The platform in action',
      'port.subtitle': 'Reference views of StockIA\'s future Web Application — dashboard, predictions, recipes and alerts.',
      'port.tab1':     'All views',
      'port.tab2':     'Inventory',
      'port.tab3':     'AI & IoT',
      'port.p1.name':  'Main dashboard',
      'port.p1.desc':  'Visual summary of inventory, predictions and alerts',
      'port.p2.name':  'Demand Forecasting',
      'port.p2.desc':  'Weekly per-dish projection based on history, weather and seasonality',
      'port.p3.name':  'Recipes & Automatic Deduction',
      'port.p3.desc':  'Link every menu item to its ingredients to deduct stock on each sale',
      'port.p4.name':  'IoT Alert System',
      'port.p4.desc':  'Notifications for occupancy, equipment failures and energy consumption',

      /* ── Video "About the Product" (index) ── */
      'vid.tag':      'Product',
      'vid.title':    'See StockIA in action',
      'vid.sub':      'Discover how StockIA transforms inventory management in your restaurant.',
      'vid.ph.title': 'Demo video coming soon',
      'vid.ph.text':  'The "About the Product" video will be embedded here once it\'s recorded and published.',

      /* ── CTA Banner (all pages) ── */
      'cta.title': 'Start optimizing your inventory today',
      'cta.sub':   'Book a personalized demo for your restaurant. No credit card, no commitment.',
      'cta.btn1':  'Request demo',
      'cta.btn2':  'Optimize your inventory →',

      /* ── Features page ── */
      'fp.tag':   'Features',
      'fp.title': 'Everything you need, in one place',
      'fp.sub':   'Your restaurant deserves a complete management ecosystem, not just a spreadsheet.',
      'fp.f1.name': 'Smart Inventory',
      'fp.f1.desc': 'Record ingredient entries and exits and link every menu item to its recipe. Selling a dish automatically deducts stock.',
      'fp.f1.tag':  'Stock management',
      'fp.f2.name': 'AI Demand Forecasting',
      'fp.f2.desc': 'Machine Learning models that analyze your sales history, the weather and attendance to anticipate how much of each dish you\'ll sell.',
      'fp.f2.tag':  'Machine Learning',
      'fp.f3.name': 'Automatic Recommendations',
      'fp.f3.desc': 'Purchase alerts before ingredients run out and menu suggestions based on popularity and seasonality.',
      'fp.f3.tag':  'Smart purchasing',
      'fp.f4.name': 'Kitchen IoT Monitoring',
      'fp.f4.desc': 'Occupancy and appliance sensors that detect open doors, equipment failures (e.g. an oven using more power than normal) and customer flow.',
      'fp.f4.tag':  'Connected hardware',
      'fp.f5.name': 'Roles & Permissions',
      'fp.f5.desc': 'Define what each person can see and do: owner, manager, kitchen or cashier, each with a dashboard suited to their role.',
      'fp.f5.tag':  'Team control',
      'fp.f6.name': 'Sustainability & Gamification',
      'fp.f6.desc': 'Waste-reduction metrics and visible achievements for the team, keeping the habit of well-managed inventory alive.',
      'fp.f6.tag':  'Measurable impact',
      'how.tag':    'How it works',
      'how.title':  'Get started in minutes',
      'how.sub':    'No complicated setup. Configure your restaurant and start seeing predictions from day one.',
      'how.s1.title': 'Register your restaurant',
      'how.s1.desc':  'Create your account and set up your restaurant\'s basic info and team.',
      'how.s2.title': 'Load your inventory and recipes',
      'how.s2.desc':  'Add your ingredients and link each menu item to what it consumes.',
      'how.s3.title': 'The AI starts learning',
      'how.s3.desc':  'StockIA analyzes your sales and, over time, starts predicting your real demand.',
      'how.s4.title': 'Get alerts and decide',
      'how.s4.desc':  'Act on purchase recommendations and IoT alerts before they become a real problem.',

      /* ── Pricing page ── */
      'pr.tag':      'Pricing',
      'pr.title':    'Choose the plan that fits your restaurant',
      'pr.sub':      'From free basic features to AI forecasting and full IoT monitoring.',
      'pr.monthly':  'Monthly',
      'pr.annual':   'Annual',
      'pr.discount': '30% off',
      'pr.example':  'Example plans — validate final pricing and features with the team\'s business model.',
      'pr.note':     'No credit card required · Cancel anytime · Example pricing',
      'pr.p1.name': 'Essential',
      'pr.p1.desc': 'For restaurants just starting to digitize their inventory.',
      'pr.p1.f1': 'Up to 50 ingredients',
      'pr.p1.f2': 'Basic sales recording',
      'pr.p1.f3': '1 user',
      'pr.p1.f4': 'AI demand forecasting',
      'pr.p1.f5': 'IoT sensors',
      'pr.p1.f6': 'Sustainability reports',
      'pr.p1.cta': 'Start for free',
      'pr.p2.name':    'Professional',
      'pr.p2.popular': 'Most popular',
      'pr.p2.desc':    'For a restaurant that wants to get ahead of its real demand.',
      'pr.p2.f1': 'Unlimited ingredients',
      'pr.p2.f2': 'AI demand forecasting',
      'pr.p2.f3': 'Up to 5 users (roles)',
      'pr.p2.f4': 'Automatic purchase recommendations',
      'pr.p2.f5': 'Sustainability & gamification reports',
      'pr.p2.f6': 'IoT sensors',
      'pr.p2.cta': 'Choose plan',
      'pr.p3.name': 'Full IoT',
      'pr.p3.desc': 'Full control with real-time kitchen monitoring.',
      'pr.p3.f1': 'Everything in Professional',
      'pr.p3.f2': 'IoT sensors (occupancy & appliances)',
      'pr.p3.f3': 'Real-time critical alerts',
      'pr.p3.f4': 'Unlimited users',
      'pr.p3.f5': 'External service integration',
      'pr.p3.f6': 'Priority support',
      'pr.p3.cta': 'Choose plan',
      'pr.faq.tag':   'FAQ',
      'pr.faq.title': 'Frequently asked questions',
      'pr.faq.q1': 'Can I change plans at any time?',
      'pr.faq.a1': 'Yes. You can upgrade or downgrade your plan whenever you need to from your account settings.',
      'pr.faq.q2': 'What happens to my data if I cancel?',
      'pr.faq.a2': 'Your data is kept for a set period after cancellation, and you can export your history at any time.',
      'pr.faq.q3': 'Does the IoT module require extra hardware?',
      'pr.faq.a3': 'Yes, it requires compatible sensors (occupancy and appliances). The StockIA team helps with initial setup.',

      /* ── About page ── */
      'ab.hero.title': 'Helping restaurants leave nothing to chance',
      'ab.hero.sub':   'We are DataBite Corp, a team focused on bringing artificial intelligence and IoT into the daily life of a restaurant.',
      'ab.m1.title': 'Our Mission',
      'ab.m1.text':  'To help restaurants operate with the same precision as a professional kitchen: no waste, no surprises, and decisions backed by real data.',
      'ab.m2.title': 'Our Vision',
      'ab.m2.text':  'To become the go-to smart inventory platform for restaurants in Peru, integrating AI and IoT to transform traditional restaurant management.',
      'ab.val1': 'Innovation', 'ab.val2': 'Precision', 'ab.val3': 'Sustainability',
      'ab.val4': 'Reliability', 'ab.val5': 'Closeness',
      'ab.team.tag':   'Team',
      'ab.team.title': 'The team behind StockIA',
      'ab.team.sub':   'The DataBite Corp team working to bring StockIA from idea to restaurant.',
      'ab.team.note':  'Placeholder cards — fill in with the team\'s real names, roles and student codes.',
      'ab.t1.name': 'Team member 1', 'ab.t1.role': 'Role pending', 'ab.t1.badge': 'Code pending',
      'ab.t2.name': 'Team member 2', 'ab.t2.role': 'Role pending', 'ab.t2.badge': 'Code pending',
      'ab.t3.name': 'Team member 3', 'ab.t3.role': 'Role pending', 'ab.t3.badge': 'Code pending',
      'ab.t4.name': 'Team member 4', 'ab.t4.role': 'Role pending', 'ab.t4.badge': 'Code pending',
      'ab.vid.tag':      'Team',
      'ab.vid.title':    'Meet the DataBite Corp team',
      'ab.vid.sub':      'The process, the lessons learned, and the people behind StockIA.',
      'ab.vid.ph.title': 'Team video coming soon',
      'ab.vid.ph.text':  'The "About the Team" video will be embedded here once it\'s recorded and published.',
      'ab.s.tag':   'Startup',
      'ab.s.title': 'About DataBite Corp',
      'ab.s.sub':   'DataBite Corp is a technology startup focused on bringing artificial intelligence and IoT into restaurant inventory management.',
      'ab.s.s1.val': '2026',    'ab.s.s1.lbl': 'Founded',
      'ab.s.s2.val': 'AI + IoT','ab.s.s2.lbl': 'Technology focus',
      'ab.s.s3.val': '1',       'ab.s.s3.lbl': 'Pilot restaurant (initial goal)',
      'ab.s.s4.val': 'Peru',    'ab.s.s4.lbl': 'Initial market',

      /* ── Contact (about.html) ── */
      'ct.tag':   'Contact',
      'ct.title': "Let's talk about your restaurant",
      'ct.sub':   'Tell us about your operation and we\'ll show you how StockIA fits your needs.',
      'ct.loc.title':  'Location',
      'ct.loc.val':    'Lima, Peru',
      'ct.mail.title': 'Email',
      'ct.mail.val':   'contacto@databitecorp.com (to be defined)',
      'ct.form.title': 'Request a demo',
      'ct.form.name':     'Name',
      'ct.form.business': 'Restaurant',
      'ct.form.email':    'Email',
      'ct.form.msg':      'Message',
      'ct.form.ph.name':     'Your name',
      'ct.form.ph.business': 'Restaurant name',
      'ct.form.ph.email':    'you@email.com',
      'ct.form.ph.msg':      'Tell us about your restaurant (size, cuisine type, etc.)',
      'ct.form.submit':      'Send request',

      /* ── Footer ── */
      'ft.tagline': 'Smart inventory for restaurants that leave nothing to chance.',
      'ft.product': 'Product',
      'ft.company': 'Company',
      'ft.legal':   'Legal',
      'ft.terms':   'Terms',
      'ft.privacy': 'Privacy',
      'ft.support': 'Support',
      'ft.copy':    '© 2026 DataBite Corp · Peru',
    }
  };

  let currentLang = localStorage.getItem('stockia-lang') || 'es';

  function t(key) {
    return translations[currentLang][key] || translations['es'][key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('stockia-lang', lang);
    applyTranslations();
  }

  function init() {
    applyTranslations();
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn) setLang(btn.getAttribute('data-lang'));
    });
  }

  return { t, setLang, init, get currentLang() { return currentLang; } };
})();

document.addEventListener('DOMContentLoaded', () => i18n.init());