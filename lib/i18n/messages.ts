import type { Locale } from "./locales";

const en = {
  "site.title": "MyPrivly",
  "site.description": "A small set of private apps for your family and your money.",
  "skip": "Skip to content",
  "nav.login": "Log in or create an account",
  "nav.loginShort": "Log in",
  "nav.openFamily": "Open Family",

  "hero.title": "Everyday life, kept private.",
  "hero.body":
    "A small set of apps for your family and your money, built so your information stays yours.",
  "hero.cta": "See the apps",

  "preview.label": "A peek at the apps, with sample data",
  "preview.sample": "Sample",
  "preview.money.title": "Net worth",
  "preview.money.change": "+4.2% this month",
  "preview.family.title": "This week",
  "preview.family.e1": "Dinner at Grandma's",
  "preview.family.e2": "Soccer practice",
  "preview.family.e3": "Dentist",

  "apps.heading": "Your apps",
  "apps.open": "Open {name}",
  "apps.soon": "Coming soon",
  "apps.moreTitle": "More on the way",
  "apps.moreBody": "New apps will show up here, all under the same roof.",

  "why.heading": "Built around privacy",
  "why.p1.title": "Only the people you choose",
  "why.p1.body":
    "Family is shared only with the people you invite, and you sign in with a link we email you, so there's no password to forget or leak.",
  "why.p2.title": "Encrypted on your device",
  "why.p2.body":
    "Money keeps your financial data encrypted on your own device, and the key never leaves it.",
  "why.p3.title": "English and Spanish",
  "why.p3.body": "Every app speaks both languages and picks the one your browser uses.",

  "nav.pricing": "Pricing",

  "pricing.title": "Free for what matters. Plus for what costs us to run.",
  "pricing.lead": "Everything your household needs to get organized is free. Plus adds the features that need servers, like bank connections and automatic sync.",
  "pricing.free.name": "Free",
  "pricing.free.price": "$0",
  "pricing.free.note": "No card, no time limit.",
  "pricing.free.f1": "A shared family calendar with tasks and categories",
  "pricing.free.f2": "Import from calendar files and from bank CSV, OFX or QFX files",
  "pricing.free.f3": "Budgets, bills, savings goals, reports and calculators",
  "pricing.free.f4": "Invoicing and tax estimates for small businesses",
  "pricing.free.f5": "Encrypted on your device, with PIN, passkey and two-step sign-in",
  "pricing.free.f6": "One encrypted cloud backup, plus export and delete any time",
  "pricing.free.f7": "English and Spanish",
  "pricing.free.cta": "Start free",
  "pricing.plus.name": "Plus",
  "pricing.plus.badge": "Coming soon",
  "pricing.plus.price": "$6.99",
  "pricing.plus.per": "a month",
  "pricing.plus.note": "or $59 a year, for your whole household. Planned prices; they may change before launch.",
  "pricing.plus.intro": "Everything in Free, and:",
  "pricing.plus.p1": "Bank connections for up to 5 banks, imported automatically",
  "pricing.plus.p2": "Automatic sync across all your devices, still end-to-end encrypted",
  "pricing.plus.p3": "Smart email alerts: bills due, overspending, what is safe to spend",
  "pricing.plus.p4": "Morning and weekly emails for the whole family",
  "pricing.plus.p5": "Photos of schedules turned into calendar events",
  "pricing.plus.p6": "AI helpers that sort transactions and answer questions about your money (monthly allowance)",
  "pricing.plus.soon": "Plus is not on sale yet. Everything listed under Free works today.",
  "pricing.promises": "Our promises",
  "pricing.pr1.title": "Your data is never held hostage",
  "pricing.pr1.body": "Export, backup download and account deletion are free on every plan, always.",
  "pricing.pr2.title": "No ads, no selling your data",
  "pricing.pr2.body": "We make money from subscriptions, not from your information.",
  "pricing.pr3.title": "You pay for services, not secrets",
  "pricing.pr3.body": "Your finances are encrypted on your device. Plus pays for the things that need our servers.",
  "pricing.faq": "Questions",
  "pricing.q1": "Is the free plan really free?",
  "pricing.a1": "Yes. There is no trial clock and no card. Free is the whole app, minus the features that cost us money to run.",
  "pricing.q2": "When does Plus launch?",
  "pricing.a2": "Soon. Bank connections need a security review first. Everything listed under Free works today.",
  "pricing.q3": "What happens if I cancel Plus?",
  "pricing.a3": "You go back to Free and keep all your data. You can still export it, back it up and delete it.",
  "pricing.q4": "Why do bank connections cost money?",
  "pricing.a4": "Banks charge us for every connected account, every month. Plus covers that cost so Free does not have to.",

  "footer.testers": "Invited testers: sign in",
  "pricing.free.soon": "Family and Money are invite-only while we finish building them.",
  "footer.tagline": "Private apps for everyday life.",
} as const;

