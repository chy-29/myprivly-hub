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
