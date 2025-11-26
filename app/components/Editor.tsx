// components/Editor.tsx
import { View, TextInput } from "react-native";

interface EditorProps {
  value: string;
  onChange: (text: string) => void;
  disabled?: boolean;
}

export default function Editor({ value, onChange, disabled }: EditorProps) {
  return (
    <View className="flex-1 w-full h-full flex flex-col">
      <TextInput
        className="flex-1 w-full h-full p-4 text-base font-mono bg-white text-slate-800"
        value={value}
        onChangeText={onChange}
        placeholder={`# Start typing your note here...\n\n- Use markdown\n- To format your text`}
        editable={!disabled}
        multiline
        textAlignVertical="top"
        spellCheck={false}
      />
    </View>
  );
}
