import './Testimonials.css'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'Ryze has transformed our advertising strategy. We\'ve seen a 3x increase in ROI while reducing our ad spend by 40%. The AI optimization is truly remarkable.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    content: 'As a small business, we couldn\'t afford a full-time marketing team. Ryze gives us enterprise-level ad management at a fraction of the cost. Game changer!',
    avatar: '👨‍💼',
  },
  {
    name: 'Emily Rodriguez',
    role: 'E-commerce Manager',
    company: 'RetailPlus',
    content: 'The real-time analytics and automated optimizations have saved us countless hours. Our conversion rates have improved significantly since switching to Ryze.',
    avatar: '👩‍💻',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Trusted by businesses of all sizes to maximize their advertising ROI
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

