/**
 * Travel Planner JavaScript functionality
 * Handles interactive travel itineraries and planning tools
 */

class TravelPlanner {
  constructor() {
    this.activities = [];
    this.currentFilters = {
      city: "all",
      theme: "all",
    };
    this.tips = [];
  }

  /**
   * Initialize the travel planner
   */
  init(activitiesData, tipsData) {
    this.activities = activitiesData || [];
    this.tips = tipsData || [];
    this.setupEventListeners();
    this.populateActivities();
    this.populateTips();
    this.createTripFocusChart();
    this.drawMapLines();
  }

  /**
   * Set up event listeners for filters and interactions
   */
  setupEventListeners() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const mapCities = document.querySelectorAll(".map-city");

    // Filter button event listeners
    filterButtons.forEach(button => {
      button.addEventListener("click", e => {
        const filterType = e.target.dataset.filterType;
        const filterValue = e.target.dataset.filterValue;

        // Update active button state
        filterButtons.forEach(btn => {
          if (btn.dataset.filterType === filterType) {
            btn.classList.remove("active");
          }
        });
        e.target.classList.add("active");

        // Update current filters
        this.currentFilters[filterType] = filterValue;
        this.populateActivities();
      });
    });

    // Map city click event listeners
    mapCities.forEach(city => {
      city.addEventListener("click", e => {
        const cityName = e.currentTarget.dataset.city;

        // Update city filter
        filterButtons.forEach(btn => {
          if (btn.dataset.filterType === "city") {
            btn.classList.remove("active");
            if (btn.dataset.filterValue === cityName) {
              btn.classList.add("active");
            }
          }
        });

        this.currentFilters.city = cityName;
        this.populateActivities();
      });
    });

    // Window resize handler for map lines
    window.addEventListener("resize", () => {
      document.querySelectorAll(".map-line").forEach(l => l.remove());
      this.drawMapLines();
    });
  }

  /**
   * Populate activities grid based on current filters
   */
  populateActivities() {
    const activitiesGrid = document.getElementById("activities-grid");
    if (!activitiesGrid) return;

    const filteredActivities = this.activities.filter(activity => {
      const cityMatch = this.currentFilters.city === "all" || activity.city === this.currentFilters.city;
      const themeMatch = this.currentFilters.theme === "all" || activity.theme === this.currentFilters.theme;
      return cityMatch && themeMatch;
    });

    activitiesGrid.innerHTML = filteredActivities
      .map(
        activity => `
            <div class="activity-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="flex items-start justify-between mb-2">
                    <span class="text-sm font-semibold text-gray-600">Day ${activity.day}</span>
                    <span class="text-xs bg-gray-200 px-2 py-1 rounded-full">${activity.city}</span>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-800">${activity.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">${activity.desc}</p>
            </div>
        `
      )
      .join("");
  }

  /**
   * Populate tips accordion
   */
  populateTips() {
    const accordionContainer = document.getElementById("accordion-container");
    if (!accordionContainer) return;

    accordionContainer.innerHTML = this.tips
      .map(
        (tip, index) => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="accordion-header bg-gray-50 px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
                    ${tip.title}
                </div>
                <div class="accordion-content px-6 py-4 text-gray-600 leading-relaxed">
                    ${tip.content}
                </div>
            </div>
        `
      )
      .join("");

    // Add accordion functionality
    const accordionHeaders = accordionContainer.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains("open");

        // Close all other accordion items
        accordionContainer.querySelectorAll(".accordion-content").forEach(item => {
          item.classList.remove("open");
        });

        // Toggle current item
        if (!isOpen) {
          content.classList.add("open");
        }
      });
    });
  }

  /**
   * Create trip focus chart using Chart.js
   */
  createTripFocusChart() {
    const chartCanvas = document.getElementById("tripFocusChart");
    if (!chartCanvas) return;

    const ctx = chartCanvas.getContext("2d");

    // Calculate activity distribution by theme
    const themeCounts = {};
    this.activities.forEach(activity => {
      themeCounts[activity.theme] = (themeCounts[activity.theme] || 0) + 1;
    });

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: Object.keys(themeCounts).map(
          theme => this.getThemeEmoji(theme) + " " + theme.charAt(0).toUpperCase() + theme.slice(1)
        ),
        datasets: [
          {
            data: Object.values(themeCounts),
            backgroundColor: [
              "#C84630", // persimmon
              "#3E606F", // muted teal
              "#8B4513", // saddle brown
              "#FF6B35", // orange
              "#4A90E2", // blue
              "#7B68EE", // slate blue
            ],
            borderWidth: 2,
            borderColor: "#FDFBF8",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 20,
              usePointStyle: true,
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ${context.parsed} activities (${percentage}%)`;
              },
            },
          },
        },
      },
    });
  }

  /**
   * Draw map lines connecting cities
   */
  drawMapLines() {
    const mapContainer = document.getElementById("map-container");
    if (!mapContainer) return;

    // Remove existing lines
    document.querySelectorAll(".map-line").forEach(line => line.remove());

    const cities = ["tokyo", "kyoto", "hiroshima", "osaka"];
    const positions = {};

    // Calculate positions
    cities.forEach(city => {
      const cityElement = document.getElementById(`map-${city}`);
      if (cityElement) {
        const rect = cityElement.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();
        positions[city] = rect.left - containerRect.left + rect.width / 2;
      }
    });

    // Draw lines
    for (let i = 0; i < cities.length - 1; i++) {
      const currentCity = cities[i];
      const nextCity = cities[i + 1];

      if (positions[currentCity] && positions[nextCity]) {
        const line = document.createElement("div");
        line.className = "map-line";
        line.style.left = `${positions[currentCity]}px`;
        line.style.top = "50%";
        line.style.width = `${positions[nextCity] - positions[currentCity]}px`;
        line.style.height = "2px";
        line.style.transform = "translateY(-50%)";
        mapContainer.appendChild(line);
      }
    }
  }

  /**
   * Get emoji for theme
   */
  getThemeEmoji(theme) {
    const emojis = {
      culture: "⛩️",
      modern: "🏙️",
      nature: "🗻",
      food: "🍜",
      fun: "🎢",
    };
    return emojis[theme] || "📍";
  }
}

// Export for use in HTML files
window.TravelPlanner = TravelPlanner;
