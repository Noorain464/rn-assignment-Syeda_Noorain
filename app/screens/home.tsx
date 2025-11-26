// screens/home.tsx
import { useState } from "react";
import { View, Text, Alert } from "react-native";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

const INITIAL_NOTE = `# Welcome to MarkNote

This is a simple markdown editor. You can **bold** text, *italicize*, and create lists.

## Features
1. Edit markdown
2. Preview instantly

Try typing below!
`;

type ViewMode = "edit" | "preview";

export default function Home() {
  const [note, setNote] = useState(INITIAL_NOTE);
  const [mode, setMode] = useState<ViewMode>("edit");

  const handleClear = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to clear the note?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Clear", style: "destructive", onPress: () => setNote("") }
      ]
    );
  };

  const wordCount = note.trim().split(/\s+/).filter(w => w.length > 0).length;

  return (
    <View className="flex-1 bg-gray-50">
      <Toolbar
        mode={mode}
        onToggleMode={setMode}
        onClear={handleClear}
        wordCount={wordCount}
      />

      <View className="flex-1 relative">
        {mode === "edit" ? (
          <Editor value={note} onChange={setNote} />
        ) : (
          <Preview markdown={note} />
        )}
      </View>
    </View>
  );
}
