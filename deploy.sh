#!/bin/bash

# 1. Build the Next.js app
npm run build

# 2. Move build files to gh-pages branch
git checkout --orphan gh-pages
rm -rf ./*
cp -r ./.next/static ./
cp -r ./public ./
touch .nojekyll # Prevents GitHub Pages from processing _next as Jekyll
git add .
git commit -m "Deploy static build to gh-pages"
git push origin gh-pages --force

# Return to original branch (optional)
git checkout -