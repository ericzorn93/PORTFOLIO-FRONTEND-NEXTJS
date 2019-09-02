export type Maybe<T> = T | null;

export interface FindUserInput {
  id?: Maybe<string>;

  emailAddress?: Maybe<string>;
}

export interface RegisterUserInput {
  firstName: string;

  lastName: string;

  emailAddress: string;

  phoneNumber: string;

  role?: Maybe<string>;
}

export interface UpdateUserRoleInput {
  emailAddress: string;

  role: string;
}

export interface CreateProjectInput {
  name: string;

  description: string;

  userId: string;

  tagIds?: Maybe<(Maybe<string>)[]>;
}

export interface TagInput {
  name: string;

  projectIds: string[];
}

export interface UpdateTagProjectsInput {
  tagId: string;

  projectIds: string[];
}
