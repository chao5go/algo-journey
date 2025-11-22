#!/usr/bin/env node

/**
 * Start script for Algorithm Solutions website
 * Provides a simple way to start the development server
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const PROJECT_ROOT = path.resolve(__dirname, '..');

// MIME types mapping
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(PROJECT_ROOT, req.url === '/' ? 'index.html' : req.url);

  // Get file extension
  const extname = path.extname(filePath);
  let contentType = mimeTypes[extname] || 'application/octet-stream';

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, try to add .html extension
      if (!extname) {
        filePath += '.html';
        fs.access(filePath, fs.constants.F_OK, (err) => {
          if (err) {
            send404(res);
            return;
          }
          contentType = 'text/html';
          sendFile(filePath, contentType, res);
        });
        return;
      }
      send404(res);
      return;
    }

    sendFile(filePath, contentType, res);
  });
});

function sendFile(filePath, contentType, res) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(content, 'utf-8');
  });
}

function send404(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>404 - Page Not Found</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
          }
          h1 { color: #e74c3c; }
          a { color: #3498db; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p><a href="/">Go back to homepage</a></p>
      </body>
    </html>
  `);
}

server.listen(PORT, () => {
  console.log('🚀 Algorithm Solutions website is running!');
  console.log(`📍 Local URL: http://localhost:${PORT}`);
  console.log('📝 Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down the server...');
  server.close(() => {
    console.log('✅ Server stopped successfully');
    process.exit(0);
  });
});