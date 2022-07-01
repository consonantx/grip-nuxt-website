import CardDesigns from "@/interfaces/cardDesigns"

export default defineEventHandler(async (event) => {
  const data = await $fetch<CardDesigns>(`https://api.grip.technology/gripcard/physical/card-designs`, {
    headers: {
      "X-Version": "1.0.0",
    }
  })
  if (data) {
    event.res.statusCode = 200
    return data.data.map(({ designName, backgroundHexColor, frontBackViewUrl }) => ({
      designName, backgroundHexColor, frontBackViewUrl
    }))
  } else {
    event.res.statusCode = 500
    console.log(data)
    return {
      error: 'something went wrong'
    }
  }
})