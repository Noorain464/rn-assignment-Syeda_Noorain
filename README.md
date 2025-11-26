# MarkNote — Simple Notes App with Markdown Preview

A minimal, dual-mode notes app built with **React Native**, **Expo Router**, and **NativeWind**. It allows users to edit notes in markdown and toggle to a rendered preview.

## Features

- **Editor Mode:** distraction-free text input with multiline support.
- **Preview Mode:** Renders markdown (Bold, Italic, Lists, Headers) using `react-native-markdown-display`.
- **Word Count:** Real-time word tracking.
- **NativeWind Styling:** Utility-first CSS styling for React Native components.

## Prerequisites

- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **Expo Go** app installed on your physical device (iOS/Android) OR an Android/iOS Simulator.

## Installation

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

## Running the App

Start the Expo development server:

\`\`\`bash
npx expo start
\`\`\`

- **Scan the QR code** with your phone's camera (iOS) or the Expo Go app (Android).
- **Press \`i\`** to open in the iOS Simulator (Mac only).
- **Press \`a\`** to open in the Android Emulator.

## Key Dependencies

| Package | Purpose |
| :--- | :--- |
| **nativewind** | Tailwind CSS styling for React Native |
| **tailwindcss** | Utility CSS engine |
| **react-native-markdown-display** | Renders the markdown content in Preview mode |

## Project Structure

\`\`\`text
/app
  ├── _layout.tsx      # Root layout (Navigation setup)
  └── index.tsx        # Main screen logic
/components
  ├── Editor.tsx       # Text input component
  ├── Preview.tsx      # Markdown rendering component
  └── Toolbar.tsx      # Toggle buttons & Word count
\`\`\`

