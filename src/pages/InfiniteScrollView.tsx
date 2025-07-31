import React from "react";
import { Typography, Button, Row, Col, Statistic } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { PokemonCard } from "../components/PokemonCard";
import { ViewSwitcher } from "../components/ViewSwitcher";
import { SkeletonGrid } from "../components/SkeletonLoader";
import { ErrorDisplay } from "../components/ErrorDisplay";
import { useTheme } from "../hooks/useTheme";
import {
  usePokemonInfiniteList,
  usePrefetchPokemonDetails,
} from "../hooks/usePokemon";

const { Title } = Typography;

export const InfiniteScrollView: React.FC = () => {
  const limit = 20;
  const { currentTheme } = useTheme();
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = usePokemonInfiniteList(limit);

  const prefetchPokemonDetails = usePrefetchPokemonDetails();

  // Calculate total loaded Pokemon
  const totalLoaded =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  const totalAvailable = data?.pages[0]?.count || 0;

  const handlePokemonHover = (id: number) => {
    prefetchPokemonDetails(id);
  };

  if (error) {
    return (
      <ErrorDisplay
        error={error}
        onRetry={() => refetch()}
        title="Failed to load Pokemon"
        description="We couldn't fetch the Pokemon list. Please try again."
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Title
          level={1}
          style={{ color: currentTheme.colors.text }}
          className="!mb-2"
        >
          Pokemon Explorer
        </Title>
        <p style={{ color: currentTheme.colors.text }} className="text-lg">
          Discover and explore Pokemon with infinite scroll
        </p>
        <div className="mt-4">
          <ViewSwitcher />
        </div>
      </div>

      {/* Statistics */}
      {data && (
        <div
          className="bg-white rounded-xl p-6 shadow-lg"
          style={{ borderTop: `4px solid ${currentTheme.colors.primary}` }}
        >
          <Row gutter={[16, 16]} className="text-center">
            <Col xs={12} sm={8}>
              <Statistic
                title="Total Pokemon"
                value={totalAvailable}
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
            <Col xs={12} sm={8}>
              <Statistic
                title="Loaded"
                value={totalLoaded}
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Progress"
                value={((totalLoaded / totalAvailable) * 100).toFixed(1)}
                suffix="%"
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
          </Row>
        </div>
      )}

      {/* Initial Loading */}
      {isLoading && <SkeletonGrid count={limit} />}

      {/* Pokemon Grid */}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.pages.map((page, pageIndex) =>
            page.results.map((pokemon) => (
              <PokemonCard
                key={`${pageIndex}-${pokemon.name}`}
                pokemon={pokemon}
                onHover={handlePokemonHover}
              />
            ))
          )}
        </div>
      )}

      {/* Load More Button */}
      {data && (
        <div className="flex flex-col items-center space-y-4 mt-12">
          {hasNextPage && (
            <Button
              type="primary"
              size="large"
              icon={isFetchingNextPage ? <LoadingOutlined /> : <PlusOutlined />}
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              style={{
                backgroundColor: currentTheme.colors.primary,
                borderColor: currentTheme.colors.primary,
                color: "#ffffff",
              }}
              className="font-semibold h-12 px-8"
            >
              {isFetchingNextPage ? "Loading More..." : "Load More Pokemon"}
            </Button>
          )}

          {!hasNextPage && (
            <div className="text-center">
              <div
                className="bg-white rounded-xl p-6 shadow-lg"
                style={{
                  borderTop: `4px solid ${currentTheme.colors.primary}`,
                }}
              >
                <p
                  style={{ color: currentTheme.colors.text }}
                  className="font-semibold text-lg mb-2"
                >
                  🎉 You've seen all Pokemon!
                </p>
                <p style={{ color: currentTheme.colors.text }}>
                  You've loaded all {totalLoaded} Pokemon. Great job exploring!
                </p>
              </div>
            </div>
          )}

          {/* Loading indicator for next page */}
          {isFetchingNextPage && (
            <div className="mt-8">
              <SkeletonGrid count={limit} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
