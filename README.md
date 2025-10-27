# 🎮 Game Hub

A modern, responsive web application for discovering and exploring video games. Built with React, TypeScript, and powered by the RAWG Video Games Database API.

## ✨ Features

- **Game Discovery**: Browse thousands of games with advanced filtering and sorting
- **Search & Filter**: Find games by name, genre, platform, and release date
- **Game Details**: Detailed game information including screenshots, trailers, and ratings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Infinite Scroll**: Seamless browsing experience with lazy loading
- **Performance Optimized**: Fast loading with React Query caching

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Chakra UI** - Modern component library
- **React Router** - Client-side routing
- **React Query** - Server state management and caching
- **Zustand** - Lightweight state management
- **Framer Motion** - Smooth animations
- **React Icons** - Comprehensive icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

### Deployment & DevOps
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **Helm** - Kubernetes package management
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Frontend deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/game-hub.git
   cd game-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project supports multiple deployment methods:

- **Local Development** - `npm run dev`
- **Docker** - Containerized deployment
- **Kubernetes** - Production-ready orchestration
- **Helm** - Kubernetes package management
- **Vercel** - Serverless frontend deployment
- **CI/CD** - Automated GitHub Actions pipeline

### Quick Deploy
```bash
# Docker
docker run -p 5173:5173 saadamir1/game-hub:latest

# Kubernetes
kubectl apply -f k8s/

# Helm
helm install game-hub ./my-game-hub
```

📖 **For detailed deployment instructions, troubleshooting, and configuration options, see [DEPLOYMENT.md](DEPLOYMENT.md)**

## 🌐 Live Demo

Visit the live application: [Game Hub Demo](https://your-vercel-url.vercel.app)

## 📱 Screenshots

*Add screenshots of your application here*

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── services/           # API services
├── entities/           # TypeScript interfaces
├── data/              # Static data
├── assets/            # Images and static files
└── theme.ts           # Chakra UI theme configuration
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_KEY=your_rawg_api_key
```

### API Integration
This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs). Get your free API key and add it to your environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [RAWG.io](https://rawg.io/) for providing the games database API
- [Chakra UI](https://chakra-ui.com/) for the component library
- [React Query](https://tanstack.com/query) for excellent data fetching

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio](https://yourportfolio.com)

---

⭐ Star this repository if you found it helpful!