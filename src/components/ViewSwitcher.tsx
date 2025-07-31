import React from "react";
import { Button, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import { UnorderedListOutlined, InboxOutlined } from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";

export const ViewSwitcher: React.FC = () => {
  const location = useLocation();
  const { currentTheme } = useTheme();
  const currentPath = location.pathname;

  return (
    <div
      className="bg-white rounded-xl p-4 shadow-lg mb-6"
      style={{ borderTop: `4px solid ${currentTheme.colors.primary}` }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3
            style={{ color: currentTheme.colors.text }}
            className="text-lg font-semibold mb-1"
          >
            Choose Your View
          </h3>
          <p style={{ color: currentTheme.colors.text }} className="text-sm">
            Switch between different browsing experiences
          </p>
        </div>

        <Space size="middle" wrap>
          <Link to="/pagination">
            <Button
              type={currentPath === "/pagination" ? "primary" : "default"}
              icon={<UnorderedListOutlined />}
              size="large"
              style={
                currentPath === "/pagination"
                  ? {
                      backgroundColor: currentTheme.colors.primary,
                      borderColor: currentTheme.colors.primary,
                      color: "#ffffff",
                    }
                  : {
                      borderColor: currentTheme.colors.primary,
                      color: currentTheme.colors.primary,
                    }
              }
              className="font-semibold"
            >
              Page Controls
            </Button>
          </Link>

          <Link to="/infinite-scroll">
            <Button
              type={currentPath === "/infinite-scroll" ? "primary" : "default"}
              icon={<InboxOutlined />}
              size="large"
              style={
                currentPath === "/infinite-scroll"
                  ? {
                      backgroundColor: currentTheme.colors.accent,
                      borderColor: currentTheme.colors.accent,
                      color: "#ffffff",
                    }
                  : {
                      borderColor: currentTheme.colors.accent,
                      color: currentTheme.colors.accent,
                    }
              }
              className="font-semibold"
            >
              Infinite Scroll
            </Button>
          </Link>
        </Space>
      </div>
    </div>
  );
};
