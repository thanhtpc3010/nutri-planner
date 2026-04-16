const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600">Have questions? We'd love to hear from you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p>hello@nutriplanner.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p>123 Nutrition St, Health City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl border p-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.566584797636!2d-73.9864!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjciTiA3M8KwNTknMTUuMiJX!5e0!3m2!1sen!2sus!4v1635789234567"
            className="w-full h-96 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

