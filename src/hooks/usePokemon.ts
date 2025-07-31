import { useQuery, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';

/**
 * Hook for fetching paginated Pokemon list
 */
export const usePokemonList = (page: number, limit = 20) => {
    const offset = (page - 1) * limit;

    return useQuery({
        queryKey: ['pokemon', 'list', page, limit],
        queryFn: () => pokemonApi.getPokemonList(limit, offset),
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    });
};

/**
 * Hook for infinite loading Pokemon list (Load More functionality)
 */
export const usePokemonInfiniteList = (limit = 20) => {
    return useInfiniteQuery({
        queryKey: ['pokemon', 'infinite', limit],
        queryFn: ({ pageParam = 0 }) => pokemonApi.getPokemonList(limit, pageParam),
        getNextPageParam: (lastPage) => {
            if (lastPage.next) {
                const url = new URL(lastPage.next);
                const offset = url.searchParams.get('offset');
                return offset ? parseInt(offset, 10) : null;
            }
            return null;
        },
        initialPageParam: 0,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    });
};

/**
 * Hook for fetching Pokemon details
 */
export const usePokemonDetails = (id: string | number) => {
    return useQuery({
        queryKey: ['pokemon', 'details', id],
        queryFn: () => pokemonApi.getPokemonDetails(id),
        enabled: !!id,
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
    });
};

/**
 * Hook for prefetching Pokemon details (for better UX)
 */
export const usePrefetchPokemonDetails = () => {
    const queryClient = useQueryClient();

    return (id: string | number) => {
        queryClient.prefetchQuery({
            queryKey: ['pokemon', 'details', id],
            queryFn: () => pokemonApi.getPokemonDetails(id),
            staleTime: 10 * 60 * 1000,
        });
    };
};
