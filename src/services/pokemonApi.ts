import type { PokemonListResponse, PokemonDetails } from '../types/pokemon';

// Use environment variable with fallback
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://pokeapi.co/api/v2';

export const pokemonApi = {
    /**
     * Fetch a list of Pokemon with pagination
     * @param limit - Number of Pokemon to fetch (default: 20)
     * @param offset - Number of Pokemon to skip (default: 0)
     */
    async getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Pokemon list: ${response.statusText}`);
        }
        return response.json();
    },

    /**
     * Fetch detailed information about a specific Pokemon
     * @param id - Pokemon ID or name
     */
    async getPokemonDetails(id: string | number): Promise<PokemonDetails> {
        const response = await fetch(`${BASE_URL}/pokemon/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Pokemon details: ${response.statusText}`);
        }
        return response.json();
    },

    /**
     * Extract Pokemon ID from URL
     * @param url - Pokemon URL from the API
     */
    extractIdFromUrl(url: string): number {
        const matches = url.match(/\/pokemon\/(\d+)\//);
        return matches ? parseInt(matches[1], 10) : 0;
    },

    /**
     * Get Pokemon ID from name or ID
     * @param identifier - Pokemon name or ID
     */
    getPokemonId(identifier: string | number): number {
        if (typeof identifier === 'number') return identifier;
        if (typeof identifier === 'string' && /^\d+$/.test(identifier)) {
            return parseInt(identifier, 10);
        }
        // If it's a name, we'll need to fetch it to get the ID
        return 0;
    }
};
