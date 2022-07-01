interface CardDesign {
  tierName: string,
  tierId: string,
  designName: string,
  designId: string,
  cost: number,
  backgroundHexColor: string,
  normalShippingFee: number,
  expressShippingFee: number,
  frontViewUrl: string,
  backViewUrl: string,
  frontBackViewUrl: string,
}

export default interface CardDesigns {
  data: Array<CardDesign>
}

export interface InternalCardDesigns extends Array<Pick<CardDesign, 'backgroundHexColor' | 'designName' | 'frontBackViewUrl'>> { }