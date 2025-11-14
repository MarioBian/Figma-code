import React from 'react'

const services = [
  {
    title: "Branding",
    text: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
  },
  {
    title: "Web development",
    text: "Integer ante non nunc, eget est justo vel semper nunc. Lacus."
  },
  {
    title: "Digital marketing",
    text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
  },
  {
    title: "Programmatic advertising",
    text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
  },
  {
    title: "Mobile App",
    text: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices."
  },
  {
    title: "SEO",
    text: "Integer ante non nunc, eget est justo vel semper nunc. Lacus."
  },
  { 
  title: "User testing",
    text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
  }
];


const Services = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-24">
 <div className="max-w-6xl mx-auto px-6 mb-16">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <p className="text-gray-400 uppercase tracking-widest text-sm">
      Trusted by 200+ companies <br /> around the world
    </p>

    <span className="text-gray-500 text-[11px] tracking-[0.15em] leading-tight max-w-sm">
      Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit
      odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim
      orci urna, sit. Lectus ac.
    </span>
  </div>

  <div className="mt-10 flex flex-col items-center gap-6 opacity-70">


  <div className="flex flex-wrap justify-center gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-8 w-24 bg-gray-700 rounded-md"></div>
    ))}
  </div>


  <div className="flex flex-wrap justify-center mr-10 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-8 w-24 bg-gray-700 rounded-md"></div>
    ))}
  </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-6 text-center mb-24">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    We Offer
  </h2>

  <p className="text-gray-500 mt-5 mb-5 text-[11px] tracking-[0.15em] leading-tight max-w-sm mx-auto">
    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat
    scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci
    a tincidunt.
  </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
          key={i}
          className="bg-[#141414] border border-[#1f1f1f] hover:border-[#2b2b2b] transition rounded-2xl p-8 text-left"
        >
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg mb-4"></div>
        
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        
          <p className="text-gray-500 text-[11px] tracking-[0.15em] leading-tight max-w-sm">
            {service.text}
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
        <button className="text-yellow-600 border border-yellow-600 font-medium rounded-sm text-sm px-6 py-0.5 text-center me-2 mb-2 ">Let´s connect</button>
      </div>
    </div>
  </section>
  )
}

export default Services