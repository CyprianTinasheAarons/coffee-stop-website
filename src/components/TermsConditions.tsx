import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function TermsConditions() {
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
          Terms &amp; Conditions
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
              These Terms and Conditions ("Terms") govern your use of the MuleView Coffee Stop
              WhatsApp ordering service and website (collectively, the "Service") operated by
              LOKAL ONE (PTY) LTD, located at 18 Main Rd, Melville, Johannesburg, South Africa.
            </p>
            <p className="mt-3">
              By using our Service, you agree to be bound by these Terms. If you do not agree to
              these Terms, please do not use our Service.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              2. Service Description
            </h2>
            <p>
              MuleView Coffee Stop provides an AI-powered WhatsApp ordering bot that allows customers to
              place coffee and food orders via WhatsApp. The service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Browsing our menu and placing orders via WhatsApp chat</li>
              <li>Receiving order confirmations and estimated wait times</li>
              <li>Receiving notifications when your order is ready for collection</li>
              <li>Providing feedback on your orders</li>
            </ul>
          </section>

          {/* WhatsApp Usage Terms */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              3. WhatsApp Usage Terms
            </h2>

            <h3 className="text-lg text-cream mt-5 mb-2">3.1 Consent to Communication</h3>
            <p>
              By initiating a conversation with our WhatsApp number (+27 600 200 670), you consent
              to receiving messages from our automated ordering bot, including order confirmations,
              status updates, and service-related notifications.
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">3.2 Automated Responses</h3>
            <p>
              Our WhatsApp service is powered by an AI chatbot. While we strive for accuracy,
              automated responses may occasionally misunderstand your request. You are responsible
              for reviewing your order summary before confirming. If your order is incorrect, please
              let us know immediately via the WhatsApp chat.
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">3.3 WhatsApp Platform Rules</h3>
            <p>
              Your use of WhatsApp is subject to WhatsApp's own{' '}
              <a
                href="https://www.whatsapp.com/legal/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline"
              >
                Privacy Policy
              </a>
              . We are not responsible for WhatsApp's data practices or platform availability.
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">3.4 Opting Out</h3>
            <p>
              You may stop using our WhatsApp service at any time by simply not sending further
              messages. To request deletion of your data, send "DELETE MY DATA" to our WhatsApp
              number or contact us directly.
            </p>
          </section>

          {/* Orders and Payment */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              4. Orders and Payment
            </h2>

            <h3 className="text-lg text-cream mt-5 mb-2">4.1 Order Placement</h3>
            <p>
              Orders placed through our WhatsApp bot are subject to availability. We reserve the
              right to decline or cancel an order for any reason, including but not limited to
              item unavailability, store closure, or technical issues.
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">4.2 Pricing</h3>
            <p>
              All prices displayed on our menu are in South African Rand (ZAR) and include VAT
              where applicable. We reserve the right to change prices at any time without prior
              notice. The price at the time of your order confirmation applies.
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">4.3 Payment</h3>
            <p>
              Payment is collected at the point of collection at our store. We accept cash, card,
              and other payment methods as displayed in-store.
            </p>

            <h3 className="text-lg text-cream mt-5 mb-2">4.4 Order Collection</h3>
            <p>
              Orders must be collected at our premises at 18 Main Rd, Melville, Johannesburg.
              You will receive a WhatsApp notification when your order is ready. Uncollected orders
              may be discarded after a reasonable waiting period.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              5. Acceptable Use
            </h2>
            <p className="mb-3">When using our WhatsApp ordering service, you agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Send abusive, threatening, or offensive messages</li>
              <li>Attempt to manipulate, exploit, or interfere with our ordering bot</li>
              <li>Place fraudulent or intentionally misleading orders</li>
              <li>Use our service for any unlawful purpose</li>
              <li>Send spam or unsolicited promotional messages to our number</li>
              <li>Impersonate another person or misrepresent your identity</li>
            </ul>
            <p className="mt-3">
              We reserve the right to block any user who violates these terms from using our
              WhatsApp ordering service.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              6. Intellectual Property
            </h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is
              the property of MuleView Coffee Stop and is protected by South African intellectual property
              laws. You may not reproduce, distribute, or create derivative works from our content
              without prior written permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, MuleView Coffee Stop shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of our
              Service, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Errors or inaccuracies in AI-generated order processing</li>
              <li>Service interruptions or unavailability of WhatsApp</li>
              <li>Delays in order preparation or notification delivery</li>
              <li>Loss of data due to technical failures</li>
            </ul>
            <p className="mt-3">
              Our total liability for any claim arising from the Service shall not exceed the value
              of the relevant order.
            </p>
          </section>

          {/* Allergies and Dietary */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              8. Allergies &amp; Dietary Information
            </h2>
            <p>
              While we make every effort to accommodate dietary requirements and provide accurate
              allergen information, we cannot guarantee that our products are free from allergens.
              If you have a food allergy or dietary restriction, please inform our staff directly
              at the point of collection. Our AI ordering bot may not capture all allergy-related
              nuances, so please verify with staff in person.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              9. Privacy
            </h2>
            <p>
              Your use of our Service is also governed by our{' '}
              <Link
                to="/privacy"
                className="text-gold hover:text-gold-light underline"
              >
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your personal information,
              including WhatsApp user data.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              10. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic
              of South Africa. Any disputes arising from these Terms shall be subject to the
              exclusive jurisdiction of the courts of South Africa.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              11. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on
              this page with an updated revision date. Your continued use of the Service after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl tracking-wider text-gold/90 mb-4">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us:
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
            to="/privacy"
            className="text-gold hover:text-gold-light transition-colors font-sans text-sm underline"
          >
            View Privacy Policy
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
