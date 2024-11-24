export const slidersData = [
  {
    id: "basic-slider",
    title: "Basic Slider",
    description:
      "A simple slider component with a single handle for selecting values.",
    preview: `
      <div class="slider-container">
        <input type="range" class="slider" min="0" max="100" value="50" />
      </div>`,
    code: `
      const BasicSlider = () => {
        const [value, setValue] = React.useState(50);
  
        const handleChange = (event) => {
          setValue(event.target.value);
        };
  
        return (
          <div className="slider-container">
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
            />
            <p>Selected Value: {value}</p>
          </div>
        );
      };
      `,
    category: "slider",
  },
  {
    id: "range-slider",
    title: "Range Slider",
    description: "A slider component that allows selection of a value range.",
    preview: `
      <div class="slider-container">
        <input type="range" class="slider" min="0" max="100" value="20" />
        <input type="range" class="slider" min="0" max="100" value="80" />
      </div>`,
    code: `
      const RangeSlider = () => {
        const [minValue, setMinValue] = React.useState(20);
        const [maxValue, setMaxValue] = React.useState(80);
  
        return (
          <div className="slider-container">
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
            />
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
            />
            <p>Selected Range: {minValue} - {maxValue}</p>
          </div>
        );
      };
      `,
    category: "slider",
  },
  {
    id: "step-slider",
    title: "Step Slider",
    description: "A slider component with predefined step intervals.",
    preview: `
      <div class="slider-container">
        <input type="range" class="slider" min="0" max="100" value="50" step="10" />
      </div>`,
    code: `
      const StepSlider = () => {
        const [value, setValue] = React.useState(50);
  
        return (
          <div className="slider-container">
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={value}
              step="10"
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Selected Value: {value}</p>
          </div>
        );
      };
      `,
    category: "slider",
  },
  {
    id: "animated-slider",
    title: "Animated Slider",
    description: "A slider with an animated progress bar.",
    preview: `
      <div class="slider-container">
        <div class="progress-bar" style="width: 50%;"></div>
        <input type="range" class="slider" min="0" max="100" value="50" />
      </div>`,
    code: `
      const AnimatedSlider = () => {
        const [value, setValue] = React.useState(50);
  
        return (
          <div className="slider-container">
            <div
              className="progress-bar"
              style={{ width: \`\${value}%\` }}
            ></div>
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Selected Value: {value}</p>
          </div>
        );
      };
      `,
    category: "slider",
  },
  {
    id: "styled-slider",
    title: "Styled Slider",
    description: "A slider component with custom styles for a unique look.",
    preview: `
      <div class="slider-container styled-slider">
        <input type="range" class="slider" min="0" max="100" value="50" />
      </div>`,
    code: `
      const StyledSlider = () => {
        const [value, setValue] = React.useState(50);
  
        return (
          <div className="slider-container styled-slider">
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <p>Selected Value: {value}</p>
          </div>
        );
      };
      `,
    category: "slider",
  },
];
