interface myProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginHorizontal?: string;
  marginVertical?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;
  className?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  className,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingHorizontal,
  paddingVertical,
}: myProps) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        className={`w-[${width}] h-[${height}] ${className} m-[${margin}] mt-[${marginTop} mb-[${marginBottom}] ml-[${marginLeft}] mr-[${marginRight}] mx-[${marginVertical}] my-[${marginHorizontal}] px-[${paddingHorizontal}] py-[${paddingVertical}] p-[${padding}] pt-[${paddingTop}] pb-[${paddingBottom}] pl-[${paddingLeft}] pr-[${paddingRight}]  `}
      />
    </figure>
  );
}
