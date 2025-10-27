# 🚀 Game Hub Deployment Guide

This guide covers all deployment methods available for the Game Hub application, from local development to production Kubernetes clusters.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Docker Deployment](#docker-deployment)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Helm Deployment](#helm-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Vercel Deployment](#vercel-deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Tools
- **Node.js 18+**
- **Docker** (for containerization)
- **kubectl** (for Kubernetes)
- **Helm 3+** (for Helm deployments)
- **Minikube** or access to a Kubernetes cluster

### Environment Setup
Create a `.env` file in the project root:
```env
VITE_API_KEY=your_rawg_api_key_here
```

## 🖥️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access application
# http://localhost:5173
```

## 🐳 Docker Deployment

### Build and Run Locally
```bash
# Build the Docker image
docker build -t game-hub .

# Run the container
docker run -p 5173:5173 game-hub

# Access application
# http://localhost:5173
```

### Using Docker Hub Image
```bash
# Pull and run the pre-built image
docker run -p 5173:5173 saadamir1/game-hub:latest
```

## ☸️ Kubernetes Deployment

### Method 1: Using kubectl with YAML manifests

```bash
# Apply all Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get deployments
kubectl get services
kubectl get pods

# Access application (NodePort)
# http://localhost:30080
```

### Method 2: Individual resource deployment

```bash
# Deploy application
kubectl apply -f k8s/deployment.yaml

# Create service
kubectl apply -f k8s/service.yaml

# Optional: Create ingress
kubectl apply -f k8s/ingress.yaml
```

### Verify Deployment
```bash
# Check all resources
kubectl get all

# View logs
kubectl logs -l app=game-hub

# Port forward for local access
kubectl port-forward service/game-hub-service 8080:80
```

## ⚙️ Helm Deployment

### Install with Helm
```bash
# Install the Helm chart
helm install game-hub ./my-game-hub

# Or upgrade existing installation
helm upgrade --install game-hub ./my-game-hub
```

### Custom Values
```bash
# Deploy with custom values
helm install game-hub ./my-game-hub \
  --set image.repository=saadamir1/game-hub \
  --set image.tag=latest \
  --set service.nodePort=30080
```

### Helm Management
```bash
# List releases
helm list

# Get release status
helm status game-hub

# Uninstall
helm uninstall game-hub
```

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow that automatically:

### Triggers
- Push to `master` branch
- Pull requests to `master` branch

### Pipeline Steps
1. **Build Stage**
   - Checkout code
   - Docker login
   - Build and push Docker image with multiple tags
   - Use Docker layer caching

2. **Deploy Stage**
   - Setup Minikube cluster
   - Configure kubectl
   - Install Helm
   - Deploy application using Helm

### Required Secrets
Configure these in your GitHub repository settings:
```
DOCKER_USERNAME=your_docker_hub_username
DOCKER_PASSWORD=your_docker_hub_password
```

### Docker Tags Created
- `saadamir1/game-hub:latest`
- `saadamir1/game-hub:master` (or branch name)
- `saadamir1/game-hub:${GITHUB_SHA}` (commit hash)

## 🌐 Vercel Deployment

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Set environment variables in Vercel dashboard:
   ```
   VITE_API_KEY=your_rawg_api_key
   ```

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

The `vercel.json` configuration handles SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 🔧 Configuration Details

### Kubernetes Resources

#### Deployment Configuration
- **Replicas**: 1 (configurable)
- **Image**: `saadamir1/game-hub:latest`
- **Container Port**: 5173
- **Resource Limits**: Not set (configurable in Helm)

#### Service Configuration
- **Type**: NodePort
- **Port**: 80 (external)
- **Target Port**: 5173 (container)
- **Node Port**: 30080

#### Helm Values
Key configurations in `values.yaml`:
- Image repository and tag
- Service type and ports
- Autoscaling settings (disabled by default)
- Ingress configuration (disabled by default)

## 🐛 Troubleshooting

### Common Issues

#### Docker Build Fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t game-hub .
```

#### Kubernetes Pod Not Starting
```bash
# Check pod status
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
```

#### Service Not Accessible
```bash
# Check service endpoints
kubectl get endpoints

# Verify service selector matches pod labels
kubectl get pods --show-labels
kubectl describe service game-hub-service
```

#### Helm Deployment Issues
```bash
# Debug Helm templates
helm template game-hub ./my-game-hub

# Check Helm release
helm get all game-hub

# Rollback if needed
helm rollback game-hub 1
```

### Port Access Issues

#### Minikube
```bash
# Get Minikube IP
minikube ip

# Access via NodePort
# http://<minikube-ip>:30080
```

#### Docker Desktop Kubernetes
```bash
# Access via localhost
# http://localhost:30080
```

### Environment Variables
Ensure RAWG API key is properly set:
```bash
# Check if environment variable is loaded
echo $VITE_API_KEY

# For Docker, pass environment variables
docker run -e VITE_API_KEY=your_key -p 5173:5173 game-hub
```

## 📊 Monitoring and Scaling

### Horizontal Pod Autoscaler
```bash
# Enable autoscaling in Helm values.yaml
autoscaling:
  enabled: true
  minReplicas: 1
  maxReplicas: 3
  targetCPUUtilizationPercentage: 80
```

### Resource Monitoring
```bash
# Check resource usage
kubectl top pods
kubectl top nodes

# Monitor deployment
kubectl get hpa
```

## 🔒 Security Considerations

- API keys should be stored as Kubernetes secrets in production
- Use specific image tags instead of `latest` for production
- Configure resource limits and requests
- Enable network policies if required
- Use HTTPS in production with proper ingress configuration

---

For additional help, check the main [README.md](README.md) or open an issue in the repository.