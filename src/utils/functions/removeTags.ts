export const removeLink = (text: string) =>
  text.replace(/<a.+?>/gi, "").replace(/<\/a>/gi, "");

export const replaceQuotationMark = (text: string) =>
  text.replace(/&#171;/g, '"').replace(/&#187;/g, '"');
