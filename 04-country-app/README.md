# 🌍 Country App

A modern, responsive web application built with **Angular 20** that provides comprehensive information about countries around the world. This application allows users to search and explore countries by various criteria including capital cities, country names, and regions.

## ✨ Features

- **Country Search by Capital**: Find countries by searching for their capital cities
- **Country Search by Name**: Search for countries using their names
- **Country Search by Region**: Browse countries by geographical regions
- **Detailed Country Information**: View comprehensive details including:
  - Country flags and names
  - Capital cities
  - Population data
  - Languages spoken
  - Border countries with clickable navigation
  - Country translations in multiple languages
- **Responsive Design**: Modern UI built with Tailwind CSS and DaisyUI
- **Real-time Search**: Instant search results as you type
- **Navigation**: Seamless navigation between different search methods and country details

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd 04-country-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 🛠️ Development

### Available Scripts

- **`npm start`** - Starts the development server
- **`npm run build`** - Builds the project for production
- **`npm run watch`** - Builds the project in watch mode for development
- **`npm test`** - Runs unit tests with Karma

### Project Structure

```
src/
├── app/
│   ├── country/                 # Country-related features
│   │   ├── components/          # Reusable country components
│   │   │   ├── country-list/    # Country list display
│   │   │   ├── country-search-input/  # Search input component
│   │   │   └── top-menu/        # Navigation menu
│   │   ├── pages/               # Country pages
│   │   │   ├── by-capital-page/ # Search by capital
│   │   │   ├── by-country-page/ # Search by country name
│   │   │   ├── by-region-page/  # Search by region
│   │   │   └── country-page/    # Individual country details
│   │   ├── services/            # Country data services
│   │   ├── interfaces/          # TypeScript interfaces
│   │   └── mapper/              # Data transformation logic
│   └── shared/                  # Shared components and utilities
│       ├── components/          # Common components (footer, not-found)
│       └── pages/               # Shared pages (home)
```

### Technology Stack

- **Frontend Framework**: Angular 20 (Standalone Components)
- **Styling**: Tailwind CSS 4 + DaisyUI
- **Routing**: Angular Router
- **HTTP Client**: Angular HttpClient with Fetch API
- **Build Tool**: Angular Build System
- **Package Manager**: npm

## 🌐 API Integration

This application integrates with external APIs to fetch country data. The app uses:
- **REST Countries API** for country information
- **HTTP requests** to fetch real-time data
- **Data mapping** to transform API responses into application models

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive user interface
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Accessibility**: Built with accessibility best practices in mind
- **Icon Integration**: FontAwesome icons for enhanced visual experience

## 🔧 Configuration

The application uses several configuration files:
- **`angular.json`** - Angular CLI configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`.postcssrc.json`** - PostCSS configuration

## 📱 Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information about your problem
3. Include browser console logs and steps to reproduce the issue

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Offline support with service workers
- [ ] Country comparison feature
- [ ] Interactive maps integration
- [ ] User preferences and favorites
- [ ] Multi-language support for the UI

---

**Happy exploring! 🌍✨**
