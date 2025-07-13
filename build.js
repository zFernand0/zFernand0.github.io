/**
 * Build script for zFernand0.github.io
 * Automates the restructuring process by updating HTML files
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    sourceDir: './docs',
    jsDir: './docs/js',
    cssDir: './docs/css',
    filesToUpdate: [
        'index.html',
        'blogs/index.html',
        'blogs/ai/index.html',
        'blogs/books/index.html',
        'blogs/growth/index.html',
        'blogs/homelab/index.html',
        'blogs/money/index.html',
        'blogs/travel/index.html',
        'family/index.html'
    ]
};

/**
 * Update HTML file to use shared resources
 */
function updateHTMLFile(filePath) {
    const fullPath = path.join(config.sourceDir, filePath);
    
    if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${fullPath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let updated = false;

    // Check if CSS link already exists to prevent duplication
    const hasCssLink = content.includes('href="../css/common.css"') || content.includes('href="../../css/common.css"');
    
    // Remove inline styles and replace with CSS link
    if (content.includes('<style>') && !hasCssLink) {
        const styleStart = content.indexOf('<style>');
        const styleEnd = content.indexOf('</style>') + 8;
        const styleContent = content.substring(styleStart, styleEnd);
        
        // Only replace if it contains common styles
        if (styleContent.includes('--background-color') || 
            styleContent.includes('font-family') ||
            styleContent.includes('transition')) {
            
            // Add CSS link before closing head tag
            const headEnd = content.lastIndexOf('</head>');
            const cssLink = '    <link rel="stylesheet" href="../css/common.css">\n';
            content = content.substring(0, headEnd) + cssLink + content.substring(headEnd);
            
            // Remove the style block
            content = content.substring(0, styleStart) + content.substring(styleEnd);
            updated = true;
        }
    }

    // Check if JS link already exists to prevent duplication
    const hasJsLink = content.includes('src="../js/common.js"') || content.includes('src="../../js/common.js"');
    
    // Remove inline scripts and replace with JS links
    if (content.includes('<script>') && !hasJsLink) {
        // Find all script blocks
        let scriptStart = content.indexOf('<script>');
        while (scriptStart !== -1) {
            const scriptEnd = content.indexOf('</script>', scriptStart);
            if (scriptEnd === -1) {
                // Malformed script block, skip this one
                break;
            }
            const scriptEndTag = scriptEnd + 9;
            const scriptContent = content.substring(scriptStart, scriptEndTag);
            
            // Only replace if it contains common functions
            if (scriptContent.includes('toggleMenu') || 
                scriptContent.includes('toggleTheme') ||
                scriptContent.includes('hideMenu') ||
                scriptContent.includes('navbar.classList') ||
                scriptContent.includes('htmlElement.classList')) {
                
                // Add JS links before closing body tag
                const bodyEnd = content.lastIndexOf('</body>');
                const jsLinks = '    <script src="../js/common.js"></script>\n';
                content = content.substring(0, bodyEnd) + jsLinks + content.substring(bodyEnd);
                
                // Remove the script block
                content = content.substring(0, scriptStart) + content.substring(scriptEndTag);
                updated = true;
                
                // Update scriptStart for next iteration
                scriptStart = content.indexOf('<script>', scriptStart);
            } else {
                // Move to next script block
                scriptStart = content.indexOf('<script>', scriptEndTag);
            }
        }
    }

    // Update onclick handlers to use global functions
    content = content.replace(/onclick="toggleMenu\(\)"/g, 'onclick="CommonUtils.toggleMenu()"');
    content = content.replace(/onclick="hideMenu\(\)"/g, 'onclick="CommonUtils.hideMenu()"');
    content = content.replace(/onclick="toggleTheme\(\)"/g, 'onclick="CommonUtils.toggleTheme()"');

    // Remove any duplicate head sections
    const headMatches = content.match(/<head[^>]*>[\s\S]*?<\/head>/g);
    if (headMatches && headMatches.length > 1) {
        // Keep only the first head section
        const firstHeadEnd = content.indexOf('</head>') + 7;
        const secondHeadStart = content.indexOf('<head>', firstHeadEnd);
        if (secondHeadStart !== -1) {
            const secondHeadEnd = content.indexOf('</head>', secondHeadStart) + 7;
            content = content.substring(0, secondHeadStart) + content.substring(secondHeadEnd);
            updated = true;
        }
    }

    // Remove any duplicate body sections
    const bodyMatches = content.match(/<body[^>]*>[\s\S]*?<\/body>/g);
    if (bodyMatches && bodyMatches.length > 1) {
        // Keep only the first body section
        const firstBodyEnd = content.indexOf('</body>') + 7;
        const secondBodyStart = content.indexOf('<body', firstBodyEnd);
        if (secondBodyStart !== -1) {
            const secondBodyEnd = content.lastIndexOf('</body>') + 7;
            content = content.substring(0, secondBodyStart) + content.substring(secondBodyEnd);
            updated = true;
        }
    }

    // Remove duplicate CSS links
    const cssLinkRegex = /<link[^>]*href="[^"]*common\.css"[^>]*>/g;
    const cssLinks = content.match(cssLinkRegex);
    if (cssLinks && cssLinks.length > 1) {
        // Keep only the first CSS link
        const firstCssLink = cssLinks[0];
        content = content.replace(cssLinkRegex, '');
        // Re-add the first CSS link before closing head
        const headEnd = content.lastIndexOf('</head>');
        content = content.substring(0, headEnd) + '    ' + firstCssLink + '\n' + content.substring(headEnd);
        updated = true;
    }

    // Remove duplicate JS links
    const jsLinkRegex = /<script[^>]*src="[^"]*common\.js"[^>]*><\/script>/g;
    const jsLinks = content.match(jsLinkRegex);
    if (jsLinks && jsLinks.length > 1) {
        // Keep only the first JS link
        const firstJsLink = jsLinks[0];
        content = content.replace(jsLinkRegex, '');
        // Re-add the first JS link before closing body
        const bodyEnd = content.lastIndexOf('</body>');
        content = content.substring(0, bodyEnd) + '    ' + firstJsLink + '\n' + content.substring(bodyEnd);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    } else {
        console.log(`No changes needed: ${filePath}`);
    }
}

