#!/bin/bash

# Script de build para Cloudflare Pages
# Este script resolve problemas comuns com dependências binárias

echo "🚀 Iniciando build para Cloudflare Pages..."

# Remove cache e dependências anteriores
echo "🧹 Limpando cache..."
rm -rf node_modules package-lock.json .vite

# Instala dependências limpamente
echo "📦 Instalando dependências..."
npm ci --production=false --ignore-optional

# Instala dependências específicas do Rollup se necessário
echo "🔧 Verificando dependências do Rollup..."
npm install @rollup/rollup-linux-x64-gnu --save-optional || echo "⚠️  Dependência opcional do Rollup não instalada, continuando..."

# Build do projeto
echo "🔨 Construindo projeto..."
npm run build

echo "✅ Build concluído com sucesso!"
