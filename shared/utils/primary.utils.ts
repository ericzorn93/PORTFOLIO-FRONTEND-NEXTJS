export class PrimaryUtils {
  /** @description Gives the current version of the REST API */
  public static currentApiVersion: string = "api/v1";

  /**
   * @description
   * Returns a boolean whether the current API is in development or production mode.
   */
  public static get isDevelopment(): boolean {
    if (process.env.NODE_ENV !== "production") {
      return true;
    }

    return false;
  }

  /**
   * @description
   * Recieves the the full API url with the current API REST version
   */
  public static get apiUrl(): string {
    if (PrimaryUtils.isDevelopment) {
      return `http://localhost:4000/${PrimaryUtils.currentApiVersion}`;
    }

    return `https://ez-portfolio-backend-graphql.herokuapp.com/${PrimaryUtils.currentApiVersion}`;
  }

  /**
   * @description
   * Recieves the the full API url with the current API REST version
   */
  public static get graphQlUrl(): string {
    if (PrimaryUtils.isDevelopment) {
      return `http://localhost:4000/graphql`;
    }

    return `https://ez-portfolio-backend-graphql.herokuapp.com/graphql`;
  }
}
