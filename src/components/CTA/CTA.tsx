import './CTA.css'

const CTA = () => {
  return (
    <section id="demo" className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Advertising?</h2>
          <p className="cta-description">
            Join thousands of businesses using Ryze to maximize their ROI and minimize their workload.
            Book a demo today and see the difference AI can make.
          </p>
          <div className="cta-buttons">
            <a href="#demo" className="btn btn-primary btn-large">
              Book a Demo
            </a>
            <a href="#pricing" className="btn btn-secondary btn-large">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