/**
 * Update travel-specific files
 */
function updateTravelFiles() {
    const travelFiles = [
        'blogs/travel/001-japan-prep.html',
        'blogs/travel/japan.html',
        'blogs/travel/korea.html'
    ];

    travelFiles.forEach(filePath => {
        const fullPath = path.join(config.sourceDir, filePath);
        
        if (!fs.existsSync(fullPath)) {
            console.log(`File not found: ${fullPath}`);
            return;
        }

        let content = fs.readFileSync(fullPath, 'utf8');
        let updated = false;

        // Add travel-specific JS files
        const bodyEnd = content.lastIndexOf('</body>');
        const jsLinks = '    <script src="../../js/travel-data.js"></script>\n    <script src="../../js/travel-planner.js"></script>\n';
        content = content.substring(0, bodyEnd) + jsLinks + content.substring(bodyEnd);

        // Initialize travel planner if it's a travel page
        if (filePath.includes('japan')) {
            const initScript = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const planner = new TravelPlanner();
            planner.init(TravelData.japan.activities, TravelData.japan.tips);
        });
    </script>`;
            content = content.substring(0, bodyEnd) + initScript + content.substring(bodyEnd);
        } else if (filePath.includes('korea')) {
            const initScript = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const planner = new TravelPlanner();
            planner.init(TravelData.korea.activities, TravelData.korea.tips);
        });
    </script>`;
            content = content.substring(0, bodyEnd) + initScript + content.substring(bodyEnd);
        }

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated travel file: ${filePath}`);
    });
}

/**
 * Create a backup of the original file
 */
function backupFile(filePath) {
    const fullPath = path.join(config.sourceDir, filePath);
    const backupPath = fullPath + '.backup';
    
    if (fs.existsSync(fullPath)) {
        fs.copyFileSync(fullPath, backupPath);
        console.log(`Backup created: ${backupPath}`);
    }
}

/**
 * Restore file from backup
 */
function restoreFile(filePath) {
    const fullPath = path.join(config.sourceDir, filePath);
    const backupPath = fullPath + '.backup';
    
    if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, fullPath);
        console.log(`Restored: ${filePath}`);
    } else {
        console.log(`No backup found for: ${filePath}`);
    }
}

/**
 * Main build function
 */
function build() {
    console.log('Starting build process...\n');

    // Create backups first
    console.log('Creating backups...');
    config.filesToUpdate.forEach(file => {
        backupFile(file);
    });

    // Update HTML files
    console.log('\nUpdating HTML files...');
    config.filesToUpdate.forEach(file => {
        updateHTMLFile(file);
    });

    // Update travel files
    console.log('\nUpdating travel files...');
    // updateTravelFiles();
}

/**
 * Restore all files from backup
 */
function restore() {
    console.log('Restoring files from backup...\n');
    config.filesToUpdate.forEach(file => {
        restoreFile(file);
    });
}

// Run build if this script is executed directly
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--restore')) {
        restore();
    } else {
        build();
    }
}

module.exports = { build, updateHTMLFile, updateTravelFiles, backupFile, restoreFile, restore }; 