import ProfileLayout from "@/app/components/ProfileLayout";
import GalleryCard from "@/app/components/GalleryCard";

const GalleryPage = () => {
  return (
    <ProfileLayout>
      <h1 className="text-xl font-bold -mt-6">Gallery</h1>
      <GalleryCard />
    </ProfileLayout>
  );
};

export default GalleryPage;