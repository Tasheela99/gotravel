export interface LastMinutesOffer {
    imageUrl:string;
    funItemName:string;
    price:number;
    IsOfferAvailable:boolean;
    IsPrePrice:boolean,
    prePrice:number | undefined,
    offerText:string,
    funItemNameDescription:string
}
