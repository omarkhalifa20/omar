interface Cartmod {
  _id: string;
  cartOwner: string;
  products: {
    _id: string;
    count: number;
    price: number;
    product: {
      _id: string;
      id: string;
      title: string;
      imageCover: string;
      quantity: number;
      ratingsAverage: number;
      brand?: string | number | unknown;
      category: {
        _id: string;
        name: string;
        slug: string;
        image: string;
      };
      subcategory?: {
        _id: string;
        name: string;
        slug: string;
      }[];
    };
  }[];
  totalCartPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
              
}