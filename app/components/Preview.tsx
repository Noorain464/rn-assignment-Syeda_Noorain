// components/Preview.tsx
import { View, ScrollView, Text } from "react-native";
import Markdown from "react-native-markdown-display";

interface PreviewProps {
  markdown: string;
}

export default function Preview({ markdown }: PreviewProps) {
  if (!markdown.trim()) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-slate-400 italic">
          Nothing to preview yet. Switch to Edit mode to add content.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 w-full h-full p-4 bg-white">
      <View className="max-w-3xl mx-auto">
        <Markdown>{markdown}</Markdown>
      </View>
    </ScrollView>
  );
}
