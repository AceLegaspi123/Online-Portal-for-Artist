import AboutList from "@/app/components/profile/about/AboutList";
import AboutContent from "@/app/components/profile/about/AboutContent";

const AboutPage = () => {
  return (
<div className="flex flex-col lg:flex-row gap-12 items-start py-10 px-6">
  {/* The Sidebar will stick because the parent is a flex container and we used self-start */}
  <AboutList /> 
  
  {/* The Main Content Area */}
  <div className="flex-1">
     <AboutContent />
  </div>
</div>
  );
};

export default AboutPage;