export default function FlavorDesign({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      {" "}
      {/* Added centering */}
      <div className="rounded-full h-8 w-8 md:h-32 md:w-32 overflow-hidden">
        {/* Changed <image> to <img> */}
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <h3 className="text-lg text-center font-inter font-bold text-purple-800 mt-2">
        {name}
      </h3>
    </div>
  );
}
