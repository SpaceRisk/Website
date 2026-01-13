export const projects = [
  {
    id: 1,
    title: "PlantParent",
    subtitle: "Automated Plant Care System",
    shortDescription: "IoT-based system that automates home plant care through environmental monitoring and a React web interface.",
    fullDescription: "An IoT-based system that automates home plant care through environmental monitoring and automated control. The application enables remote management of plants via a web interface with real-time alerts and AI-powered recommendations. The system monitors soil moisture, light levels, and temperature using connected sensors, automatically adjusting watering, lighting, and climate control based on plant needs.",
    image: "https://placehold.co/400x240/1a1a2e/16213e?text=PlantParent&font=raleway",
    tags: ["React", "Node.js", "AWS", "ESP32", "IoT"],
    features: [
      "Real-time environmental monitoring (soil moisture, light, temperature)",
      "Automated watering and lighting control",
      "AI-powered plant care recommendations",
      "Web-based dashboard for remote management"
    ],
    techStack: {
      frontend: "React, JavaScript, CSS",
      backend: "Node.js, AWS Amplify, dynamoDB",
      hardware: "ESP32, moisture/light/temp sensors, water pump"
    },
    githubUrl: "https://github.com/SeaRisk/automated-plant-caregiver",
  },
  {
    id: 2,
    title: "Interactive News Globe",
    subtitle: "Global News Visualization",
    shortDescription: "Explore world news through an interactive 3D globe interface with real-time news aggregation.",
    fullDescription: "A web application enabling users to explore global news stories through an interactive 3D visual globe. The platform aggregates top news from NewsAPI and presents it geographically, allowing discovery from both geographical and geopolitical perspectives. The design promotes engagement with unfamiliar world regions and news sources.",
    image: "https://placehold.co/400x240/0f3460/16213e?text=News+Globe&font=raleway",
    tags: ["React", "CesiumJS", "Node.js", "NewsAPI"],
    features: [
      "Interactive 3D globe built with CesiumJS",
      "Real-time news aggregation from NewsAPI",
      "Browse news organized by country",
      "Multi-language news support"
    ],
    techStack: {
      frontend: "React, CesiumJS, Resium",
      backend: "Node.js",
      api: "NewsAPI"
    },
    githubUrl: "https://github.com/SeaRisk/interactive-news-globe",
  },
];
