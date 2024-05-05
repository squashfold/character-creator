import React, { useEffect, useState } from 'react';
import { Image as KonvaImage } from 'react-konva';

const SvgImage = ({ src, fillColor, useKonva, className = '', id, width, height, x, y, draggable = false }: { src: string | null, fillColor?: string, useKonva?: boolean, className?: string, id: string, width?: number, height?: number, x?: number, y?: number, draggable?: boolean }) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    useEffect(() => {
      if (src === null) {
        setImage(null); // If src is null, set image to null
        return;
      }
  
      fetch(src)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(data, "image/svg+xml");
          const paths = svgDoc.querySelectorAll('path');
          if (fillColor){
            paths.forEach(path => {
              path.style.fill = fillColor;
            });
          }
          const img = new window.Image();
          img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgDoc.documentElement.outerHTML);
          img.onload = () => {
            setImage(img);
          };
        });
    }, [src, fillColor]);
  
    if (!src || !image) return null; // Return null if src or image is null
  
    return useKonva ? 
      <KonvaImage
        image={image}
        width={width ? width : 1080}
        height={height ? height : 1080}
        x={x ? x : 0}
        y={y ? y : 0}
        id={id}
        draggable={draggable ? true : false}
        /> : 
      <img 
        src={image.src} 
        alt="" 
        width={width ? width : 1080} 
        height={height ? height : 1080} 
        className={className} 
        id={id} />;
};

export default SvgImage;