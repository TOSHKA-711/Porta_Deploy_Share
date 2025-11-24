

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

export type ProjectType = {
  name: string;
  description?: string;
  githubUrl: string;
  vercelUrl?: string;
  image?: {
    public_id: string;
    secure_url: string;
  };
  isDeployed: boolean;
  isFeatured?: boolean;
  isProfiled?: boolean;
  isComplete?: boolean;
  _id?: string | number;
  updatedAt?: string;
  tools?: string[];
  language?: string | null;
  features?: string[];
};