# Code Formatting with Prettier

This repository uses Prettier to automatically format HTML, CSS, and JavaScript files for consistent code style.

## Configuration

The formatting rules are defined in `.prettierrc` and include:

- **printWidth**: 120 characters per line
- **tabWidth**: 2 spaces for indentation
- **useTabs**: false (use spaces, not tabs)
- **singleQuote**: false (use double quotes)
- **htmlWhitespaceSensitivity**: "css" (preserve CSS-sensitive whitespace)

## Available Scripts

### `npm run format`
Formats all HTML, CSS, and JavaScript files in the docs directory.

### `npm run format:check`
Checks if files are properly formatted without making changes.

### `npm run format:html`
Formats only HTML files.

### `npm run format:css`
Formats only CSS files.

### `npm run format:js`
Formats only JavaScript files.

## Installation

Install the required dependencies:

```bash
npm install
```

## Usage

### Format all files:
```bash
npm run format
```

### Check formatting without changes:
```bash
npm run format:check
```

### Format specific file types:
```bash
npm run format:html
npm run format:css
npm run format:js
```

## Files That Will Be Formatted

The formatter will process files in the `docs/` directory:
- `docs/**/*.html` - All HTML files
- `docs/**/*.css` - All CSS files  
- `docs/**/*.js` - All JavaScript files

## Excluded Files

Files excluded from formatting (see `.prettierignore`):
- `node_modules/`
- `package-lock.json`
- Image files (`.png`, `.jpg`, etc.)
- Documentation files (`README.md`, `LICENSE`)
- Minified files (`*.min.js`, `*.min.css`)

## Integration

You can integrate Prettier into your development workflow:

1. **Pre-commit hooks**: Run `npm run format` before committing
2. **Editor integration**: Configure your editor to format on save
3. **CI/CD**: Add `npm run format:check` to your deployment pipeline

## Editor Setup

### VS Code
Install the Prettier extension and add to your settings:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Other Editors
Most modern editors support Prettier. Check the [Prettier documentation](https://prettier.io/docs/en/editors.html) for your specific editor.

## Troubleshooting

If you encounter formatting issues:

1. Run `npm run format` to fix formatting
2. Check the `.prettierrc` configuration
3. Verify files aren't in `.prettierignore`
4. Check for syntax errors in your files

## Benefits

- **Consistent code style** across all files
- **Automatic formatting** saves time
- **Team collaboration** with unified formatting
- **Reduced code review** time spent on formatting
- **Modern tooling** that's widely adopted 