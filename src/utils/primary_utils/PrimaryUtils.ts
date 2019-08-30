class PrimaryUtils {
  public static isDevelopment: boolean = process.env.NODE_ENV !== "production";
}

export default PrimaryUtils;
