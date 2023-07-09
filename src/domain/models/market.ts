export type Market = {
  accountName: string
  amount: number
  creditCardCCV: number
  creditCardIssuer: string
  creditCardNumber: number
  currencyName: string
  transactionDescription: string
  trasactionType: string //consider using ENUM in the future
}