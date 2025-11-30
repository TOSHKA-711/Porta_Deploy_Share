export type UserType = {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  user_view_type?: string;
  site_admin?: boolean;
  name?: string | null;
  company?: string | null;
  blog?: string;
  location?: string | null;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string | null;
  twitter_username?: string | null;
  notification_email?: string | null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
  private_gists?: number;
  total_private_repos?: number;
  owned_private_repos?: number;
  disk_usage?: number;
  collaborators?: number;
  two_factor_authentication?: boolean;
  plan?: {
    name?: string;
    space?: number;
    collaborators?: number;
    private_repos?: number;
  };
};

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
  about?: {
    title: string;
    content: string;
    projectsNumber: number;
    clients: number;
    yearsExp: number;
    hashtags: string[];
    highLights: string[];
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    email?: string;
    mobile?: string;
  };
  skills?: string[];
  hero?: {
    title: string;
    subtitle: string;
    description: string;
    currentPosition: string;
  };
  workExperience?: [
    {
      logo: string;
      title: string;
      description: string;
      link: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}

export type githubRepoType = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  owner: {
    login: string;
  };
  default_branch: string;
};

export type VercelProjectType = {
  id: string;
  name: string;
  framework: string | null;
  accountId: string;
  createdAt: number;
  updatedAt: number;
  link?: {
    type: "github" | string;
    repo?: string;
    repoId?: number;
    repoOwnerId?: number;
    org?: string;
    createdAt?: number;
    updatedAt?: number;
  };
  latestDeployments?: {
    uid?: string;
    url?: string;
    alias?: string[];
    createdAt?: number;
    readyState?: string;
  }[];

  live?: boolean;
  buildCommand?: string | null;
  installCommand?: string | null;
  outputDirectory?: string | null;
  rootDirectory?: string | null;
  productionBranch?: string;
  nodeVersion?: string;
  publicSource?: string | null;
  gitLFS?: boolean;
  gitComments?: {
    onCommit?: boolean;
    onPullRequest?: boolean;
  };
  features?: {
    webAnalytics?: boolean;
  };
  speedInsights?: {
    id?: string;
    hasData?: boolean;
  };
};

export type vercelProjectsResponseType = {
  projects: VercelProjectType[];
};

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