export type MessageKey = keyof typeof en;

const es: Record<MessageKey, string> = {
  "site.title": "MyPrivly",
  "site.description": "Un conjunto pequeño de apps privadas para tu familia y tu dinero.",
  "skip": "Saltar al contenido",
  "nav.login": "Iniciar sesión o crear una cuenta",
  "nav.loginShort": "Iniciar sesión",
  "nav.openFamily": "Abrir Family",

  "hero.title": "La vida diaria, en privado.",
  "hero.body":
    "Un conjunto pequeño de apps para tu familia y tu dinero, hechas para que tu información siga siendo tuya.",
  "hero.cta": "Ver las apps",

  "preview.label": "Un vistazo a las apps, con datos de ejemplo",
  "preview.sample": "Ejemplo",
  "preview.money.title": "Patrimonio neto",
  "preview.money.change": "+4.2% este mes",
  "preview.family.title": "Esta semana",
  "preview.family.e1": "Cena con la abuela",
  "preview.family.e2": "Práctica de fútbol",
  "preview.family.e3": "Dentista",

  "apps.heading": "Tus apps",
  "apps.open": "Abrir {name}",
  "apps.soon": "Próximamente",
  "apps.moreTitle": "Más en camino",
  "apps.moreBody": "Aquí aparecerán nuevas apps, todas bajo el mismo techo.",

  "why.heading": "Pensado para la privacidad",
  "why.p1.title": "Solo las personas que elijas",
  "why.p1.body":
    "Family se comparte solo con las personas que invites, y entras con un enlace que te enviamos por correo, así que no hay contraseña que olvidar ni que se filtre.",
  "why.p2.title": "Cifrado en tu dispositivo",
  "why.p2.body":
    "Money guarda tus datos financieros cifrados en tu propio dispositivo, y la llave nunca sale de él.",
  "why.p3.title": "Inglés y español",
  "why.p3.body": "Cada app habla ambos idiomas y usa el de tu navegador.",

  "nav.pricing": "Precios",

  "pricing.title": "Gratis lo que importa. Plus para lo que nos cuesta mantener.",
  "pricing.lead": "Todo lo que tu hogar necesita para organizarse es gratis. Plus agrega las funciones que requieren servidores, como las conexiones bancarias y la sincronización automática.",
  "pricing.free.name": "Gratis",
  "pricing.free.price": "$0",
  "pricing.free.note": "Sin tarjeta, sin límite de tiempo.",
  "pricing.free.f1": "Un calendario familiar compartido con tareas y categorías",
  "pricing.free.f2": "Importa desde archivos de calendario y desde archivos CSV, OFX o QFX del banco",
  "pricing.free.f3": "Presupuestos, cuentas por pagar, metas de ahorro, informes y calculadoras",
  "pricing.free.f4": "Facturación y estimación de impuestos para pequeños negocios",
  "pricing.free.f5": "Cifrado en tu dispositivo, con PIN, llave de acceso e inicio de sesión en dos pasos",
  "pricing.free.f6": "Un respaldo cifrado en la nube, y exportar o eliminar cuando quieras",
  "pricing.free.f7": "Inglés y español",
  "pricing.free.cta": "Empezar gratis",
  "pricing.plus.name": "Plus",
  "pricing.plus.badge": "Próximamente",
  "pricing.plus.price": "$6.99",
  "pricing.plus.per": "al mes",
  "pricing.plus.note": "o $59 al año, para todo tu hogar. Precios planeados; pueden cambiar antes del lanzamiento.",
  "pricing.plus.intro": "Todo lo de Gratis, y además:",
  "pricing.plus.p1": "Conexiones bancarias para hasta 5 bancos, con importación automática",
  "pricing.plus.p2": "Sincronización automática en todos tus dispositivos, siempre cifrada de extremo a extremo",
  "pricing.plus.p3": "Alertas inteligentes por correo: cuentas por vencer, gastos de más y cuánto puedes gastar con seguridad",
  "pricing.plus.p4": "Correos matutinos y semanales para toda la familia",
  "pricing.plus.p5": "Fotos de horarios convertidas en eventos del calendario",
  "pricing.plus.p6": "Ayudantes con IA que clasifican transacciones y responden preguntas sobre tu dinero (con una cuota mensual)",
  "pricing.plus.soon": "Plus todavía no está a la venta. Todo lo que aparece en Gratis funciona hoy.",
  "pricing.promises": "Nuestras promesas",
  "pricing.pr1.title": "Tus datos nunca quedan como rehén",
  "pricing.pr1.body": "Exportar, descargar un respaldo y eliminar tu cuenta son gratis en todos los planes, siempre.",
  "pricing.pr2.title": "Sin anuncios, sin vender tus datos",
  "pricing.pr2.body": "Ganamos dinero con las suscripciones, no con tu información.",
  "pricing.pr3.title": "Pagas por servicios, no por secretos",
  "pricing.pr3.body": "Tus finanzas están cifradas en tu dispositivo. Plus paga lo que necesita nuestros servidores.",
  "pricing.faq": "Preguntas",
  "pricing.q1": "¿El plan gratis es realmente gratis?",
  "pricing.a1": "Sí. No hay reloj de prueba ni tarjeta. Gratis es toda la app, menos las funciones que nos cuesta dinero mantener.",
  "pricing.q2": "¿Cuándo llega Plus?",
  "pricing.a2": "Pronto. Las conexiones bancarias necesitan primero una revisión de seguridad. Todo lo que aparece en Gratis funciona hoy.",
  "pricing.q3": "¿Qué pasa si cancelo Plus?",
  "pricing.a3": "Vuelves a Gratis y conservas todos tus datos. Aún puedes exportarlos, respaldarlos y eliminarlos.",
  "pricing.q4": "¿Por qué cuestan dinero las conexiones bancarias?",
  "pricing.a4": "Los bancos nos cobran por cada cuenta conectada, cada mes. Plus cubre ese costo para que Gratis no tenga que hacerlo.",

  "footer.testers": "Probadores invitados: iniciar sesión",
  "pricing.free.soon": "Family y Money son solo por invitación mientras terminamos de construirlas.",
  "footer.tagline": "Apps privadas para la vida diaria.",
};

const catalogs: Record<Locale, Record<MessageKey, string>> = { en, es };

export type T = (key: MessageKey, values?: Record<string, string | number>) => string;

/** A translator for one language. `{name}` placeholders are filled from `values`. */
export function createT(locale: Locale): T {
  const messages = catalogs[locale];
  return (key, values) =>
    messages[key].replace(/\{(\w+)\}/g, (whole, name: string) =>
      values && name in values ? String(values[name]) : whole,
    );
}
