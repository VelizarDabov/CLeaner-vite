import { imagePairs } from "../constants";

const Gallery = () => {
  return (
    <section id="gallery" className="pt-20">
      <div className="container mx-auto my-12">
        <h2 className="text-3xl font-bold mb-6">Before & After Gallery</h2>
        <div className="grid grid-cols-2 gap-6">
          {imagePairs.map((pair, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-rows-1">
              <div className="relative w-full h-450">
                <img
                  src={pair.dirty}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Before</span>
                </div>
              </div>
              <div className="relative w-full h-450">
                <img
                  src={pair.clean}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
