#!/usr/bin/env node

/**
 * Deployment script for Algorithm Solutions website
 * This script helps with deployment to GitHub Pages
 */

const fs = require('fs');
const path = require('path');

class DeployScript {
    constructor() {
        this.projectRoot = process.cwd();
        this.buildDir = path.join(this.projectRoot, '_site');
        this.assetsDir = path.join(this.projectRoot, 'assets');
    }

    async run() {
        console.log('🚀 Starting deployment process...');

        try {
            // Validate project structure
            this.validateProject();

            // Create build directory if it doesn't exist
            this.createBuildDirectory();

            // Copy assets to build directory
            await this.copyAssets();

            // Copy HTML files to build directory
            await this.copyHtmlFiles();

            // Generate sitemap
            await this.generateSitemap();

            console.log('✅ Deployment completed successfully!');
            console.log('📁 Build files are ready in:', this.buildDir);

        } catch (error) {
            console.error('❌ Deployment failed:', error.message);
            process.exit(1);
        }
    }

    validateProject() {
        console.log('🔍 Validating project structure...');

        const requiredFiles = [
            'index.html',
            'assets/css/main.css',
            'assets/js/main.js',
            'package.json'
        ];

        for (const file of requiredFiles) {
            const filePath = path.join(this.projectRoot, file);
            if (!fs.existsSync(filePath)) {
                throw new Error(`Required file not found: ${file}`);
            }
        }

        console.log('✅ Project structure validation passed');
    }

    createBuildDirectory() {
        console.log('📁 Creating build directory...');

        if (fs.existsSync(this.buildDir)) {
            this.removeDirectory(this.buildDir);
        }

        fs.mkdirSync(this.buildDir, { recursive: true });
        console.log('✅ Build directory created');
    }

    removeDirectory(dirPath) {
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath);
            files.forEach(file => {
                const filePath = path.join(dirPath, file);
                const stat = fs.statSync(filePath);

                if (stat.isDirectory()) {
                    this.removeDirectory(filePath);
                } else {
                    fs.unlinkSync(filePath);
                }
            });
            fs.rmdirSync(dirPath);
        }
    }

    async copyAssets() {
        console.log('📦 Copying assets...');

        const targetAssetsDir = path.join(this.buildDir, 'assets');
        this.copyDirectory(this.assetsDir, targetAssetsDir);

        console.log('✅ Assets copied successfully');
    }

    async copyHtmlFiles() {
        console.log('📄 Copying HTML files...');

        const filesToCopy = [
            'index.html',
            'problems',
            'templates'
        ];

        for (const item of filesToCopy) {
            const sourcePath = path.join(this.projectRoot, item);
            const targetPath = path.join(this.buildDir, item);

            if (fs.statSync(sourcePath).isDirectory()) {
                this.copyDirectory(sourcePath, targetPath);
            } else {
                fs.copyFileSync(sourcePath, targetPath);
            }
        }

        console.log('✅ HTML files copied successfully');
    }

    copyDirectory(source, target) {
        if (!fs.existsSync(target)) {
            fs.mkdirSync(target, { recursive: true });
        }

        const files = fs.readdirSync(source);
        files.forEach(file => {
            const sourcePath = path.join(source, file);
            const targetPath = path.join(target, file);
            const stat = fs.statSync(sourcePath);

            if (stat.isDirectory()) {
                this.copyDirectory(sourcePath, targetPath);
            } else {
                fs.copyFileSync(sourcePath, targetPath);
            }
        });
    }

    async generateSitemap() {
        console.log('🗺️  Generating sitemap...');

        const sitemapContent = this.createSitemapContent();
        const sitemapPath = path.join(this.buildDir, 'sitemap.xml');

        fs.writeFileSync(sitemapPath, sitemapContent);

        console.log('✅ Sitemap generated successfully');
    }

    createSitemapContent() {
        const baseUrl = 'https://chao5go.github.io/algo-journey';
        const currentDate = new Date().toISOString();

        const urls = [
            // Main pages
            `${baseUrl}/`,
            // Problem pages (you can make this dynamic)
            `${baseUrl}/problems/array/valid-sudoku.html`,
            `${baseUrl}/problems/math/min-operations-divisible-by-3.html`
        ];

        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        urls.forEach(url => {
            sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
        });

        sitemap += `
</urlset>`;

        return sitemap;
    }
}

// Run deployment if this script is executed directly
if (require.main === module) {
    const deploy = new DeployScript();
    deploy.run();
}

module.exports = DeployScript;