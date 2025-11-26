import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ToolbarProps {
  mode: "edit" | "preview";
  onToggleMode: (mode: "edit" | "preview") => void;
  onClear: () => void;
  wordCount: number;
}

export default function Toolbar({
  mode,
  onToggleMode,
  onClear,
  wordCount,
}: ToolbarProps) {
  // Define the dynamic styles here to avoid NativeWind crashes
  const getButtonStyle = (isActive: boolean) => {
    return isActive
      ? {
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1, // This creates the 'shadow-sm' effect
        }
      : {
          opacity: 0.6,
        };
  };

  return (
    <View className="bg-white border-b border-slate-200 px-4 py-3 flex-row items-center justify-between">
      
      <View className="flex-row items-center bg-slate-100 p-1 rounded-lg">
        <TouchableOpacity
          onPress={() => onToggleMode("edit")}
          className="px-4 py-1.5 rounded-md"
          style={getButtonStyle(mode === "edit")}
        >
          <Text
            className={`text-sm font-medium ${
              mode === "edit" ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Editor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onToggleMode("preview")}
          className="px-4 py-1.5 rounded-md"
          style={getButtonStyle(mode === "preview")}
        >
          <Text
            className={`text-sm font-medium ${
              mode === "preview" ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Preview
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center">
        <Text className="text-xs text-slate-400 font-mono mr-3">
          {wordCount} words
        </Text>

        <TouchableOpacity onPress={onClear} className="p-2">
          <Text className="text-red-500 text-sm font-medium">Clear</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}