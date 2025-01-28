const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Privacy Policy
        </h1>
        <div className="prose max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when using our
            currency calculator service.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our currency
            conversion services.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your information to third
            parties.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;