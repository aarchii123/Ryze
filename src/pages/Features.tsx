import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Features from '../components/Features/Features'
import CTA from '../components/CTA/CTA'
import './FeaturesPage.css'

const FeaturesPage = () => {

  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Features</h1>
            <p className="page-subtitle">
              Discover how Ryze's AI-powered platform can transform your advertising strategy
            </p>
          </div>
        </section>
        <Features />
        <section className="features-detail section">
          <div className="container">
            <div className="detail-grid">
              <div className="detail-card">
                <div className="detail-icon">🎯</div>
                <h3>Advanced Targeting</h3>
                <p>
                  Our AI analyzes millions of data points to identify your most valuable customers
                  and automatically adjusts targeting parameters for optimal results.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">📈</div>
                <h3>Performance Tracking</h3>
                <p>
                  Real-time dashboards provide comprehensive insights into campaign performance,
                  conversion rates, and ROI metrics across all your advertising channels.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">🔄</div>
                <h3>Automated Optimization</h3>
                <p>
                  Machine learning algorithms continuously monitor and optimize your campaigns,
                  making adjustments 24/7 to ensure peak performance at all times.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">💡</div>
                <h3>Smart Recommendations</h3>
                <p>
                  Get actionable insights and recommendations based on your campaign data,
                  helping you make informed decisions and improve results.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">🔗</div>
                <h3>Multi-Platform Support</h3>
                <p>
                  Manage campaigns across Google Ads, Facebook, Instagram, LinkedIn, and more
                  from a single unified dashboard.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">🛡️</div>
                <h3>Enterprise Security</h3>
                <p>
                  Bank-level encryption and security protocols ensure your data and campaigns
                  are protected at all times.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default FeaturesPage

