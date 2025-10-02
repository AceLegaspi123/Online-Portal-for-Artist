import ProfileLayout from "@/app/components/ProfileLayout";
import ShopCard from "@/app/components/ShopCard";

const ShopPage = () => {
  return (
    <ProfileLayout>
      <h1 className="text-xl font-bold -mt-6">Your Artshop <span className="ml-4">2</span></h1>
      <ShopCard />
    </ProfileLayout>
  );
};

export default ShopPage;