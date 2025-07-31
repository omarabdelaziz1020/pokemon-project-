import React from "react";
import { Select } from "antd";
import { useTheme } from "../hooks/useTheme";

const { Option } = Select;

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, themes } = useTheme();

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId);
  };

  return (
    <Select
      value={currentTheme.id}
      onChange={handleThemeChange}
      className="min-w-[140px]"
      size="middle"
      placeholder="Select Theme"
    >
      {themes.map((theme) => (
        <Option key={theme.id} value={theme.id}>
          <div className="flex items-center space-x-2">
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.gradient}`}
            />
            <span className="font-medium">{theme.name}</span>
          </div>
        </Option>
      ))}
    </Select>
  );
};
