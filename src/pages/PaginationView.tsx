import React, { useState } from "react";
import { Typography, Pagination, Row, Col, Statistic } from "antd";
import { PokemonCard } from "../components/PokemonCard";
import { ViewSwitcher } from "../components/ViewSwitcher";
import { SkeletonGrid } from "../components/SkeletonLoader";
import { ErrorDisplay } from "../components/ErrorDisplay";
import { useTheme } from "../hooks/useTheme";
import { usePokemonList, usePrefetchPokemonDetails } from "../hooks/usePokemon";

const { Title } = Typography;

export const PaginationView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentTheme } = useTheme();
  const limit = 20;

  const { data, isLoading, error, refetch } = usePokemonList(
    currentPage,
    limit
  );
  const prefetchPokemonDetails = usePrefetchPokemonDetails();

  const totalPages = data ? Math.ceil(data.count / limit) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          Pokemon Gallery
        </Title>
        <p style={{ color: currentTheme.colors.text }} className="text-lg">
          Discover and explore Pokemon with page controls
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
            <Col xs={12} sm={6}>
              <Statistic
                title="Total Pokemon"
                value={data.count}
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Statistic
                title="Current Page"
                value={currentPage}
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Statistic
                title="Total Pages"
                value={totalPages}
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Statistic
                title="Pokemon Shown"
                value={`${limit} per page`}
                valueStyle={{ color: currentTheme.colors.primary }}
              />
            </Col>
          </Row>
        </div>
      )}

      {/* Pokemon Grid */}
      {isLoading ? (
        <SkeletonGrid count={limit} />
      ) : (
        data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data.results.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                onHover={handlePokemonHover}
              />
            ))}
          </div>
        )
      )}

      {/* Pagination Controls */}
      {data && (
        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Pagination
              current={currentPage}
              total={data.count}
              pageSize={limit}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} Pokemon`
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};
