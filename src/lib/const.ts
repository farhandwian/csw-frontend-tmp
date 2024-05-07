export const loadingMessage = "...Loading";
export const errMessageDataFetching =
  "Error occurred while get data from server.";
export const errMessagePostData = "Error occurred while post data to server";

//====================================================================
export const isProd = process.env.NODE_ENV === "production";
export const isLocal = process.env.NODE_ENV === "development";

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === "true" ?? false;
