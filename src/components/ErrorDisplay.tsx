import React from "react";
import { Result, Button } from "antd";
import { ReloadOutlined, FrownOutlined } from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";

interface ErrorDisplayProps {
  error?: Error | null;
  onRetry?: () => void;
  title?: string;
  description?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onRetry,
  title = "Oops! Something went wrong",
  description = "We couldn't fetch the Pokemon data. Please try again.",
}) => {
  const { currentTheme } = useTheme();

  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <Result
        icon={
          <FrownOutlined style={{ color: currentTheme.colors.secondary }} />
        }
        title={<span style={{ color: currentTheme.colors.text }}>{title}</span>}
        subTitle={
          <div style={{ color: currentTheme.colors.text }}>
            <p>{description}</p>
            {error && (
              <p className="text-sm opacity-75 mt-2">Error: {error.message}</p>
            )}
          </div>
        }
        extra={
          onRetry && (
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={onRetry}
              style={{
                backgroundColor: currentTheme.colors.primary,
                borderColor: currentTheme.colors.primary,
                color: "#ffffff",
              }}
              className="font-semibold"
            >
              Try Again
            </Button>
          )
        }
      />
    </div>
  );
};
