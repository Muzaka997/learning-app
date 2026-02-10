export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    publicId: string;
  };
  pdf?: string;
};

// Shape returned by backend (may use _id)
export type BackendBook = {
  _id?: string;
  id?: string;
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    publicId: string;
  };
  pdf?: string;
};
