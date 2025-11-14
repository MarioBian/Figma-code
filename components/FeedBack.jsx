import React from 'react'
const feddback = [
  {
    title: "Alexander Percival Whitmore",
    text: "Curabitur nec augue eu tortor venenatis congue. In mattis ipsum fringilla, tempus velit sit amet euismod dolor."
  },
  {
    title: "Esther Howard",
    text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit. Placerat sapien, dolor, aenean vivamus in tincidunt et. Spharetra nibh eget vitae pulvinar."
  },
  {
    title: "Arlene McCoy",
    text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est. Sollicitudin tristique euismod elit."
  },
  {
    title: "Jane Cooper",
    text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis."
  }
];

const FeedBack = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 text-center mb-24">
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {feddback.map((feedback, i) => (
      <div
      key={i}
      className="bg-[#141414] border border-[#1f1f1f] hover:border-[#2b2b2b] transition rounded-2xl p-8 text-left"
    >
      <div className="flex items-center gap-4 mb-4">
    <div className="w-10 h-10 bg-orange-500/20 rounded-lg"></div>
    <h3 className="text-xl font-semibold">{feedback.title}</h3>
  </div>


  <p className="text-gray-500 text-[11px] tracking-[0.15em] leading-tight">
    {feedback.text}
  </p>
    </div>
     ))}
      </div>
      </div>
  )
}

export default FeedBack