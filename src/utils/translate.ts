import { i18n } from "../locales/i18n";

export const translate = (dicts: Array<string>) => (value: string, opts?: {}) =>
  i18n.t(value, { ns: [...dicts], ...opts }) || "Unknown localization string";
