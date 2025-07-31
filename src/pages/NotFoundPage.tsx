import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";

export const NotFoundPage: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle={
          <div className="space-y-2">
            <p style={{ color: currentTheme.colors.text }} className="text-lg">
              Oops! This Pokemon seems to have escaped...
            </p>
            <p
              style={{ color: currentTheme.colors.text }}
              className="opacity-75"
            >
              The page you're looking for doesn't exist in our Pokedex.
            </p>
          </div>
        }
        extra={
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button
                  type="primary"
                  icon={<HomeOutlined />}
                  size="large"
                  style={{
                    backgroundColor: currentTheme.colors.primary,
                    borderColor: currentTheme.colors.primary,
                    color: "#ffffff",
                  }}
                  className="font-semibold"
                >
                  Back to Home
                </Button>
              </Link>

              <Link to="/pagination">
                <Button
                  icon={<SearchOutlined />}
                  size="large"
                  style={{
                    borderColor: currentTheme.colors.primary,
                    color: currentTheme.colors.primary,
                  }}
                  className="hover:opacity-80"
                >
                  Browse Pokemon
                </Button>
              </Link>
            </div>

            <div className="text-center mt-6">
              <div className="text-6xl mb-4">⚡</div>
              <p
                style={{ color: currentTheme.colors.text }}
                className="text-sm opacity-75"
              >
                "A Pokemon trainer never gives up!" - Professor Oak
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};
