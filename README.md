# zFernand0.github.io

Fernando Rijo Cedeño's personal website and blog, hosted at [rijo.dev](https://rijo.dev).

## Project Structure

```
docs/
├── css/
│   └── common.css          # Shared styles and theme variables
├── js/
│   ├── common.js           # Shared functionality (theme, navigation)
│   ├── travel-planner.js   # Travel itinerary functionality
│   └── travel-data.js      # Travel data (activities, tips)
├── blogs/
│   ├── ai/                 # AI-related blog posts
│   ├── books/              # Book reviews and learning
│   ├── growth/             # Personal growth content
│   ├── homelab/            # Home lab and gadgets
│   ├── money/              # Financial content
│   └── travel/             # Travel experiences
│       ├── 001-japan-prep.html
│       ├── japan.html
│       └── korea.html
├── img/                    # Images and assets
├── fcstudio/               # FC Studio company section
├── family/                 # Family section
└── index.html              # Main homepage
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Interactive Travel Planner**: Dynamic itineraries for Japan and Korea
- **Blog System**: Organized content across multiple categories
- **Modern UI**: Clean, professional design with smooth animations

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build project
npm run build
```

## Technologies Used

- HTML5
- CSS3 with CSS Variables for theming
- Vanilla JavaScript (ES6+)
- Tailwind CSS for styling
- Chart.js for data visualization
- Google Fonts (Raleway, Inter)

## Deployment

This site is deployed via GitHub Pages at the custom domain `rijo.dev`.

## License

MIT License - see LICENSE file for details.
