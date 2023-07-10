export const termFilter = (arr: any[] | [], term: string) => {
    return arr.filter(arr => {
      const values = Object.values(arr)
      const hasSome = values.some((field: any) =>
        field.toString().toLowerCase().includes(term.toLowerCase()))
      return hasSome
  })
}