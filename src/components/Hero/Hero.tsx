import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Let AI Manage Your Ads
              <span className="gradient-text"> Automatically</span>
            </h1>
            <p className="hero-description">
              Ryze is an AI-powered advertising management platform that optimizes
              your campaigns, reduces costs, and maximizes ROI—all without the manual work.
            </p>
            <div className="hero-cta">
              <a href="#demo" className="btn btn-primary btn-large" aria-label="Book a demo">
                Book a Demo
              </a>
              <a href="#features" className="btn btn-secondary btn-large" aria-label="Learn more about features">
                Learn More
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50%+</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat">
                <div className="stat-number">3x</div>
                <div className="stat-label">ROI Increase</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">AI Monitoring</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="metric">
                  <span className="metric-label">Campaign Performance</span>
                  <span className="metric-value">+127%</span>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '80%' }}></div>
                  <div className="chart-bar" style={{ height: '100%' }}></div>
                  <div className="chart-bar" style={{ height: '75%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

