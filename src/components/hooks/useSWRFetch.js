import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const BASE_URL = "https://api.unsplash.com";
const clientId = "O6wmT397ISpOugtWelnXU6hqb66w6PB4rDzCCQLWfNk";

const swrConfig = {
  revalidateOnFocus: false, // on window focus stop refresh
};

function useSWRFetch(url, query = null) {
  let isQuery = query ? `&query=${query}` : null;
  let requestUrl;
  if (isQuery) {
    requestUrl = `${BASE_URL}${url}${isQuery}&client_id=${clientId}`;
  } else {
    requestUrl = `${BASE_URL}${url}&client_id=${clientId}`;
  }

  const { data, error } = useSWR(requestUrl, fetcher, swrConfig);
  return {
    data: data && query ? data.results : data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSWRFetch;
