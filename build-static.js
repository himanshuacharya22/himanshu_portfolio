#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

console.log('Building static site for GitHub Pages...');

// Set environment variables for static build
process.env.NODE_ENV = 'production';

try {
  // Run the Vite build command
  console.log('Running Vite build...');
  execSync('npx vite build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });

  // Copy the root index.html to the build directory
  console.log('Copying root index.html to build directory...');
  const rootIndexPath = path.resolve('index.html');
  const buildIndexPath = path.resolve('dist/public/index.html');
  
  try {
    const rootIndexContent = readFileSync(rootIndexPath, 'utf8');
    writeFileSync(buildIndexPath, rootIndexContent);
    console.log('Root index.html copied successfully');
  } catch (error) {
    console.warn('Could not copy root index.html, using generated one');
  }

  // Create a 404.html file for GitHub Pages SPA routing
  console.log('Creating 404.html for SPA routing...');
  const notFoundPath = path.resolve('dist/public/404.html');
  const indexContent = readFileSync(buildIndexPath, 'utf8');
  writeFileSync(notFoundPath, indexContent);

  console.log('Static build completed successfully!');
  console.log('Files are ready in ./dist/public/');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}