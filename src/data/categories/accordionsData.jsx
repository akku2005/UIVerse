export const accordionsData = [
  {
    id: "basic-accordion",
    title: "Basic Accordion",
    description: "A simple accordion component with toggle functionality.",
    preview: `
      <div>
        <div class="accordion-item">
          <button class="accordion-header">Accordion Item 1</button>
          <div class="accordion-content">
            <p>This is the content of Accordion Item 1.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">Accordion Item 2</button>
          <div class="accordion-content">
            <p>This is the content of Accordion Item 2.</p>
          </div>
        </div>
      </div>`,
    code: `
      const BasicAccordion = () => {
        const [openIndex, setOpenIndex] = React.useState(null);
  
        const toggleAccordion = (index) => {
          setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        };
  
        return (
          <div>
            {[0, 1].map((index) => (
              <div className="accordion-item" key={\`basic-\${index}\`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  Accordion Item {index + 1}
                </button>
                {openIndex === index && (
                  <div className="accordion-content">
                    <p>This is the content of Accordion Item {index + 1}.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      };
      `,
    category: "accordion",
  },
  {
    id: "animated-accordion",
    title: "Animated Accordion",
    description: "Accordion with smooth animations for opening and closing.",
    preview: `
      <div>
        <div class="accordion-item">
          <button class="accordion-header">Accordion Item 1</button>
          <div class="accordion-content open">
            <p>This is the content of Accordion Item 1.</p>
          </div>
        </div>
      </div>`,
    code: `
      const AnimatedAccordion = () => {
        const [openIndex, setOpenIndex] = React.useState(null);
  
        const toggleAccordion = (index) => {
          setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        };
  
        return (
          <div>
            {[0, 1].map((index) => (
              <div className="accordion-item" key={\`animated-\${index}\`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  Accordion Item {index + 1}
                </button>
                <div
                  className={\`accordion-content \${openIndex === index ? "open" : ""}\`}
                >
                  {openIndex === index && (
                    <p>This is the content of Accordion Item {index + 1}.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      };
      `,
    category: "accordion",
  },
];
