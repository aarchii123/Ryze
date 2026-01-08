import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CTA from '../components/CTA/CTA'
import './About.css'

const About = () => {

  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">About Ryze</h1>
            <p className="page-subtitle">
              Empowering businesses with AI-driven advertising solutions
            </p>
          </div>
        </section>

        <section className="about-content section">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>Our Mission</h2>
                <p>
                  At Ryze, we believe that every business deserves access to world-class
                  advertising management, regardless of size or budget. Our mission is to
                  democratize advanced advertising technology through AI, making it accessible
                  and affordable for businesses of all sizes.
                </p>
                <p>
                  We've built an intelligent platform that learns from your campaigns,
                  understands your goals, and continuously optimizes your advertising spend
                  to deliver maximum ROI. No manual work, no guesswork—just results.
                </p>
              </div>
              <div className="about-visual">
                <div className="visual-card">
                  <div className="visual-icon">🚀</div>
                  <h3>Innovation First</h3>
                  <p>Cutting-edge AI technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Results-Driven</h3>
                <p>
                  We measure success by the results we deliver for our clients,
                  not by the features we build.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Transparency</h3>
                <p>
                  Clear pricing, honest communication, and full visibility into
                  how our AI optimizes your campaigns.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💪</div>
                <h3>Reliability</h3>
                <p>
                  Enterprise-grade infrastructure ensures your campaigns run
                  smoothly 24/7 with 99.9% uptime.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Growth</h3>
                <p>
                  We're committed to continuous improvement, constantly enhancing
                  our AI to deliver better results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team section">
          <div className="container">
            <h2 className="section-title">Why Choose Ryze?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-number">01</div>
                <div className="benefit-content">
                  <h3>Proven Results</h3>
                  <p>
                    Our clients see an average of 3x ROI increase and 50% cost reduction
                    within the first three months.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">02</div>
                <div className="benefit-content">
                  <h3>Easy Setup</h3>
                  <p>
                    Get started in minutes with our simple integration process.
                    No technical expertise required.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">03</div>
                <div className="benefit-content">
                  <h3>Expert Support</h3>
                  <p>
                    Our team of advertising experts is here to help you succeed,
                    with dedicated support for all plans.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">04</div>
                <div className="benefit-content">
                  <h3>Scalable Solution</h3>
                  <p>
                    Whether you're spending $1K or $1M per month, Ryze scales
                    with your business needs.
                  </p>
                </div>
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

export default About

