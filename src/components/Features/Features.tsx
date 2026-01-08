import './Features.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🤖',
    title: 'AI-Powered Optimization',
    description: 'Machine learning algorithms continuously optimize your ad campaigns for maximum performance and ROI.',
  },
  {
    icon: '💰',
    title: 'Cost Reduction',
    description: 'Automatically identify and eliminate wasteful spending while maximizing your advertising budget.',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Get comprehensive insights and performance metrics in real-time with intuitive dashboards.',
  },
  {
    icon: '🎯',
    title: 'Smart Targeting',
    description: 'AI identifies and targets the most valuable audiences for your products and services.',
  },
  {
    icon: '⚡',
    title: 'Automated Management',
    description: 'Set it and forget it. Our AI handles bid adjustments, budget allocation, and campaign optimization 24/7.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee to keep your campaigns running smoothly.',
  },
]

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-description">
            Everything you need to take your advertising to the next level
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

