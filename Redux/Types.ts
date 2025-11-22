

export interface IUser {
  _id?: string;
  username: string;
  name: string;
  role?: string;
  country?: string;
  email: string;
  gender?: "male" | "female";
  image?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Portfolio {
  _id: string;
  user: string;
  bio: string;
  role: string;
  theme: "dark" | "light";
  about: {
    title: string;
    content: string;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    email?: string;
    mobile?: string;
  };
  // projects: any[];
  createdAt: string;
  updatedAt: string;
}

