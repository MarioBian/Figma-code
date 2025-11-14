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
  }
];

const FeedBack = () => {
  return (
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
  )
}

export default FeedBack