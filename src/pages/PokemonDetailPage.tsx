import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  Statistic,
  Tag,
  Divider,
} from "antd";
import { ArrowLeftOutlined, TrophyOutlined } from "@ant-design/icons";
import { usePokemonDetails } from "../hooks/usePokemon";
import { useTheme } from "../hooks/useTheme";
import { ErrorDisplay } from "../components/ErrorDisplay";

const { Title, Text } = Typography;

export const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const { data: pokemon, isLoading, error, refetch } = usePokemonDetails(id!);

  if (error) {
    return (
      <ErrorDisplay
        error={error}
        onRetry={() => refetch()}
        title="Failed to load Pokemon details"
        description="We couldn't fetch the Pokemon information. Please try again."
      />
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <div className="bg-gray-200 rounded-xl h-96 animate-pulse"></div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <ErrorDisplay
        title="Pokemon not found"
        description="The Pokemon you're looking for doesn't exist."
      />
    );
  }

  const pokemonNumber = pokemon.id.toString().padStart(3, "0");
  const heightInMeters = (pokemon.height / 10).toFixed(1);
  const weightInKg = (pokemon.weight / 10).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <div className="flex items-center space-x-4">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="flex items-center"
          style={{
            borderColor: currentTheme.colors.primary,
            color: currentTheme.colors.primary,
          }}
        >
          Back
        </Button>
        <Text style={{ color: currentTheme.colors.text }}>Pokemon Details</Text>
      </div>

      {/* Main Content */}
      <Row gutter={[24, 24]}>
        {/* Pokemon Image */}
        <Col xs={24} lg={12}>
          <Card className="h-full">
            <div className="text-center">
              <div
                className="rounded-xl p-8 mb-6"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primaryLight} 0%, ${currentTheme.colors.primary} 50%, ${currentTheme.colors.primaryDark} 100%)`,
                }}
              >
                <img
                  src={
                    pokemon.sprites.other["official-artwork"].front_default ||
                    pokemon.sprites.front_default
                  }
                  alt={pokemon.name}
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
              </div>

              {/* Alternative Images */}
              <div className="flex justify-center space-x-4">
                <div className="bg-gray-100 rounded-lg p-2">
                  <img
                    src={pokemon.sprites.front_default}
                    alt={`${pokemon.name} front`}
                    className="w-16 h-16"
                  />
                  <Text className="text-xs text-gray-500 block text-center mt-1">
                    Front
                  </Text>
                </div>
                {pokemon.sprites.front_shiny && (
                  <div className="bg-gray-100 rounded-lg p-2">
                    <img
                      src={pokemon.sprites.front_shiny}
                      alt={`${pokemon.name} shiny`}
                      className="w-16 h-16"
                    />
                    <Text className="text-xs text-gray-500 block text-center mt-1">
                      Shiny
                    </Text>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </Col>

        {/* Pokemon Info */}
        <Col xs={24} lg={12}>
          <Card className="h-full">
            <div className="space-y-6">
              {/* Name and Number */}
              <div>
                <Text
                  style={{ color: currentTheme.colors.secondary }}
                  className="font-medium"
                >
                  #{pokemonNumber}
                </Text>
                <Title
                  level={1}
                  style={{ color: currentTheme.colors.text }}
                  className="!mb-0 capitalize"
                >
                  {pokemon.name}
                </Title>
              </div>

              {/* Types */}
              <div>
                <Text
                  strong
                  style={{ color: currentTheme.colors.text }}
                  className="block mb-2"
                >
                  Types
                </Text>
                <div className="space-x-2">
                  {pokemon.types.map((type) => (
                    <Tag
                      key={type.type.name}
                      className={`pokemon-type ${type.type.name} border-none text-white font-medium px-4 py-1`}
                    >
                      {type.type.name.toUpperCase()}
                    </Tag>
                  ))}
                </div>
              </div>

              <Divider />

              {/* Stats */}
              <div>
                <Text
                  strong
                  style={{ color: currentTheme.colors.text }}
                  className="block mb-4"
                >
                  Physical Attributes
                </Text>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Statistic
                      title="Height"
                      value={heightInMeters}
                      suffix="m"
                      className="text-center"
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="Weight"
                      value={weightInKg}
                      suffix="kg"
                      className="text-center"
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title={
                        <>
                          <TrophyOutlined className="mr-1" />
                          Experience
                        </>
                      }
                      value={pokemon.base_experience}
                      suffix="XP"
                      className="text-center"
                    />
                  </Col>
                </Row>
              </div>

              <Divider />

              {/* Additional Info */}
              <div
                className="p-4 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primaryLight} 0%, ${currentTheme.colors.accent} 100%)`,
                }}
              >
                <Text
                  strong
                  style={{ color: currentTheme.colors.text }}
                  className="block mb-2"
                >
                  Quick Facts
                </Text>
                <div
                  className="space-y-1 text-sm"
                  style={{ color: currentTheme.colors.text }}
                >
                  <p>• ID: #{pokemon.id}</p>
                  <p>• Base Experience: {pokemon.base_experience} XP</p>
                  <p>
                    • Types: {pokemon.types.map((t) => t.type.name).join(", ")}
                  </p>
                  <p>
                    • Height: {heightInMeters}m ({pokemon.height} decimeters)
                  </p>
                  <p>
                    • Weight: {weightInKg}kg ({pokemon.weight} hectograms)
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
