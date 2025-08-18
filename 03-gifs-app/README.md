# 🎬 Gifs App

A modern Angular application for browsing, searching, and managing GIFs using the Giphy API. Built with Angular 19, TypeScript, and Tailwind CSS.

## ✨ Features

- **Trending GIFs**: Browse the latest trending GIFs from Giphy
- **Search Functionality**: Search for specific GIFs by keywords
- **Search History**: Automatically saves your search history in localStorage
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Lazy Loading**: Optimized performance with route-based code splitting
- **State Management**: Uses Angular signals for reactive state management

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Usually comes with Node.js
- **Angular CLI**: Version 19 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LeonStyven/Angular
   cd 03-gifs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   The project uses environment variables for API configuration. The Giphy API key is already configured in the environment files, but you can update it if needed:
   
   - Edit `src/environments/environment.ts` for production
   - Edit `src/environments/environment.development.ts` for development

4. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:4200/` to view the application.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── gifs/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── gif-list/       # GIF list display component
│   │   │   └── side-menu/      # Navigation sidebar
│   │   ├── interfaces/         # TypeScript interfaces
│   │   ├── mapper/             # Data transformation utilities
│   │   ├── pages/              # Route components
│   │   │   ├── dashboard-page/ # Main dashboard
│   │   │   ├── trending-page/  # Trending GIFs
│   │   │   ├── search-page/    # Search functionality
│   │   │   └── gif-history/    # Search history
│   │   └── services/           # Business logic and API calls
│   └── shared/                 # Shared utilities and services
├── environments/                # Environment configuration
└── styles.css                  # Global styles
```

## 🎯 Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run watch` - Builds the project and watches for changes
- `npm test` - Runs unit tests
- `ng serve` - Alternative way to start the development server

## 🔧 Technologies Used

- **Angular 19** - Frontend framework
- **TypeScript** - Programming language
- **Tailwind CSS** - Utility-first CSS framework
- **RxJS** - Reactive programming library
- **Angular Signals** - Modern state management
- **Giphy API** - GIF data source

## 📱 Application Routes

- `/dashboard` - Main application dashboard
- `/dashboard/trending` - Trending GIFs (default route)
- `/dashboard/search` - Search for GIFs
- `/dashboard/history/:query` - View search history for specific queries

## 🎨 Key Components

- **Dashboard Page**: Main container with side navigation
- **Side Menu**: Navigation sidebar with search history
- **GIF List**: Displays GIFs in a responsive grid layout
- **Search Page**: Search interface with real-time results
- **Trending Page**: Shows currently trending GIFs

## 🔌 API Integration

The application integrates with the Giphy API to:
- Fetch trending GIFs
- Search for specific GIFs
- Handle pagination and loading states
- Cache search results in localStorage

## 🚀 Deployment

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Ensure you're using the correct Node.js and Angular versions

---

**Happy GIF hunting! 🎉**
