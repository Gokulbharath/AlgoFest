import { useState } from 'react';
import { X } from 'lucide-react';
import e1 from "../assets/img1.jpg"
import e2 from "../assets/img2.jpg"
import e3 from "../assets/img3.jpg"
import e4 from "../assets/img4.jpg"
import e5 from "../assets/img5.jpg"
import e6 from "../assets/img6.jpg"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: e1, title: 'Event 1' },
    { url: e2, title: 'Event 2' },
    { url: e3, title: 'Event 3' },
    { url: e4, title: 'Event 4' },
    { url: e5, title: 'Event 5' },
    { url: e6, title: 'Event 6' },

  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text-blue">
          Event Gallery
        </h2>

 {/* <img
                src={e1}
                alt={""}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
