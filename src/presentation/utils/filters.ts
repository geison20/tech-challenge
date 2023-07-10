export const termFilter = (arr: any[] | [], term: string, field: string) => {
  return arr.filter(el => el[field].toLowerCase().includes(term.toLowerCase()))
}