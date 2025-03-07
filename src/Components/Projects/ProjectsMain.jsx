import ProjectsCard from "./ProjectsCard";





// Dummy data for cards
const cardsData = [
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Building Construction", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Metal Industry", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Bridge Construction", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Car Manufacturing", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Metal Industry", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Building Construction", subtitle: "- Industry" },
];

const ProjectsMain = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className=" container mx-auto px-[5%] grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <ProjectsCard key={index} image={card.image} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;