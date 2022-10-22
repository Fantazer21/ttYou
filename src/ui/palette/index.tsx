import React, { useState } from "react";
import styles from "./palette.module.scss";
import { SketchPicker } from "react-color";
import Cross from "../../assets/icons/Icon.svg";

const Palette = () => {
  const [color, setColor] = useState();
  const [toggle, setToggle] = useState(false);
  const [arrayColors, setArrayColors] = useState<string[]>([]);
  const [colorWrapperId, setColorWrapperId] = useState<null | number>(null);

  const handleChangeComplete = (color: { hex: any }) => {
    setColor(color.hex);
  };

  const outsideClick = () => {
    setToggle(false);
    setArrayColors([...arrayColors, color!]);
  };

  return (
    <div className={styles.paletteWrapper}>
      <div className={styles.colorsWrapper}>
        {arrayColors.map((color, index) => {
          return (
            <div
              onMouseEnter={() => setColorWrapperId(index)}
              onMouseLeave={() => setColorWrapperId(null)}
              onClick={() =>
                setArrayColors(arrayColors.filter((el, ind) => ind !== index))
              }
              style={{ backgroundColor: `${color}` }}
              className={styles.colorWrapper}
              key={color}
            >
              {colorWrapperId === index ? (
                <img
                  className={styles.cross}
                  onClick={() => {
                    setColorWrapperId(null);
                    setArrayColors(
                      arrayColors.filter((el, ind) => ind !== index)
                    );
                  }}
                  src={Cross}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div
        tabIndex={0}
        onBlur={() => outsideClick()}
        className={styles.sketchWrapper}
      >
        {toggle && (
          <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        )}
      </div>

      <button onClick={() => setToggle(!toggle)} className={styles.btn}>
        <p>Add color</p>
      </button>
    </div>
  );
};

export default Palette;
