import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { UnorderedListOutlined, InboxOutlined } from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";

const { Title, Paragraph } = Typography;

export const HomePage: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <div className="mb-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl"
            style={{ backgroundColor: currentTheme.colors.secondary }}
          >
            <span className="text-white text-4xl">⚡</span>
          </div>
        </div>

        <Title
          level={1}
          style={{ color: currentTheme.colors.text }}
          className="!mb-4 font-pokemon text-4xl md:text-5xl"
        >
          Pokédex
        </Title>

        <Paragraph
          style={{ color: currentTheme.colors.text }}
          className="text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Discover and explore the wonderful world of Pokemon! Browse through
          hundreds of Pokemon with detailed information about their types,
          abilities, and characteristics.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} className="w-full max-w-4xl">
        <Col xs={24} md={12}>
          <Card
            className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2"
            style={{ borderColor: currentTheme.colors.primary }}
            bodyStyle={{ padding: "32px" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: currentTheme.colors.primary }}
              >
                <UnorderedListOutlined
                  style={{ color: "#ffffff" }}
                  className="text-2xl"
                />
              </div>

              <Title
                level={3}
                style={{ color: currentTheme.colors.text }}
                className="!mb-3"
              >
                Page Controls
              </Title>

              <Paragraph
                style={{ color: currentTheme.colors.text }}
                className="mb-6"
              >
                Browse Pokemon with traditional pagination controls. Navigate
                through pages with previous and next buttons, and jump to
                specific pages.
              </Paragraph>

              <Link to="/pagination">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: currentTheme.colors.primary,
                    borderColor: currentTheme.colors.primary,
                    color: "#ffffff",
                  }}
                  className="font-semibold h-12 px-8"
                >
                  View with Pagination
                </Button>
              </Link>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2"
            style={{ borderColor: currentTheme.colors.accent }}
            bodyStyle={{ padding: "32px" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                <InboxOutlined
                  style={{ color: "#ffffff" }}
                  className="text-2xl"
                />
              </div>

              <Title
                level={3}
                style={{ color: currentTheme.colors.text }}
                className="!mb-3"
              >
                Infinite Scroll
              </Title>

              <Paragraph
                style={{ color: currentTheme.colors.text }}
                className="mb-6"
              >
                Load Pokemon continuously with the "Load More" button. Perfect
                for endless browsing and discovering new Pokemon.
              </Paragraph>

              <Link to="/infinite-scroll">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: currentTheme.colors.accent,
                    borderColor: currentTheme.colors.accent,
                    color: "#ffffff",
                  }}
                  className="font-semibold h-12 px-8"
                >
                  View with Load More
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>

      <div className="mt-12 text-center">
        <Paragraph className="text-gray-500">
          Choose your preferred browsing experience and start exploring!
        </Paragraph>
      </div>
    </div>
  );
};
