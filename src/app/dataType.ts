export interface login{
    userName:String,
    password:String
};

export interface Products{
    name:string,
    price:number,
    category:String,
    quantity: number,
    description:string,
    image:string,
    Quantity:number;
}

export interface Cart{
    name:string,
    price:number,
    category:String,
    quantity: number,
    description:string,
    image:string,
    productQuantity:number;
}