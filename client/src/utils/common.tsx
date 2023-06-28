type currencyType  = 'INR' | 'USD'
export function numberToCurrency(value: number, currency: currencyType):  string{
   return value.toLocaleString('en-US', {
        style: 'currency',
        currency: currency
    })
}