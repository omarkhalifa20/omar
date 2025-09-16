export interface Productsmod {
    sold: number;
    images: string[];
    subcategory: {
      _id: string;
      name: string;
      slug: string;
      category: string;
    }[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string;
    category: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    brand: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    ratingsAverage: number;
    createdAt: string; 
    updatedAt: string; 
    id: string;
}

export interface ProductDet {
  _id: string;
  id: string; 
  title: string;
  slug: string;
  description: string;

  imageCover: string;
  images: string[];

  price: number;
  quantity: number;
  sold: number;

  ratingsAverage: number;
  ratingsQuantity: number;

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
    category?: string;
  }[];

  reviews: {
    _id: string;
    rating?: number;
    comment?: string;
    user?: {
      _id: string;
      name?: string;
      avatar?: string;
    };
    createdAt?: string;
    updatedAt?: string;
  }[];

  createdAt: string;
  updatedAt: string;

  __v: number;
}

export interface Brandsmod {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}