import React from "react";
import { Card } from "antd";

export const PokemonCardSkeleton: React.FC = () => {
  return (
    <Card className="h-full">
      <div className="flex justify-center items-center h-48 bg-gray-200 animate-pulse rounded-t-lg">
        <div className="w-32 h-32 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
      <div className="p-4 text-center">
        <div className="h-4 bg-gray-200 rounded w-16 mx-auto animate-pulse mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-24 mx-auto animate-pulse"></div>
      </div>
    </Card>
  );
};

interface SkeletonGridProps {
  count?: number;
}

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({ count = 20 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: count }, (_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};
