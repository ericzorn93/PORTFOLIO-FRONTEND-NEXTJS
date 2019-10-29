export interface IAllSitePage {
  allSitePage: {
    edges: IEdge[];
  };
}

export interface IEdge {
  node: {
    id: string;
    path: string;
    internalComponentName: string;
  };
}
