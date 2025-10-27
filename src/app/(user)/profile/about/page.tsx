import AboutList from "@/components/profile/about/AboutList";
import AboutContent from "@/components/profile/about/AboutContent";

const AboutPage = () => {
  return (
    <div>
      <div  className="flex gap-20">
        <AboutList/>
        <AboutContent/>
      </div>

    </div>
  );
};

export default AboutPage;