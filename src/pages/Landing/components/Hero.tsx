function Hero() {
  return (
    <div className="relative h-[43rem] -z-[1]">
      <div className="pt-[55px] flex flex-col items-center">
        <h2 className="text-6xl font-bold">iPhone 14</h2>
        <h3 className="max-w-[415px] text-3xl text-center tracking-[0.004em] mt-1">
          A huge leap in battery life.
          <br /> Two great sizes. Now in yellow.
        </h3>
        <p className="mt-4 text-[#6e6e73]">Available starting 3.14</p>
        <div className="mt-4 flex gap-4">
          <a href="#" className="text-blue-600">
            Learn more &gt;
          </a>
          <a href="#" className="text-blue-600">
            Shop &gt;
          </a>
        </div>
      </div>
      <div className="top-0 left-0 absolute w-full h-full -z-[1]">
        <figure
          className="h-[730px] w-[3008px] bg-[length:3008px_736px] bg-no-repeat -translate-x-1/3 -translate-y-1/3"
          style={{
            backgroundImage: `url('/images/hero_iphone14_yellow_preorder__9y5sfdg5m5eu_large_2x.jpg')`,
          }}
        ></figure>
      </div>
    </div>
  );
}

export default Hero;
