import React from 'react';

const About = () => {
  const steps = [
    {
      num: '01',
      title: 'Copy Media URL',
      desc: 'Find the video or image you want to save from any supported platform and copy its link.'
    },
    {
      num: '02',
      title: 'Paste & Process',
      desc: 'Paste the link into our input downloader bar at the top of the homepage and hit download.'
    },
    {
      num: '03',
      title: 'Save to Device',
      desc: 'Choose your preferred quality resolution and download the media instantly to your storage.'
    }
  ];

  return (
    <section className="w-full bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header: What we do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">About Our App</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2 sm:text-4xl">
              Your Ultimate Media Companion
            </h2>
          </div>
          <p className="text-slate-400 text-base leading-relaxed md:mt-8">
            <strong>DownMedia</strong> is a fast, web-based tool built to help you download high-quality videos and images from across the internet. We eliminate complex installations and annoying ad pop-ups, giving you direct access to your favorite content cleanly and safely.
          </p>
        </div>

        <hr className="border-slate-900 my-12" />

        {/* Bottom Section: How to use */}
        <div>
          <div className="text-center md:text-left mb-10">
            <h3 className="text-xl font-bold text-white">How To Use DownMedia</h3>
            <p className="text-slate-500 text-sm mt-1">Get your media files ready in three straightforward steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div 
                key={step.num} 
                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-900 hover:border-slate-800 transition-colors"
              >
                <div className="text-3xl font-black text-blue-500/30 font-mono mb-4">
                  {step.num}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;