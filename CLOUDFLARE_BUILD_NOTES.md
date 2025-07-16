# Cloudflare Pages Build Configuration

## Node.js Version
This project requires Node.js 18.17.0 or higher.

## Environment Variables
No environment variables required for build.

## Build Command
```
npm install && npm run build
```

## Build Output Directory
```
dist
```

## Node Version File
Set in .nvmrc: 18.17.0

## Troubleshooting
If build fails with Rollup errors:
1. Clear node_modules and package-lock.json
2. Run `npm install` 
3. Run `npm run build`

## Dependencies
All dependencies are production-ready and compatible with Cloudflare Pages environment.
