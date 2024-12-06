# World Map Chart

## Setup

```bash
#install dependencies
npm install d3 topojson --save-dev @types/geojson
```

## Obtain Map Data

Need a world map in GeoJSON or TopoJSON format. For example, download a TopoJSON world map from a reliable source (like Natural Earth) and include it in your src directory.

Assume world.json is placed in ./data/world.json.

## Create the React Component

### MapChart.tsx

- Load the map data.
- Use D3’s projection and path functions to draw countries.
- Handle mouse events for tooltips.

### Key Steps:

- Use useEffect to set up the projection and path.
- Convert TopoJSON to GeoJSON features.
- Map over features to create <path> elements.
- Add onMouseEnter, onMouseLeave, and onMouseMove events on <path> to manage tooltip state.
- Use a useState hook to store tooltip visibility, position, and content.
- Render a positioned <div> tooltip over the SVG using absolute positioning.
