const toPixel = (value) => `${value}px`;
const toRem = (value) => `${value}rem`;

const convertPixelToRem = (px, baseFontSize = 16) => {
  return toRem(px / baseFontSize);
};

const convertRemToPixel = (rem, baseFontSize = 16) => {
  return toPixel(rem * baseFontSize);
};

const slopeFnToCSSCalc = (x, slope) => {
  const mapping = {
    linear: () => x,
    easeOutQuadratic: () => `(${x} * 2 - (${x} * ${x}))`,
    easeOutCubic: () => `(${x} * 3 - ${x} * ${x} * 3 + ${x} * ${x} * ${x})`,
    easeInQuadratic: () => `(${x} * ${x})`,
    easeInCubic: () => `(${x} * ${x} * ${x})`,
    easeInOut: () => `(3 * ${x} * ${x} - 2 * ${x} * ${x} * ${x})`,
  };

  return mapping[slope]();
};

const parseRemPix = (value) => {
  const pixelRegex = /^(-?\d+(\.\d+)?)\s?px$/;
  const remRegex = /^(-?\d+(\.\d+)?)\s?rem$/;

  if (pixelRegex.test(value)) {
    const number = value.split("px")[0].trim();
    return {
      value: Number.parseFloat(number),
      unit: "px",
    };
  }
  if (remRegex.test(value)) {
    const number = value.split("rem")[0].trim();
    return {
      value: Number.parseFloat(number),
      unit: "rem",
    };
  }
  throw new Error("Invalid input: must be a valid pixel or rem string");
};

const fluid = (
  min,
  max,
  minViewport = 320,
  maxViewport = 1440,
  unit = "rem",
  slope = "linear",
) => {
  // parse the min and max values
  const { value: minPx, unit: minUnit } = parseRemPix(min);
  const { value: maxPx, unit: maxUnit } = parseRemPix(max);
  const lowerBound = minPx > maxPx ? maxPx : minPx;
  const upperBound = minPx > maxPx ? minPx : maxPx;
  const direction = minPx > maxPx ? -1 : 1;
  const startingBound = direction === -1 ? upperBound : lowerBound;
  const difference = {
    value: maxPx - minPx,
    toString: () => `${maxPx - minPx}${minUnit}`,
  };

  // calculate the slope
  const viewport = "100vw";
  const dividor = maxViewport - minViewport;
  const normalizedViewport = `((${viewport} - ${toPixel(minViewport)}) / ${dividor})`;

  // named the arguments
  const x = normalizedViewport;
  const factor = slopeFnToCSSCalc(x, slope);
  const y = `calc(${factor} * ${difference.value} + ${startingBound}${minUnit})`;

  const convert = (value) => {
    if (minUnit !== maxUnit) {
      throw new Error("min and max must have the same unit");
    }
    if (minUnit === "rem") {
      if (unit === "rem") return toRem(value);
      if (unit === "px") return convertRemToPixel(value);
    }
    if (minUnit === "px") {
      if (unit === "px") return toPixel(value);
      if (unit === "rem") return convertPixelToRem(value);
    }
  };

  return `clamp(${convert(lowerBound)}, ${y}, ${convert(upperBound)})`;
};

module.exports = fluid;