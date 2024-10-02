import HomeAboutMain from "./HomeAboutMain";

const HomeAbout = () => {
  return (
    <div className="">
      <div className="px-[5%] pt-28">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="pr-5">
          <img
        src="https://i.postimg.cc/rszL4Zmj/Screenshot-2024-10-02-123133.png"
        alt="Image description"
        className="h-full w-fit" // Fixed height and crop top/bottom
      />
          </div>

          <HomeAboutMain></HomeAboutMain>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
