/* lowercase string and remove accents */
export function termFormatter(term: string): string {
  const chars: any = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    â: "a",
    ê: "e",
    ô: "o",
  };
  return term.toLowerCase().replace(/[áéíóúâêô]/g, (i) => chars[i]);
}
