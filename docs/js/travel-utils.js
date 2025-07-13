/**
 * Travel-specific JavaScript utilities for zFernand0.github.io
 * Contains shared functionality for travel itinerary pages
 */

class TravelUtils {
    constructor() {
        this.currentFilters = {
            city: 'all',
            theme: 'all'
        };
        this.currentDay = 1;
    }

    /**
     * Initialize day navigation functionality
     */
    initDayNavigation() {
        const dayButtons = document.querySelectorAll('.nav-button');
        const dayContents = document.querySelectorAll('.day-content');

        dayButtons.forEach(button => {
            button.addEventListener('click', () => {
                const day = button.dataset.day;
                this.switchToDay(day);
            });
        });
    }

    /**
     * Switch to a specific day view
     */
    switchToDay(day) {
        // Update navigation buttons
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-day="${day}"]`).classList.add('active');

        // Update content visibility
        document.querySelectorAll('.day-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`[data-day="${day}"]`).classList.add('active');

        this.currentDay = parseInt(day);
    }

    /**
     * Initialize tips toggle functionality
     */
    initTipsToggle() {
        const toggleBtn = document.getElementById('toggle-tips-btn');
        const tipsContent = document.getElementById('tips-content');

        if (toggleBtn && tipsContent) {
            toggleBtn.addEventListener('click', () => {
                tipsContent.classList.toggle('open');
                toggleBtn.textContent = tipsContent.classList.contains('open') 
                    ? 'Hide Essential Travel Tips' 
                    : 'Show Essential Travel Tips';
            });
        }
    }

    /**
     * Initialize accordion functionality
     */
    initAccordion() {
        document.querySelectorAll('.accordion-header').forEach((header, index) => {
            header.addEventListener('click', () => {
                const content = document.getElementById(`accordion-content-${index}`);
                const icon = header.querySelector('span');
                
                if (content) {
                    content.classList.toggle('open');
                    if (icon) {
                        icon.style.transform = content.classList.contains('open') 
                            ? 'rotate(180deg)' 
                            : 'rotate(0deg)';
                    }
                }
            });
        });
    }

    /**
     * Initialize filter functionality
     */
    initFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const type = button.dataset.filterType;
                const value = button.dataset.filterValue;

                this.currentFilters[type] = value;

                // Update active state
                document.querySelectorAll(`.filter-btn[data-filter-type="${type}"]`)
                    .forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                this.updateFilteredView();
            });
        });
    }

    /**
     * Update the view based on current filters
     */
    updateFilteredView() {
        const cards = document.querySelectorAll('.activity-card');
        
        cards.forEach(card => {
            const showCity = this.currentFilters.city === 'all' || 
                           card.dataset.city === this.currentFilters.city;
            const showTheme = this.currentFilters.theme === 'all' || 
                            card.dataset.theme === this.currentFilters.theme;

            if (showCity && showTheme) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    /**
     * Initialize map city click functionality
     */
    initMapCities() {
        const mapCities = document.querySelectorAll('.map-city');
        
        mapCities.forEach(city => {
            city.addEventListener('click', () => {
                const cityValue = city.dataset.city;
                const filterBtn = document.querySelector(
                    `.filter-btn[data-filter-type="city"][data-filter-value="${cityValue}"]`
                );
                if (filterBtn) {
                    filterBtn.click();
                }
            });
        });
    }

    /**
     * Create activity cards from data
     */
    populateActivities(activities, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        activities.forEach(activity => {
            const card = document.createElement('div');
            card.className = 'activity-card bg-gray-50 rounded-lg shadow-md p-4 flex flex-col';
            card.dataset.city = activity.city;
            card.dataset.theme = activity.theme;
            
            let icon = '';
            switch (activity.theme) {
                case 'culture': icon = '⛩️'; break;
                case 'modern': icon = '🏙️'; break;
                case 'nature': icon = '🗻'; break;
                case 'food': icon = '🍜'; break;
                case 'fun': icon = '🎢'; break;
                case 'travel': icon = '🚄'; break;
                case 'shopping': icon = '🛍️'; break;
                case 'entertainment': icon = '🎭'; break;
                case 'view': icon = '🌃'; break;
                case 'arrival': icon = '🛬'; break;
                case 'art': icon = '🎨'; break;
                case 'seafood': icon = '🐟'; break;
                case 'return': icon = '🌆'; break;
                default: icon = '📍';
            }

            const cityColor = activity.city === 'tokyo' || activity.city === 'osaka' 
                ? 'bg-[#C84630]' 
                : 'bg-[#3E606F]';

            card.innerHTML = `
                <div class="flex-grow">
                    <h4 class="font-bold text-lg text-gray-800">${icon} ${activity.title}</h4>
                    <p class="text-gray-600 mt-2 text-sm">${activity.desc}</p>
                </div>
                <div class="mt-4 pt-2 border-t border-gray-200">
                   <span class="text-xs font-semibold text-white px-2 py-1 rounded-full ${cityColor}">${activity.city.charAt(0).toUpperCase() + activity.city.slice(1)}</span>
                   <span class="text-xs font-semibold text-gray-500 float-right mt-1">Day ${activity.day}</span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    /**
     * Create tips accordion from data
     */
    populateTips(tips, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        tips.forEach((tip, index) => {
            const item = document.createElement('div');
            item.className = 'bg-white rounded-lg shadow-md overflow-hidden';
            item.innerHTML = `
                <div id="accordion-header-${index}" class="accordion-header p-4 flex justify-between items-center">
                    <h4 class="font-bold text-lg text-gray-700">${tip.title}</h4>
                    <span class="transform transition-transform duration-300">▼</span>
                </div>
                <div id="accordion-content-${index}" class="accordion-content">
                    <div class="p-4 border-t border-gray-200 text-gray-600">
                        <p>${tip.content}</p>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

        // Initialize accordion functionality for newly created items
        this.initAccordion();
    }

    /**
     * Create activity breakdown chart
     */
    createActivityChart(activities, chartId, options = {}) {
        const ctx = document.getElementById(chartId);
        if (!ctx) return;

        const themes = ['culture', 'modern', 'nature', 'food', 'fun', 'travel', 'shopping', 'entertainment', 'view', 'art', 'seafood'];
        const themeLabels = {
            culture: '⛩️ Culture',
            modern: '🏙️ Modern', 
            nature: '🗻 Nature',
            food: '🍜 Food',
            fun: '🎢 Fun',
            travel: '🚄 Travel',
            shopping: '🛍️ Shopping',
            entertainment: '🎭 Entertainment',
            view: '🌃 View',
            art: '🎨 Art',
            seafood: '🐟 Seafood'
        };

        const data = themes.map(theme => 
            activities.filter(a => a.theme === theme).length
        ).filter(count => count > 0);

        const labels = themes.filter(theme => 
            activities.filter(a => a.theme === theme).length > 0
        ).map(theme => themeLabels[theme] || theme);

        const defaultColors = [
            '#C84630', '#3E606F', '#6A8A82', '#E8A798', '#F3D4C4',
            '#A89F91', '#8E8373', '#D6C7AE', '#EAE3D8', '#C3B8A8'
        ];

        new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Activity Focus',
                    data: data,
                    backgroundColor: options.colors || defaultColors.slice(0, data.length),
                    borderColor: options.borderColor || '#FDFBF8',
                    borderWidth: options.borderWidth || 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                size: 12,
                                family: 'Inter'
                            },
                            boxWidth: 20,
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    /**
     * Draw map lines between cities
     */
    drawMapLines() {
        const mapContainer = document.getElementById('map-container');
        if (!mapContainer) return;

        // Remove existing lines
        document.querySelectorAll('.map-line').forEach(line => line.remove());

        const cities = ['tokyo', 'kyoto', 'hiroshima', 'osaka'];
        const cityElements = cities.map(city => document.getElementById(`map-${city}`)).filter(el => el);

        if (cityElements.length < 2) return;

        const positions = {};
        cityElements.forEach((element, index) => {
            const cityName = cities[index];
            positions[cityName] = {
                x: element.offsetLeft + element.offsetWidth / 2,
                y: element.offsetTop + element.offsetHeight / 2
            };
        });

        // Draw lines between consecutive cities
        for (let i = 0; i < cityElements.length - 1; i++) {
            const currentCity = cities[i];
            const nextCity = cities[i + 1];
            
            if (positions[currentCity] && positions[nextCity]) {
                const line = document.createElement('div');
                line.className = 'map-line';
                line.style.left = `${positions[currentCity].x}px`;
                line.style.top = `${positions[currentCity].y - 1}px`;
                line.style.width = `${positions[nextCity].x - positions[currentCity].x}px`;
                line.style.height = '2px';
                mapContainer.prepend(line);
            }
        }
    }

    /**
     * Initialize all travel functionality
     */
    init() {
        this.initDayNavigation();
        this.initTipsToggle();
        this.initFilters();
        this.initMapCities();
        
        // Draw map lines after a short delay to ensure correct positioning
        setTimeout(() => this.drawMapLines(), 100);
        
        // Redraw lines on window resize
        window.addEventListener('resize', () => {
            this.drawMapLines();
        });
    }
}

// Export for use in other scripts
window.TravelUtils = TravelUtils; 