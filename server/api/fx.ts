import { FxConversionRequest, FxConversionResponse, FxCurrencies } from "~~/interfaces/fx"


export default defineEventHandler(async (event) => {
  switch (event.node.req) {
    case 'GET':
      const data = await $fetch<FxCurrencies>(`https://api.grip.technology/fx/currency`, {
        headers: {
          "X-Version": "1.0.0",
        }
      })
      if (data) {
        event.res.statusCode = 200
        return data.data
      }
      event.res.statusCode = 500
      console.log(data)
      return {
        error: 'something went wrong'
      }
    case 'POST':
      const conversionResponse = await $fetch<FxConversionResponse>(`https://api.grip.technology/fx/convert`, {
        headers: {
          "X-Version": "1.0.0",
        },
        method: 'POST',
        body: JSON.stringify({
          ...(await useBody(event) as FxConversionRequest)
        })
      })
      if (conversionResponse) {
        event.res.statusCode = 200
        return conversionResponse.data
      }
      event.res.statusCode = 500
      console.log(conversionResponse)
      return {
        error: 'something went wrong'
      }
    default:
      event.res.statusCode = 405
      return {
        error: 'method not allowed'
      }
  }
})