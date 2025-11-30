import React from 'react';
import { Progress, Typography } from 'antd';
import { useTheme } from '../hooks/useTheme';
import type { PokemonStat } from '../types/pokemon';

const { Text } = Typography;

interface StatsDisplayProps {
  stats: PokemonStat[];
}

// Map stat names to more readable versions
const statNameMap: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Attack',
  'special-defense': 'Sp. Defense',
  speed: 'Speed',
};

// Color mapping for different stat types
const statColorMap: Record<string, string> = {
  hp: '#FF0000',
  attack: '#F08030',
  defense: '#F8D030',
  'special-attack': '#6890F0',
  'special-defense': '#78C850',
  speed: '#F85888',
};

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats }) => {
  const { currentTheme } = useTheme();

  // Calculate total stats
  const totalStats = stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const maxStat = 255; // Maximum possible base stat in Pokemon

  return (
    <div className="space-y-4">
      {stats.map((stat) => {
        const statName = stat.stat.name;
        const displayName = statNameMap[statName] || statName;
        const percentage = (stat.base_stat / maxStat) * 100;
        const color = statColorMap[statName] || currentTheme.colors.primary;

        return (
          <div key={statName} className="space-y-1">
            <div className="flex justify-between items-center">
              <Text
                strong
                style={{ color: currentTheme.colors.text }}
                className="text-sm"
              >
                {displayName}
              </Text>
              <Text
                style={{ color: currentTheme.colors.text }}
                className="text-sm font-semibold"
              >
                {stat.base_stat}
              </Text>
            </div>
            <Progress
              percent={percentage}
              strokeColor={color}
              showInfo={false}
              strokeWidth={12}
              trailColor="#e0e0e0"
            />
          </div>
        );
      })}

      {/* Total Stats */}
      <div
        className="mt-4 p-3 rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primaryLight} 0%, ${currentTheme.colors.accent} 100%)`,
        }}
      >
        <div className="flex justify-between items-center">
          <Text
            strong
            style={{ color: currentTheme.colors.text }}
            className="text-base"
          >
            Total Stats
          </Text>
          <Text
            strong
            style={{ color: currentTheme.colors.text }}
            className="text-xl"
          >
            {totalStats}
          </Text>
        </div>
        <Text
          style={{ color: currentTheme.colors.text }}
          className="text-xs opacity-75"
        >
          Average: {(totalStats / stats.length).toFixed(1)}
        </Text>
      </div>
    </div>
  );
};

