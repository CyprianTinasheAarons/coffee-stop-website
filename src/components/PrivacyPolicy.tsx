import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-coffee-dark font-serif text-cream">
      <div className="grain-overlay" />

      {/* Header */}
      <div className="bg-coffee-medium/50 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-sans text-sm tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 relative"
      >
        <h1 className="font-display text-4xl sm:text-5xl tracking-wider text-gold mb-2">
          Privacy Policy
        </h1>
        <p className="font-sans text-sm text-cream/50 mb-12">
          Last updated: 30 January 2026
        </p>

        <div className="space-y-10 font-sans text-cream/80 text-[0.95rem] leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              1. Introduction
            </h2>
            <p>
              MuleView Coffee Stop ("we", "us", or "our"), a trading name of LOKAL ONE (PTY) LTD,
              operates a WhatsApp-based coffee ordering service and website located in Melville,
              Johannesburg, South Africa. This Privacy Policy
              explains how we collect, use, disclose, and protect your personal information when you
              use our WhatsApp ordering bot, visit our website, or interact with our services.
            </p>
            <p className="mt-3">
              By using our services, you agree to the collection and use of information in accordance
              with this policy. We are committed to protecting your privacy and complying with the
              Protection of Personal Information Act (POPIA) of South Africa.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3">When you interact with our WhatsApp ordering service, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-cream">WhatsApp phone number</strong> &mdash; your mobile number
                used to communicate with our ordering bot via WhatsApp
              </li>
              <li>
                <strong className="text-cream">WhatsApp display name</strong> &mdash; your public profile
                name as provided by WhatsApp
              </li>
              <li>
                <strong className="text-cream">Order details</strong> &mdash; the items you order,
                customisations, and order preferences
              </li>
              <li>
                <strong className="text-cream">Conversation history</strong> &mdash; messages exchanged
                with our ordering bot to process your order and provide customer support
              </li>
              <li>
                <strong className="text-cream">Feedback and ratings</strong> &mdash; any feedback or
                reviews you voluntarily provide about our products or service
              </li>
            </ul>
            <p className="mt-4">
              We do <strong className="text-cream">not</strong> collect your WhatsApp profile photo,
              status, contacts list, location data, or any other WhatsApp account information beyond
              what is listed above.
            </p>
          </section>

          {/* WhatsApp Data Usage */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              3. WhatsApp Data Policy &amp; Usage
            </h2>
            <p className="mb-3">
              Our WhatsApp ordering bot is powered by the Twilio WhatsApp Business API. When you
              message our WhatsApp number, the following applies:
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">3.1 How We Use WhatsApp Data</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-cream">Order processing</strong> &mdash; we use your messages
                to understand and fulfil your coffee orders
              </li>
              <li>
                <strong className="text-cream">Order notifications</strong> &mdash; we send you order
                confirmations, estimated wait times, and order-ready notifications via WhatsApp
              </li>
              <li>
                <strong className="text-cream">Customer support</strong> &mdash; we use conversation
                history to resolve any issues with your orders
              </li>
              <li>
                <strong className="text-cream">Service improvement</strong> &mdash; we may analyse
                aggregated, anonymised order data to improve our menu and service
              </li>
            </ul>

            <h3 className="text-lg text-cream mt-5 mb-2">3.2 WhatsApp Data We Do NOT Use</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>We do not sell, rent, or share your WhatsApp data with third-party advertisers</li>
              <li>We do not use your WhatsApp data for marketing purposes without your explicit consent</li>
              <li>We do not access or store your WhatsApp contacts, media files, or private messages outside of our conversation</li>
              <li>We do not use your data for profiling or automated decision-making beyond order processing</li>
            </ul>

            <h3 className="text-lg text-cream mt-5 mb-2">3.3 Data Sharing with Service Providers</h3>
            <p>
              To provide our WhatsApp ordering service, your data may be processed by the following
              third-party service providers, each bound by their own privacy policies and data
              protection obligations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>
                <strong className="text-cream">Twilio</strong> &mdash; WhatsApp Business API provider
                that processes message delivery between you and our bot
              </li>
              <li>
                <strong className="text-cream">OpenAI</strong> &mdash; AI language model provider used
                to understand and process your natural language orders (message content only, no
                personal identifiers are shared)
              </li>
              <li>
                <strong className="text-cream">Neon (PostgreSQL)</strong> &mdash; cloud database
                provider where order records are securely stored
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              4. Data Retention
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-cream">Order data</strong> is retained for up to 12 months
                for operational and customer service purposes
              </li>
              <li>
                <strong className="text-cream">Conversation history</strong> is retained for up to
                90 days to support order-related queries
              </li>
              <li>
                <strong className="text-cream">Phone numbers</strong> are retained as long as you
                remain an active customer; inactive accounts are purged after 12 months
              </li>
            </ul>
            <p className="mt-3">
              You may request deletion of your data at any time by contacting us via WhatsApp or
              email.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Encrypted database connections (SSL/TLS)</li>
              <li>API key authentication for all administrative access</li>
              <li>WhatsApp's built-in end-to-end encryption for message delivery</li>
              <li>Restricted access to customer data on a need-to-know basis</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              6. Your Rights (POPIA)
            </h2>
            <p className="mb-3">
              Under the Protection of Personal Information Act (POPIA), you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us via WhatsApp at{' '}
              <a
                href="https://wa.me/27600200670"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline"
              >
                +27 600 200 670
              </a>.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              7. Children's Privacy
            </h2>
            <p>
              Our service is not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe a child has provided us with
              personal information, please contact us so we can remove it.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <ul className="list-none space-y-1 mt-3 ml-2">
              <li>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/27600200670"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline"
                >
                  +27 600 200 670
                </a>
              </li>
              <li>Location: 18 Main Rd, Melville, Johannesburg</li>
            </ul>
          </section>
        </div>

        {/* Footer link */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col gap-4">
          <Link
            to="/terms"
            className="text-gold hover:text-gold-light transition-colors font-sans text-sm underline"
          >
            View Terms &amp; Conditions
          </Link>
          <div className="font-sans text-xs text-cream/30 space-y-1">
            <p>© 2026 MuleView Coffee Stop. Melville, Johannesburg.</p>
            <p>MuleView Coffee Stop is owned by LOKAL ONE (PTY) LTD</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
