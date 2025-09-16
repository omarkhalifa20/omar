export interface WishlistInterface {
  _id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
  imageCover: string;
  images: string[];
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  length: number;
}

