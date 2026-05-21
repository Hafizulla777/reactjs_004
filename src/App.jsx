import SignUp from "./components/sign_up";
import Footer from "./components/footer";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { useRef } from "react";

const HomeSection = () => {
  // Create an anchor link reference for smooth scrolling
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      comment: "This is by far the fastest video downloader I have used. No sketchy pop-ups, just crisp 4K quality downloads in seconds!",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Rivera",
      role: "Graphic Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      comment: "I save dozens of reference images daily for my design mood boards. DownMedia saves me so much precious time.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Social Media Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      comment: "Extremely friendly interface! Being able to preview the content directly in the gallery before downloading is a game changer.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-100 font-sans">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Introduction)                            */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-linear-to-b from-slate-900 to-slate-955">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Decorative Tagline */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 select-none">
            ✨ Free High-Speed Media Downloader
          </span>

          {/* Value Hook */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Download Any Video or Image <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-400">
              In One Simple Click.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Paste your link to fetch and back up content natively. DownMedia safely processes HD video loops, high-fidelity graphics, and social media reels instantly to your local device.
          </p>

          {/* Click to Scroll Action Button */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToGallery}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm"
            >
              Explore Media Gallery
            </button>
            <a
              href="#how-it-works"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold rounded-xl active:scale-95 transition-all text-sm"
            >
              How It Works
            </a>
          </div>

        </div>

        {/* Ambient Gradient Background Glow Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[20%] w-75 h-75 bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[20%] w-62.5 h-62.5 bg-indigo-600 rounded-full blur-[100px]" />
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. MEDIA GALLERY SECTION                                   */}
      {/* ========================================================= */}
      <div ref={galleryRef} className="scroll-mt-16">
        <Gallery />
      </div>


      {/* ========================================================= */}
      {/* 3. FRIENDLY REVIEW SECTION                                */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Loved by Creators Worldwide
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              See what our community has to say about their media download workflows.
            </p>
          </div>

          {/* Reviews Grid Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800/60 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl"
              >
                <div>
                  {/* Star Elements */}
                  <div className="flex text-amber-400 gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Profile Meta Info */}
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-900">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/20"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <p className="text-[11px] font-medium text-slate-500">{review.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

















function App() {
  return (
    <>
      <div className="bg-slate-900">
        <div className="w-full h-full">

          {/* navbar */}
          <nav className="bg-slate-800 text-white p-4 sticky top-0 z-50 w-full h-16 flex items-center justify-between">
            <h1 className="text-3xl">Down<span className="text-blue-500">Media</span></h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-300" to="/">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300" to="/about">About</a></li>
              <li><a href="/gallery" className="hover:text-gray-300" to="/gallery">Gallery</a></li>
              <li><a href="/signup" className="hover:text-gray-300" to="/signup">Sign Up</a></li>
            </ul>
          </nav>

         <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<div className="text-red-500">404 Not Found</div>} />
         </Routes>

       
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
