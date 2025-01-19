import { create } from "zustand";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    setData: (data: T | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useStore = create<FetchState<unknown>>((set) => ({
    data: null,
    loading: false,
    error: null,
    setData: (data) => set({ data }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));
