import React, { useState, useEffect } from 'react';

export default function CoffeeStopWebsite() {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('espresso');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const menu = {
    espresso: [
      { name: 'Espresso', desc: 'Single shot', price: 25 },
      { name: 'Double Espresso', desc: 'Bold & intense', price: 35 },
      { name: 'Americano', desc: 'Espresso with hot water', price: 30 },
      { name: 'Cappuccino', desc: 'Espresso, steamed milk, foam', price: 35 },
      { name: 'Flat White', desc: 'Velvety microfoam', price: 38 },
      { name: 'Latte', desc: 'Smooth & creamy', price: 40 },
    ],
    specialty: [
      { name: 'Mocha', desc: 'Chocolate espresso bliss', price: 45 },
      { name: 'Iced Latte', desc: 'Chilled perfection', price: 45 },
      { name: 'Iced Americano', desc: 'Cool & refreshing', price: 35 },
      { name: 'Cold Brew', desc: '12-hour steeped', price: 40 },
    ],
    snacks: [
      { name: 'Croissant', desc: 'Buttery & flaky', price: 25 },
      { name: 'Muffin', desc: 'Freshly baked', price: 30 },
      { name: 'Cookie', desc: 'Homestyle chocolate chip', price: 20 },
    ],
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d0906',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      color: '#f5ebe0',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Bebas+Neue&family=DM+Sans:wght@400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes steam {
          0%, 100% { transform: translateY(0) scaleX(1); opacity: 0.4; }
          50% { transform: translateY(-8px) scaleX(1.1); opacity: 0.1; }
        }
        
        .fade-up { animation: fadeUp 1s ease forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        .delay-5 { animation-delay: 1s; }
        
        .menu-item {
          transition: all 0.3s ease;
          cursor: default;
        }
        .menu-item:hover {
          transform: translateX(8px);
          background: rgba(196, 165, 116, 0.08);
        }
        
        .category-btn {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .category-btn:hover {
          color: #c4a574 !important;
        }
        
        .qr-glow {
          box-shadow: 0 0 60px rgba(196, 165, 116, 0.2);
        }
        
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 1000,
      }}/>

      {/* Navigation */}
      <nav className={`fade-up ${loaded ? '' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'linear-gradient(to bottom, rgba(13,9,6,0.95) 0%, transparent 100%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="32" height="32" viewBox="0 0 100 100">
            <path d="M40 25 Q45 15 40 5" fill="none" stroke="#c4a574" strokeWidth="3" strokeLinecap="round"/>
            <path d="M55 25 Q60 15 55 5" fill="none" stroke="#c4a574" strokeWidth="3" strokeLinecap="round"/>
            <rect x="25" y="35" width="50" height="45" rx="5" fill="none" stroke="#c4a574" strokeWidth="3"/>
            <path d="M75 45 Q88 45 88 60 Q88 75 75 75" fill="none" stroke="#c4a574" strokeWidth="3"/>
            <circle cx="50" cy="57" r="12" fill="none" stroke="#c4a574" strokeWidth="2"/>
            <line x1="50" y1="57" x2="50" y2="50" stroke="#c4a574" strokeWidth="2" strokeLinecap="round"/>
            <line x1="50" y1="57" x2="56" y2="57" stroke="#c4a574" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: 2, color: '#c4a574' }}>
            COFFEE STOP
          </span>
        </div>
        <div style={{ display: 'flex', gap: 32, fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', letterSpacing: 1 }}>
          <a href="#menu" style={{ color: '#f5ebe0', textDecoration: 'none', opacity: 0.8 }}>MENU</a>
          <a href="#order" style={{ color: '#f5ebe0', textDecoration: 'none', opacity: 0.8 }}>ORDER</a>
          <a href="#find" style={{ color: '#f5ebe0', textDecoration: 'none', opacity: 0.8 }}>FIND US</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '0 48px',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 300,
          height: 300,
          border: '1px solid rgba(196,165,116,0.15)',
          borderRadius: '50%',
        }}/>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 250,
          height: 250,
          border: '1px solid rgba(196,165,116,0.1)',
          borderRadius: '50%',
        }}/>
        
        {/* Coffee bean decorations */}
        <svg style={{ position: 'absolute', top: '20%', left: '5%', opacity: 0.08 }} width="80" height="80" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="#c4a574" strokeWidth="2" transform="rotate(-30 50 50)"/>
          <path d="M30 50 Q50 35 70 50" fill="none" stroke="#c4a574" strokeWidth="1.5" transform="rotate(-30 50 50)"/>
        </svg>
        <svg style={{ position: 'absolute', bottom: '15%', right: '15%', opacity: 0.06 }} width="120" height="120" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="#c4a574" strokeWidth="2" transform="rotate(45 50 50)"/>
          <path d="M30 50 Q50 35 70 50" fill="none" stroke="#c4a574" strokeWidth="1.5" transform="rotate(45 50 50)"/>
        </svg>

        <div style={{ maxWidth: 700, position: 'relative', zIndex: 1 }}>
          <p className={`fade-up ${loaded ? '' : ''}`} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: 4,
            color: '#c4a574',
            marginBottom: 24,
          }}>
            MELVILLE, JOHANNESBURG
          </p>
          
          <h1 className="fade-up delay-1" style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 300,
            lineHeight: 0.95,
            marginBottom: 32,
            fontStyle: 'italic',
          }}>
            Coffee<br/>
            <span style={{ color: '#c4a574', fontStyle: 'normal', fontWeight: 500 }}>on the Go</span>
          </h1>
          
          <p className="fade-up delay-2" style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            opacity: 0.7,
            maxWidth: 480,
            marginBottom: 48,
            fontWeight: 300,
          }}>
            Scan. Order. Collect. Experience the future of coffee ordering 
            through WhatsApp — your perfect brew is just a conversation away.
          </p>

          <div className="fade-up delay-3" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="#order" style={{
              padding: '16px 40px',
              background: '#c4a574',
              color: '#0d0906',
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              letterSpacing: 2,
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}>
              ORDER NOW
            </a>
            <a href="#menu" style={{
              color: '#f5ebe0',
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              letterSpacing: 1,
              opacity: 0.7,
              borderBottom: '1px solid rgba(245,235,224,0.3)',
              paddingBottom: 2,
            }}>
              View Menu
            </a>
          </div>
        </div>

        {/* Hero image area */}
        <div className="fade-up delay-4" style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 400,
          height: 500,
          background: 'linear-gradient(145deg, #1a1210 0%, #2d1f18 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Stylized coffee cup illustration */}
          <svg width="200" height="280" viewBox="0 0 200 280">
            {/* Steam */}
            <g style={{ animation: 'steam 3s ease-in-out infinite' }}>
              <path d="M70 60 Q80 40 70 20" fill="none" stroke="rgba(196,165,116,0.4)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M100 50 Q110 25 100 5" fill="none" stroke="rgba(196,165,116,0.3)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M130 60 Q140 40 130 20" fill="none" stroke="rgba(196,165,116,0.4)" strokeWidth="2" strokeLinecap="round"/>
            </g>
            {/* Cup */}
            <path d="M40 80 L30 240 Q30 260 50 260 L150 260 Q170 260 170 240 L160 80 Z" 
                  fill="rgba(196,165,116,0.1)" stroke="#c4a574" strokeWidth="2"/>
            {/* Handle */}
            <path d="M160 100 Q200 100 200 150 Q200 200 160 200" fill="none" stroke="#c4a574" strokeWidth="2"/>
            {/* Coffee level */}
            <path d="M38 120 L32 230 Q32 248 50 248 L150 248 Q168 248 168 230 L162 120 Z" 
                  fill="rgba(139,107,80,0.3)"/>
            {/* Foam */}
            <ellipse cx="100" cy="85" rx="58" ry="12" fill="rgba(245,235,224,0.15)"/>
            {/* Latte art hint */}
            <path d="M85 85 Q100 95 115 85" fill="none" stroke="rgba(139,107,80,0.4)" strokeWidth="2"/>
          </svg>
          
          {/* Decorative corner */}
          <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 40,
            height: 40,
            borderTop: '1px solid rgba(196,165,116,0.3)',
            borderLeft: '1px solid rgba(196,165,116,0.3)',
          }}/>
          <div style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            width: 40,
            height: 40,
            borderBottom: '1px solid rgba(196,165,116,0.3)',
            borderRight: '1px solid rgba(196,165,116,0.3)',
          }}/>
        </div>

        {/* Scroll indicator */}
        <div className="fade-up delay-5" style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: 2, opacity: 0.5 }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(196,165,116,0.5), transparent)' }}/>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{
        padding: '120px 48px',
        background: 'linear-gradient(180deg, #0d0906 0%, #1a1210 50%, #0d0906 100%)',
        position: 'relative',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: 4,
                color: '#c4a574',
                marginBottom: 16,
              }}>
                OUR OFFERINGS
              </p>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
              }}>
                The Menu
              </h2>
            </div>
            
            {/* Category tabs */}
            <div style={{ display: 'flex', gap: 32 }}>
              {['espresso', 'specialty', 'snacks'].map((cat) => (
                <button
                  key={cat}
                  className="category-btn"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem',
                    letterSpacing: 2,
                    color: activeCategory === cat ? '#c4a574' : 'rgba(245,235,224,0.5)',
                    textTransform: 'uppercase',
                    borderBottom: activeCategory === cat ? '1px solid #c4a574' : '1px solid transparent',
                    paddingBottom: 4,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(196,165,116,0.1)',
          }}>
            {menu[activeCategory].map((item, i) => (
              <div
                key={item.name}
                className="menu-item"
                style={{
                  background: '#0d0906',
                  padding: '32px 40px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    marginBottom: 6,
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem',
                    opacity: 0.5,
                  }}>
                    {item.desc}
                  </p>
                </div>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.5rem',
                  color: '#c4a574',
                  letterSpacing: 1,
                }}>
                  R{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" style={{
        padding: '120px 48px',
        background: '#0d0906',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* QR Code */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="qr-glow" style={{
              background: '#f5ebe0',
              padding: 32,
              position: 'relative',
            }}>
              {/* QR placeholder */}
              <div style={{
                width: 220,
                height: 220,
                background: `
                  repeating-linear-gradient(
                    0deg,
                    #0d0906 0px, #0d0906 10px,
                    #f5ebe0 10px, #f5ebe0 20px
                  )
                `,
                backgroundSize: '20px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  background: '#f5ebe0',
                  padding: '8px 16px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  color: '#0d0906',
                  fontWeight: 500,
                  letterSpacing: 2,
                }}>
                  SCAN ME
                </div>
              </div>
              
              {/* Corner decorations */}
              <div style={{ position: 'absolute', top: -8, left: -8, width: 24, height: 24, borderTop: '2px solid #c4a574', borderLeft: '2px solid #c4a574' }}/>
              <div style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderTop: '2px solid #c4a574', borderRight: '2px solid #c4a574' }}/>
              <div style={{ position: 'absolute', bottom: -8, left: -8, width: 24, height: 24, borderBottom: '2px solid #c4a574', borderLeft: '2px solid #c4a574' }}/>
              <div style={{ position: 'absolute', bottom: -8, right: -8, width: 24, height: 24, borderBottom: '2px solid #c4a574', borderRight: '2px solid #c4a574' }}/>
            </div>
          </div>

          {/* Order info */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: 4,
              color: '#c4a574',
              marginBottom: 16,
            }}>
              HOW TO ORDER
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              marginBottom: 32,
              lineHeight: 1.1,
            }}>
              Order via<br/>
              <span style={{ color: '#c4a574', fontStyle: 'normal' }}>WhatsApp</span>
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.9,
              opacity: 0.7,
              marginBottom: 40,
              fontWeight: 300,
            }}>
              Simply scan the QR code to open WhatsApp, chat your coffee order 
              to our bot, then swing by to collect and pay with card on pickup.
            </p>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { num: '01', text: 'Scan the QR code with your phone' },
                { num: '02', text: 'Chat your order to our friendly bot' },
                { num: '03', text: 'Collect & pay with card on pickup' },
              ].map((step) => (
                <div key={step.num} style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.2rem',
                    color: '#c4a574',
                    opacity: 0.6,
                  }}>
                    {step.num}
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.95rem',
                    opacity: 0.8,
                  }}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone number */}
            <div style={{
              marginTop: 48,
              padding: '20px 0',
              borderTop: '1px solid rgba(196,165,116,0.2)',
            }}>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                letterSpacing: 3,
                color: '#c4a574',
              }}>
                +27 600 200 670
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="find" style={{
        padding: '120px 48px',
        background: 'linear-gradient(180deg, #0d0906 0%, #1a1210 100%)',
        position: 'relative',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: 4,
            color: '#c4a574',
            marginBottom: 16,
          }}>
            FIND US
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            marginBottom: 16,
          }}>
            Melville Corner
          </h2>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.6,
            marginBottom: 8,
            fontWeight: 300,
          }}>
            18 Main Rd (Beyers Naude Drive)
          </p>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.6,
            marginBottom: 48,
            fontWeight: 300,
          }}>
            Melville, Johannesburg
          </p>

          {/* Hours */}
          <div style={{
            display: 'inline-flex',
            gap: 48,
            padding: '32px 64px',
            border: '1px solid rgba(196,165,116,0.2)',
          }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: 2, opacity: 0.5, marginBottom: 8 }}>MON – FRI</p>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: 2, color: '#c4a574' }}>6AM – 6PM</p>
            </div>
            <div style={{ width: 1, background: 'rgba(196,165,116,0.2)' }}/>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: 2, opacity: 0.5, marginBottom: 8 }}>SAT – SUN</p>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: 2, color: '#c4a574' }}>7AM – 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px',
        background: '#0d0906',
        borderTop: '1px solid rgba(196,165,116,0.1)',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="24" height="24" viewBox="0 0 100 100">
              <rect x="25" y="35" width="50" height="45" rx="5" fill="none" stroke="#c4a574" strokeWidth="4"/>
              <path d="M75 45 Q88 45 88 60 Q88 75 75 75" fill="none" stroke="#c4a574" strokeWidth="4"/>
            </svg>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: 2, color: '#c4a574' }}>
              COFFEE STOP
            </span>
          </div>
          
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            opacity: 0.4,
          }}>
            © 2026 Coffee Stop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
