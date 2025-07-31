import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useTheme } from "../hooks/useTheme";
import { Layout } from "./Layout";
import { HomePage } from "../pages/HomePage";
import { PaginationView } from "../pages/PaginationView";
import { InfiniteScrollView } from "../pages/InfiniteScrollView";
import { PokemonDetailPage } from "../pages/PokemonDetailPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppContent: React.FC = () => {
  const { currentTheme } = useTheme();

  // Dynamic Ant Design theme based on current selected theme
  const antdTheme = {
    token: {
      colorPrimary: currentTheme.colors.primary,
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: currentTheme.colors.secondary,
      colorInfo: "#1890ff",
      borderRadius: 8,
      fontFamily: "Nunito, system-ui, sans-serif",
    },
    components: {
      Button: {
        borderRadius: 8,
        fontWeight: 600,
      },
      Card: {
        borderRadius: 12,
      },
    },
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pagination" element={<PaginationView />} />
            <Route path="/infinite-scroll" element={<InfiniteScrollView />} />
            <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};
