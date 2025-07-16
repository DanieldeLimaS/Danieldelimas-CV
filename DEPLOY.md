# 🚀 Deploy no Cloudflare Pages

Este projeto está configurado para deploy automático no Cloudflare Pages.

## 📋 Configurações Otimizadas

### ✅ Compatibilidade Garantida
- **Vite 5.4.1** - Framework suportado nativamente
- **React 18** - Compatível com Cloudflare Pages
- **TypeScript** - Build otimizado
- **Tailwind CSS** - CSS processado corretamente

### 🔧 Configurações Específicas
- **Build Directory**: `dist/`
- **Build Command**: `npm run build`
- **Node.js Version**: 18 ou 20 (recomendado)

## 🌐 Deploy Automático

### Via Interface Web (Recomendado)
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecte seu repositório GitHub/GitLab
3. Configure:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`

### Via Wrangler CLI
```bash
# Instalar Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
npm run deploy
```

## 📁 Arquivos de Configuração

### `vite.config.ts`
- Otimizado para Cloudflare Pages
- Usa `esbuild` para minificação
- Configurações de assets organizadas
- Target ES2015 para compatibilidade

### `wrangler.toml`
- Configuração específica do Cloudflare
- Build command definido
- Diretório de saída configurado

### `public/_redirects`
- Roteamento SPA configurado
- Todas as rotas redirecionam para `index.html`

### `public/_headers`
- Headers de segurança configurados
- Cache otimizado para assets
- Performance melhorada

## 🔍 Troubleshooting

### Problemas Comuns

**1. Build falha**
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

**2. Assets não carregam**
- Verifique se `public/_redirects` existe
- Confirme que assets estão em `dist/assets/`

**3. Roteamento não funciona**
- Certifique-se que `public/_redirects` contém: `/*    /index.html   200`

## 📊 Performance

### Otimizações Implementadas
- ✅ Sourcemaps desabilitados em produção
- ✅ Minificação com esbuild
- ✅ Assets com hash para cache
- ✅ CSS code splitting
- ✅ Lazy loading de componentes

### Métricas Esperadas
- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Segurança

### Headers Configurados
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 📈 Monitoramento

### Cloudflare Analytics
- Integração automática com Cloudflare Analytics
- Métricas de performance em tempo real
- Relatórios de visitantes

### Custom Domain
1. Configure seu domínio no Cloudflare Pages
2. DNS será configurado automaticamente
3. SSL gratuito incluído

## 🎯 Próximos Passos

1. ✅ Configuração otimizada
2. 🔄 Push para repositório
3. 🌐 Conectar ao Cloudflare Pages
4. 🚀 Deploy automático
5. 📊 Monitorar performance
6. 🔗 Configurar domínio personalizado 