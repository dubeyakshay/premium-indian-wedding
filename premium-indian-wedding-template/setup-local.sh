#!/bin/bash

# ============================================
# Indian Wedding Invitation - Local Setup
# ============================================
# Run this script in an empty folder to set up the project

echo "🎊 Setting up Indian Wedding Invitation..."

# Create project structure
mkdir -p src/{app/api/{health,rsvp,wishes},components/{decorative,sections},data,db}
mkdir -p customer/{photos,videos,music,icons}
mkdir -p public/customer/{photos,videos,music,icons}
mkdir -p .vscode

# Install dependencies
echo "📦 Creating package.json..."
cat > package.json << 'PACKAGEJSON'
{
  "name": "indian-wedding-invitation",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "drizzle-orm": "0.45.2",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.0",
    "next": "^14.2.0",
    "pg": "8.20.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.0",
    "react-intersection-observer": "^9.8.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/pg": "^8.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "drizzle-kit": "^0.31.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^14.2.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.4.0"
  }
}
PACKAGEJSON

echo ""
echo "✅ package.json created"
echo ""
echo "📦 Installing dependencies (this may take a minute)..."
npm install

echo ""
echo "✅ Dependencies installed!"
echo ""
echo "🎉 Setup complete! Now:"
echo "   1. Download source files from the sandbox"
echo "   2. Copy them into this folder"
echo "   3. Run: npm run dev"
echo "   4. Open: http://localhost:3000"
