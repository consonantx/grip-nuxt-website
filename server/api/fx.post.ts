import { FxConversionRequest, FxConversionResponse, FxCurrencies } from "~~/interfaces/fx"


export default defineEventHandler(async (event) => {
  const conversionResponse = await $fetch<FxConversionResponse>(`https://api.grip.technology/fx/convert`, {
    headers: {
      "X-Version": "1.0.0",
    },
    method: 'POST',
    body: JSON.stringify({
      ...(await readBody(event) as FxConversionRequest)
    })
  })
  if (conversionResponse) {
    event.node.res.statusCode = 200
    return conversionResponse.data
  }
  event.node.res.statusCode = 500
  console.log(conversionResponse)
  return {
    error: 'something went wrong'
  }
})