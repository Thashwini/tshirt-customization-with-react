import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import BackgroundImage from '../Images/tshirtMockup.png';
import Konva from 'konva';

function Tshirt(props) {
  const [images, setImage] = useState(new window.Image());
  const shirtRef = React.useRef();
  useEffect(() => {
    const MyImage = new window.Image();
    MyImage.src = BackgroundImage;
    MyImage.onload = () => {
      setImage(MyImage);
    };
  }, []);

  useEffect(() => {
    if (!shirtRef.current) {
      // do componentDidMount logic
      shirtRef.current = true;
    } else {
      // do componentDidUpdate logic
      shirtRef.current.cache();
      shirtRef.current.getLayer().batchDraw();
      shirtRef.current.blue(props.color.b);
      shirtRef.current.red(props.color.r);
      shirtRef.current.green(props.color.g);
    }
  });
  return (
    <Stage width={850} height={500}>
      <Layer>
        <Image
          filters={[Konva.Filters.RGB]}
          image={images}
          x={0}
          y={0}
          width={850}
          height={500}
          ref={shirtRef}
        />
      </Layer>
    </Stage>
  );
}

export default Tshirt;
