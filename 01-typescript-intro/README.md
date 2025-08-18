# TypeScript Introduction Project

A comprehensive learning project designed to introduce developers to TypeScript fundamentals through practical examples and hands-on exercises.

## 🎯 Project Overview

This project serves as a structured learning environment for TypeScript, covering essential concepts from basic types to advanced features like decorators and optional chaining. Each topic is organized in separate modules within the `src/topics/` directory, allowing learners to focus on specific concepts one at a time.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode
```bash
npm run dev
```
This starts the Vite development server. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

#### Build for Production
```bash
npm run build
```
This compiles TypeScript and builds the project for production.

#### Preview Production Build
```bash
npm run preview
```
This serves the production build locally for testing.

## 📚 Learning Topics

The project covers the following TypeScript concepts:

1. **Basic Types** (`01-basic-types.ts`) - Primitive types, arrays, tuples
2. **Objects & Interfaces** (`02-object-interface.ts`) - Object types, interface definitions
3. **Functions** (`03-functions.ts`) - Function types, parameters, return types
4. **Homework Types** (`04-homework-types.ts`) - Practice exercises with types
5. **Basic Destructuring** (`05-basic-destructuring.ts`) - Array and object destructuring
6. **Function Destructuring** (`06-function-destructuring.ts`) - Destructuring in function parameters
7. **Import/Export** (`07-import-export.ts`) - Module system and syntax
8. **Classes** (`08-clases.ts`) - Class definitions, inheritance, access modifiers
9. **Generics** (`09-generics.ts`) - Generic types and functions
10. **Decorators** (`10-decorators.ts`) - Class and method decorators
11. **Optional Chaining** (`11-optional-chaining.ts`) - Safe property access

## 🛠️ Project Structure

```
src/
├── main.ts                 # Main entry point
├── style.css              # Global styles
├── topics/                # Learning modules
│   ├── 01-basic-types.ts
│   ├── 02-object-interface.ts
│   ├── 03-functions.ts
│   ├── 04-homework-types.ts
│   ├── 05-basic-destructuring.ts
│   ├── 06-function-destructuring.ts
│   ├── 07-import-export.ts
│   ├── 08-clases.ts
│   ├── 09-generics.ts
│   ├── 10-decorators.ts
│   └── 11-optional-chaining.ts
└── vite-env.d.ts          # Vite type definitions
```

## 🔧 Configuration

- **TypeScript**: Configured with strict mode enabled for better type safety
- **Vite**: Fast build tool for modern web development
- **ES2020**: Targets modern JavaScript features
- **Module System**: Uses ES modules for better tree-shaking and bundling

## 📖 How to Use

1. **Start with the basics**: Begin with `01-basic-types.ts` and work your way through
2. **Uncomment topics**: In `main.ts`, uncomment the import for the topic you want to study
3. **Experiment**: Modify the code examples to see how TypeScript behaves
4. **Check the console**: Use browser dev tools to see console output and any type errors

## 🎓 Learning Path

1. **Beginner**: Topics 1-4 (Basic types, objects, functions)
2. **Intermediate**: Topics 5-7 (Destructuring, modules)
3. **Advanced**: Topics 8-11 (Classes, generics, decorators)

## 🐛 Troubleshooting

- **Type errors**: Check the browser console and terminal for TypeScript compilation errors
- **Build issues**: Ensure all dependencies are installed with `npm install`
- **Port conflicts**: If port 5173 is busy, Vite will automatically suggest an alternative

## 📝 Contributing

Feel free to add new examples, improve existing ones, or suggest additional TypeScript concepts to cover.

## 📄 License

This project is for educational purposes.

---

Happy coding! 🚀
