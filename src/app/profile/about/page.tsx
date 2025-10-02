import ProfileLayout from "@/app/components/ProfileLayout";
import AboutList from "@/app/components/AboutList";
import AboutContent from "@/app/components/AboutContent";

const AboutPage = () => {
  return (
    <ProfileLayout>
      <div  className="flex gap-20">
        <AboutList/>
        <AboutContent/>
      </div>

    </ProfileLayout>
  );
};

export default AboutPage;