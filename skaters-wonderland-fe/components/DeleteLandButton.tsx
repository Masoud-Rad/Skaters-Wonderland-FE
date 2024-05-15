
import { deleteLand } from "@/utils";
import { useRouter } from "next/router";
import { RiDeleteBin5Line } from "react-icons/ri";


const DeleteLandButton = ({ landId }: { landId: string }) => {

  const router = useRouter();


  const handleDeleteLand = async () => {
    try {
      await deleteLand(landId);
      router.push("/lands"); // Navigate to the "/lands" page after successful deletion
    } catch (error) {
      console.error("Error deleting land:", error);
    }
  };

  return (
    
      <button
              onClick={handleDeleteLand}
              className={`btn p-0 m-3 border-cyan-700 hover:bg-red-700 hover:text-white`}
            >
              <RiDeleteBin5Line size={20} />
            </button>
  );
};

export default DeleteLandButton;