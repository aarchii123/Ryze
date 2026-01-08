import './Pricing.css'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to $5K ad spend/month',
      'AI campaign optimization',
      'Basic analytics dashboard',
      'Email support',
      '1 platform integration',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing businesses with higher ad spend',
    features: [
      'Up to $25K ad spend/month',
      'Advanced AI optimization',
      'Real-time analytics & reports',
      'Priority support',
      'Multi-platform integration',
      'Custom campaign strategies',
    ],
    popular: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited ad spend',
      'Dedicated AI optimization',
      'Custom analytics & insights',
      '24/7 dedicated support',
      'All platform integrations',
      'Custom integrations',
      'Account manager',
    ],
    cta: 'Contact Sales',
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-description">
            Choose the plan that fits your business needs
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  {plan.period && <span className="price-period">{plan.period}</span>}
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-block`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

