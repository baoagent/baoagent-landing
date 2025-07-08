const ContactSection = () => (
  <footer className="w-full max-w-2xl px-6 py-10 text-center border-t border-gray-200 mt-8">
    <h2 className="text-xl font-semibold mb-2 text-gray-900">Contact Us</h2>
    <div className="flex flex-col sm:flex-row justify-center gap-2 text-gray-700 text-base">
      <a href="mailto:hello@baoagent.com?subject=Hello%20BAO%20Agent&body=Hi%20there%2C" className="hover:underline">hello@baoagent.com</a>
      <span className="hidden sm:inline">|</span>
      <a href="mailto:kevin@baoagent.com?subject=Hello%20BAO%20Agent&body=Hi%20there%2C" className="hover:underline">kevin@baoagent.com</a>
    </div>
    <div className="mt-6 text-sm text-gray-400">&copy; <span><CurrentYear /></span> BAO Agent. All rights reserved.</div>
  </footer>
);

import CurrentYear from "./CurrentYear";
export default ContactSection; 