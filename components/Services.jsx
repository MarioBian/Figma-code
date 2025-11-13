import React from 'react'

const Services = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-24">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 mb-16 text-center md:text-left">
  <p className="text-gray-400 uppercase tracking-widest text-sm">
    Trusted by 200+ companies <br /> around the world{" "}
  </p>

  <span className="text-gray-500 text-[11px] tracking-[0.15em] leading-tight max-w-sm">
    Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus
    purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et
    dapibus nunc, porta enim orci urna, sit. Lectus ac.
  </span>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-8 opacity-70">
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
        <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 text-center mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">We Offer</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">

      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-[#141414] border border-[#1f1f1f] hover:border-[#2b2b2b] transition rounded-2xl p-8 text-left"
          >
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Title</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Description text goes here...
            </p>
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
      <div className="flex justify-center">
        <div className="w-80 h-80 bg-gradient-to-tr from-orange-500/40 to-pink-500/20 rounded-3xl"></div>
      </div>


      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose us</h2>
        <p className="text-gray-400 mb-6 max-w-md">
        </p>
        <button className="btn btn-warning font-semibold">Learn More</button>
      </div>
    </div>
  </section>
  )
}

export default Services