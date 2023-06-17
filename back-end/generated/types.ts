/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  Post: { // root type
    body?: string | null; // String
    id?: string | null; // ID
    title?: string | null; // String
  }
  Profile: { // root type
    avatar?: string | null; // String
    bio?: string | null; // String
    id?: string | null; // ID
    loaction?: string | null; // String
    website?: string | null; // String
  }
  Query: {};
  User: { // root type
    email?: string | null; // String
    id?: string | null; // ID
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post'] | null; // Post
    createProfile: NexusGenRootTypes['Profile'] | null; // Profile
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updatePost: NexusGenRootTypes['Post'] | null; // Post
  }
  Post: { // field return type
    body: string | null; // String
    id: string | null; // ID
    title: string | null; // String
  }
  Profile: { // field return type
    avatar: string | null; // String
    bio: string | null; // String
    id: string | null; // ID
    loaction: string | null; // String
    website: string | null; // String
  }
  Query: { // field return type
    me: NexusGenRootTypes['Profile'] | null; // Profile
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // ID
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    createDraft: 'Post'
    createProfile: 'Profile'
    deletePost: 'Post'
    login: 'AuthPayload'
    signup: 'AuthPayload'
    updatePost: 'Post'
  }
  Post: { // field return type name
    body: 'String'
    id: 'ID'
    title: 'String'
  }
  Profile: { // field return type name
    avatar: 'String'
    bio: 'String'
    id: 'ID'
    loaction: 'String'
    website: 'String'
  }
  Query: { // field return type name
    me: 'Profile'
    post: 'Post'
    posts: 'Post'
    users: 'User'
  }
  User: { // field return type name
    email: 'String'
    id: 'ID'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      body?: string | null; // String
      title?: string | null; // String
    }
    createProfile: { // args
      avatar?: string | null; // String
      bio?: string | null; // String
      location?: string | null; // String
      website?: string | null; // String
    }
    deletePost: { // args
      id?: string | null; // String
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    signup: { // args
      email?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
    }
    updatePost: { // args
      id?: string | null; // String
    }
  }
  Query: {
    post: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}