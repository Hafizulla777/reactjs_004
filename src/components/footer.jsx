import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.355.062 2.29.274 3.148.608a6.002 6.002 0 012.165 1.407 6.002 6.002 0 011.407 2.165c.334.857.546 1.79.608 3.148.044.926.054 1.281.054 3.71s-.01 2.784-.054 3.71c-.062 1.355-.274 2.29-.608 3.148a6.002 6.002 0 01-1.407 2.165 6.002 6.002 0 01-2.165 1.407c-.857.334-1.79.546-3.148.608-.926.044-1.281.054-3.71.054s-2.784-.01-3.71-.054c-1.355-.062-2.29-.274-3.148-.608a6.002 6.002 0 01-2.165-1.407 6.002 6.002 0 01-1.407-2.165c-.334-.857-.546-1.79-.608-3.148C2.01 14.784 2 14.43 2 12s.01-2.784.054-3.71c.062-1.355.274-2.29.608-3.148a6.002 6.002 0 011.407-2.165 6.002 6.002 0 012.165-1.407c.857-.334 1.79-.546 3.148-.608.926-.044 1.281-.054 3.71-.054zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter/X',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C22 9.822 22 12 22 12s0 2.178-.42 3.814c-.23.861-.907 1.538-1.768 1.768C18.178 18 12 18 12 18s-6.178 0-7.814-.42a2.493 2.493 0 01-1.768-1.768C2 14.178 2 12 2 12s0-2.178.42-3.814a2.493 2.493 0 011.768-1.768C5.822 5 12 5 12 5s6.178 0 7.812.418zM9.75 15.022L15.5 12 9.75 8.978v6.044z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <span className="text-xl font-bold text-white tracking-wide">
              Down<span className="text-blue-500">Media</span>
            </span>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Fast, free, and secure tool to download your favorite high-quality images and videos from across the web.
            </p>
          </div>

          {/* Supported Platforms Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Supported</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Video Downloader</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Image Downloader</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Instagram Reels</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">TikTok Videos</a></li>
            </ul>
          </div>

          {/* Legal / Trust Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Copyright Notice</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">DMCA Removal</a></li>
            </ul>
          </div>

          {/* Quick Contact / Support */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <p className="mt-4 text-sm text-slate-400">
              Need help or want to report a broken link?
            </p>
            <a 
              href="mailto:support@example.com" 
              className="mt-2 inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              support@yourdomain.com
            </a>
          </div>

        </div>

        {/* Bottom Section: Copyright & Social Icons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright text */}
          <p className="text-xs text-slate-500 order-2 sm:order-1">
            &copy; {currentYear} DownMedia. Built for fast media processing. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 order-1 sm:order-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;