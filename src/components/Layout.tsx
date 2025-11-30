import React from "react";
import { Layout as AntLayout, Typography } from "antd";
import { Link } from "react-router-dom";
import { ThemeSelector } from "./ThemeSelector";
import { useTheme } from "../hooks/useTheme";

const { Header, Content, Footer } = AntLayout;
const { Title } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <AntLayout className="min-h-screen">
      <Header
        className="shadow-lg border-b-4 custom-header-padding"
        style={{
          backgroundColor: currentTheme.colors.primary,
          borderBottomColor: currentTheme.colors.primaryDark,
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            <Link
              to="/"
              className="flex items-center space-x-3 text-decoration-none"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: currentTheme.colors.secondary }}
              >
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <Title
                level={2}
                className="!m-0 font-pokemon"
                style={{ color: currentTheme.colors.text }}
              >
                Pokédex
              </Title>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <span
                  style={{ color: currentTheme.colors.text }}
                  className="font-medium"
                >
                  {currentTheme.pokemon} Theme
                </span>
              </div>
              <ThemeSelector />
            </div>
          </div>
        </div>
      </Header>

      <Content className="flex-1" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </Content>

      <Footer
        style={{ backgroundColor: currentTheme.colors.primaryDark }}
        className="text-center"
      >
        <div style={{ color: "#ffffff" }}>
          <p className="mb-2">
            © 2025 Pokédex App - Built with React, TypeScript & Ant Design
          </p>
          <p className="text-sm opacity-75">
            Data provided by{" "}
            <a
              href="https://pokeapi.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
              style={{ color: currentTheme.colors.primaryLight }}
            >
              PokéAPI
            </a>
          </p>
        </div>
      </Footer>
    </AntLayout>
  );
};
