# Angular Bases Project

A comprehensive Angular 19 application demonstrating fundamental concepts and best practices for building modern web applications.

## 🚀 Project Overview

This project serves as a learning platform and reference implementation for Angular development, showcasing various core concepts including:

- **Component Architecture**: Modular, reusable components
- **Routing**: Client-side navigation with Angular Router
- **Services & Dependency Injection**: Shared business logic and state management
- **Signals**: Modern reactive state management using Angular Signals
- **Local Storage**: Data persistence in the browser
- **TypeScript**: Strong typing and interfaces
- **Responsive Design**: Modern UI components with CSS

## 🎯 Features

### Pages
- **Counter Page** (`/`): Basic counter functionality demonstrating component state
- **Dragonball Page** (`/dragonball`): Character management system with CRUD operations
- **Dragonball Super Page** (`/dragonball-super`): Extended character features
- **Hero Page** (`/hero`): Hero management interface

### Core Functionality
- **Character Management**: Add, view, and manage characters with power levels
- **Data Persistence**: Local storage integration for data persistence
- **Responsive Navigation**: Clean navigation bar with routing
- **Signal-based State**: Modern reactive state management
- **Type Safety**: Full TypeScript implementation with interfaces

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **Bun** (for faster package management)
- **Angular CLI** (version 19+)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LeonStyven/Angular
   cd 02-bases
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using Bun (recommended for faster installation):
   ```bash
   bun install
   ```

## 🚀 Getting Started

### Development Server

Start the development server:

```bash
npm start
# or
ng serve
# or with Bun
bun run start
```

The application will be available at `http://localhost:4200/`

### Build for Production

Create a production build:

```bash
npm run build
# or
ng build
# or with Bun
bun run build
```

### Running Tests

Execute unit tests:

```bash
npm test
# or
ng test
# or with Bun
bun run test
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── dragonball/     # Dragonball-specific components
│   │   │   ├── character-add/    # Add character form
│   │   │   └── character-list/   # Character display list
│   │   └── shared/         # Shared components
│   │       └── navbar/      # Navigation component
│   ├── interfaces/          # TypeScript interfaces
│   │   └── character.interface.ts
│   ├── pages/              # Page components
│   │   ├── counter/        # Counter page
│   │   ├── dragonball/     # Dragonball main page
│   │   ├── dragonball-super/ # Dragonball Super page
│   │   └── hero/           # Hero page
│   ├── services/           # Business logic services
│   │   └── dragonball.service.ts
│   ├── app.component.*     # Root component
│   ├── app.config.ts       # Application configuration
│   └── app.routes.ts       # Routing configuration
├── index.html              # Main HTML file
├── main.ts                 # Application entry point
└── styles.css              # Global styles
```

## 🔧 Key Technologies

- **Angular 19**: Latest version with modern features
- **TypeScript 5.7**: Strong typing and modern JavaScript features
- **Angular Signals**: Reactive state management
- **Angular Router**: Client-side navigation
- **Local Storage API**: Browser data persistence
- **CSS3**: Modern styling and responsive design

## 📚 Learning Objectives

This project demonstrates:

1. **Component Communication**: Parent-child component interaction
2. **Service Architecture**: Dependency injection and singleton patterns
3. **State Management**: Using Angular Signals for reactive state
4. **Routing**: Navigation between different application sections
5. **Data Persistence**: Local storage integration
6. **Type Safety**: Interface definitions and type checking
7. **Modern Angular**: Latest Angular 19 features and best practices

## 🎨 Customization

### Adding New Characters
The character system supports adding new characters with:
- Unique ID
- Name
- Power level

### Styling
Modify `src/styles.css` for global styles or component-specific CSS files for localized styling.

### Routing
Add new routes in `src/app/app.routes.ts` and create corresponding page components.

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port with `ng serve --port 4201`
2. **Dependencies issues**: Clear node_modules and reinstall
3. **Build errors**: Check TypeScript compilation errors in the terminal

### Getting Help

- Check the Angular documentation: [angular.io](https://angular.io)
- Review the console for error messages
- Ensure all dependencies are properly installed

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes and learning Angular development.

## 🤝 Support

For questions or support, please refer to:
- Angular official documentation
- Angular community forums
- GitHub issues (if applicable)

---

**Happy Coding! 🚀**
