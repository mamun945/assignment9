
import PetDetails from "@/components/PetDetails";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5001/petsinfo/${id}`, {
    cache: "no-store",
  });

  const datas = await res.json()

  return (
    <div>
      <PetDetails datas={datas}></PetDetails>
    </div>
  );
};

export default PetDetailsPage;