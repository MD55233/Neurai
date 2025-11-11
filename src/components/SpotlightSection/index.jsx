import { CardSpotlight } from '../ui/card-spotlight';
import './SpotlightSection.css';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="check-icon"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
      fill="currentColor"
      strokeWidth="0"
    />
  </svg>
);

const Step = ({ title }) => (
  <li className="flex gap-2 items-start">
    <CheckIcon />
    <p>{title}</p>
  </li>
);

export default function SpotlightSection() {
  const cards = [
    {
      title: "Advanced Security",
      description: "Protect your data with enterprise-grade security features and advanced authentication methods.",
      steps: [
        "Multi-factor authentication",
        "End-to-end encryption",
        "Secure data storage",
        "Regular security audits"
      ],
      footer: "Your security is our top priority with industry-leading protection standards."
    },
    {
      title: "Smart Analytics",
      description: "Get powerful insights from your data with AI-driven analytics and intelligent reporting.",
      steps: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboard creation",
        "Automated report generation"
      ],
      footer: "Transform your data into actionable insights for better decision making."
    },
    {
      title: "Seamless Integration",
      description: "Connect effortlessly with your existing tools and workflows for maximum productivity.",
      steps: [
        "API-first architecture",
        "Popular tool integrations",
        "Custom workflow builder",
        "One-click deployment"
      ],
      footer: "Integrate seamlessly with over 100+ popular business tools and platforms."
    }
  ];

  return (
    <section className="spotlight-section">
      <div className="spotlight-container">
        <div className="spotlight-header">
          <h2>Powerful Features for Modern Teams</h2>
          <p>Discover how our platform can transform your workflow with these key capabilities</p>
        </div>
        
        <div className="spotlight-grid">
          {cards.map((card, index) => (
            <CardSpotlight key={index} className="spotlight-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
                {card.steps.map((step, stepIndex) => (
                  <Step key={stepIndex} title={step} />
                ))}
              </ul>
              <p className="description">{card.footer}</p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}