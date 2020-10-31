import React from "react";
import ImageItem from "./ImageItem";
import "./image__gallery.css";

export default function ImageGallery({ data, activeModal }) {
  return (
    <div className="container">
      <div className="row mt-3 image__gallery">
        <div className="card-columns">
          {data.map((item) => {
            return (
              <ImageItem key={item.id} item={item} activeModal={activeModal} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
