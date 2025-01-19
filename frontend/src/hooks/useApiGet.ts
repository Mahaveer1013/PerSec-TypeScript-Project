import { useQuery } from "react-query";
import { useStore } from "./useStore";
import { getData } from "../components/api/getData";

export const useApiGet = <T>(url: string, options: RequestInit = {}) => {
    const { setData, setLoading, setError } = useStore();

    setLoading(true);

    return useQuery<T, Error>(url, () => getData(url, options), {
        onSettled: () => setLoading(false),
        onSuccess: (data) => {
            setData(data);
            setLoading(false);
        },
        onError: (error) => {
            setError(error.message);
            setLoading(false);
        },
    });
};
