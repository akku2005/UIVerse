// src/components/shared/ThemePicker.jsx
const ThemePicker = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: "blue", color: "#3B82F6" },
    { id: "red", color: "#EF4444" },
    { id: "green", color: "#34C759" },
    { id: "purple", color: "#8B5CF6" },
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">Theme:</span>
      <div className="flex space-x-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            style={{ backgroundColor: theme.color }}
            className={`w-6 h-6 rounded-full transition-all ${
              currentTheme === theme.id
                ? "ring-2 ring-offset-2 ring-gray-400"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemePicker;
