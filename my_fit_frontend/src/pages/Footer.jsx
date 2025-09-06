const Footer = () => (
  <footer className="md:ml-64 p-6 text-center text-gray-400 border-t border-gray-800 bg-black mt-12">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} <span className="font-semibold text-green-400">MyFit</span>. All rights reserved.
    </p>
    <div className="flex justify-center space-x-6 mt-3 text-gray-500">
      <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
      <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
      <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
    </div>
  </footer>
);

export default Footer;
