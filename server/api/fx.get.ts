import { FxConversionRequest, FxConversionResponse, FxCurrencies } from "~~/interfaces/fx"


export default defineEventHandler(async (event) => {
  const data = await $fetch<FxCurrencies>(`https://api.grip.technology/fx/currency`, {
    headers: {
      "X-Version": "1.0.0",
    }
  })
  if (data) {
    event.node.res.statusCode = 200
    return data.data
  }
  event.res.statusCode = 500
  console.log(data)
  return {
    error: 'something went wrong'
  }
})