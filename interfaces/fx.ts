interface FxCurrency {
  name: string,
  value: number,
}

interface FxConversion {
  targetCurrency: string,
  targetCurrencyAmount: string,
  baseCurrency: string,
  baseCurrencyAmount: string,
  conversionRate: string,
}

export interface FxConversionRequest {
  baseCurrency: number,
  targetCurrency: number,
  amount: number,
}

export interface FxCurrencies {
  data: Array<FxCurrency>,
  message: string,
  code: string
}
export interface FxConversionResponse {
  data: FxConversion,
  message: string,
  code: string
}