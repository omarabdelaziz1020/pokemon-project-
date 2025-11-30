import React from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { pokemonApi } from "../services/pokemonApi";
import type { Pokemon } from "../types/pokemon";

const { Text } = Typography;

interface PokemonCardProps {
  pokemon: Pokemon;
  onHover?: (id: number) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  onHover,
}) => {
  const { currentTheme } = useTheme();
  const pokemonId = pokemonApi.extractIdFromUrl(pokemon.url);
  const pokemonNumber = pokemonId.toString().padStart(3, "0");

  const handleMouseEnter = () => {
    onHover?.(pokemonId);
  };

  return (
    <Link 
      to={`/pokemon/${pokemonId}`} 
      className="block"
      aria-label={`View details for ${pokemon.name} #${pokemonNumber}`}
    >
      <Card
        className="pokemon-card h-full transform transition-all duration-300 hover:scale-105"
        style={{ borderColor: currentTheme.colors.primary }}
        onMouseEnter={handleMouseEnter}
        role="article"
        aria-label={`Pokemon card for ${pokemon.name}`}
        cover={
          <div
            className="flex justify-center items-center h-48 p-4"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.colors.primaryLight} 0%, ${currentTheme.colors.primary} 100%)`,
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt={`${pokemon.name} official artwork`}
              className="max-h-full max-w-full object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>
        }
        bodyStyle={{ padding: "16px" }}
      >
        <div className="text-center">
          <Text
            style={{ color: currentTheme.colors.secondary }}
            className="text-sm font-medium"
            aria-label={`Pokemon number ${pokemonNumber}`}
          >
            #{pokemonNumber}
          </Text>
          <div className="mt-1">
            <Text
              style={{ color: currentTheme.colors.text }}
              className="text-lg font-bold capitalize"
            >
              {pokemon.name}
            </Text>
          </div>
        </div>
      </Card>
    </Link>
  );
};
