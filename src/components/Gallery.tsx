"use client";

import React from "react";

const Gallery: React.FC = () => {
  const imageSrc = "/gallery-image.jpg";
  const imageAlt = "gallery image";

  return (
    // centered inside the snap container
    <div className="min-h-screen p-8 flex flex-col items-center justify-center space-y-8">
    {/* Main heading with Impact font */}
        <h1 
        className="text-6xl font-black text-sky-950 uppercase tracking-normal leading-none" // tracking normal or tight
        style={{
            fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
            fontStretch: 'condensed'
        }}
        >
        Gallery
        </h1>

        <div className="mt-8">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-150 h-110 object-cover rounded-sm"
            />
        </div>
    </div>
  );
};

export default Gallery;
