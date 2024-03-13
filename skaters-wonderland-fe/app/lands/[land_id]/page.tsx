"use client";
import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { BiSolidCommentAdd } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { patchLands, fetchLandById, addComment, deleteComment } from "@/utils";



//**** landsType
type SingleLandProps = {
  params: {
    land_id: string;
  };
};

interface LandSample {
  land_id: number;
  landname: string;
  city: string;
  country: string;
  postcode: string;
  description: string;
  created_at: Date;
  vote: number;
  safety_rating_total: number;
  safety_rating_count: number;
  safety_rating_ave: number;
  suitability_rating_total: number;
  suitability_rating_count: number;
  suitability_rating_ave: number;
  land_img_url: string;
  username: string;
  [key: string]: any;
}

//**** commentsType
interface CommentSample {
  comment_id: number;
  body: string;
  land_id: number;
  username: string;
  created_at: Date;
}

interface CommentResult {
  comments: CommentSample[];
}

const SingleLand = ({ params }: SingleLandProps) => {
  const [land, setLand] = useState<LandSample | null>(null);
  const [comments, setComments] = useState<CommentSample[]>([]);
  const [liked, setLiked] = useState(false);

  const [safetyRated1, setSafetyRated1] = useState(false);
  const [safetyRated2, setSafetyRated2] = useState(false);
  const [safetyRated3, setSafetyRated3] = useState(false);
  const [safetyRated4, setSafetyRated4] = useState(false);
  const [safetyRated5, setSafetyRated5] = useState(false);
  

  const [suitabilityRated1, setSuitabilityRated1] = useState(false);
  const [suitabilityRated2, setSuitabilityRated2] = useState(false);
  const [suitabilityRated3, setSuitabilityRated3] = useState(false);
  const [suitabilityRated4, setSuitabilityRated4] = useState(false);
  const [suitabilityRated5, setSuitabilityRated5] = useState(false);

  //add comment states
  const [adderCommentUsername, setAdderCommentUsername] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [showAddComment, setShowAddComment] = useState(false);
  
  
  
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetchLandById(params.land_id);
      const { land }: { land: LandSample } = res;
      setLand(land);

      const commentsRes = await fetch(
        `https://skaters-wonderland-be.onrender.com/api/lands/${params.land_id}/comments`
      );
      const { comments }: CommentResult = await commentsRes.json();
      setComments(comments);
    };

    fetchData();
  }, [params.land_id ]);

  const voteHandler = async () => {
    try {
      setLiked(!liked);
      await patchLands(Number(params.land_id), {
        votes_update: liked ? -1 : 1,

      });
    
    const res = await fetchLandById(params.land_id);
      const { land }: { land: LandSample } = res;
      setLand(land);

    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const landSafetyHandler = async (SR_update: number) => {
    try {
      setSafetyRated1(SR_update === 1);
      setSafetyRated2(SR_update === 2);
      setSafetyRated3(SR_update === 3);
      setSafetyRated4(SR_update === 4);
      setSafetyRated5(SR_update === 5);

      await patchLands(Number(params.land_id), {
        safety_rating_update: SR_update
      });
    
    const res = await fetchLandById(params.land_id);
      const { land }: { land: LandSample } = res;
      setLand(land);

    } catch (error) {
      console.error("Error updating safety rating:", error);
    }
  };

  const landSuitabilityHandler = async (suitability_update : number)=>{
    try {
      setSuitabilityRated1(suitability_update === 1);
      setSuitabilityRated2(suitability_update === 2);
      setSuitabilityRated3(suitability_update === 3);
      setSuitabilityRated4(suitability_update === 4);
      setSuitabilityRated5(suitability_update === 5);

      await patchLands(Number(params.land_id), {
        suitability_rating_update: suitability_update
      });
    
    const res = await fetchLandById(params.land_id);
      const { land }: { land: LandSample } = res;
      setLand(land);

    } catch (error) {
      console.error("Error updating safety rating:", error);
    }
  }

  const handleAddCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await addComment(params.land_id, {"body": commentBody, "username": adderCommentUsername})
      

      const commentsRes = await fetch(
        `https://skaters-wonderland-be.onrender.com/api/lands/${params.land_id}/comments`
      );
      const { comments }: CommentResult = await commentsRes.json();
      setComments(comments);

      setShowAddComment(false)

    } catch (error) {
      console.error("Error submitting form:", error);
    
    }
  };

  const handleDeleteComment = async (commentId: string)=>{

    try{
      await deleteComment(commentId)
      
      const commentsRes = await fetch(
        `https://skaters-wonderland-be.onrender.com/api/lands/${params.land_id}/comments`
      );
      const { comments }: CommentResult = await commentsRes.json();
      setComments(comments);

      setShowAddComment(false)

    } catch (error) {
      console.error("Error submitting form:", error);
    
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto mt-8 mb-4 ">
        <div className="mb-4">
          <img
            src={land && land.land_img_url ? land.land_img_url : ""}
            alt={land?land.landname:""}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div className=" p-6 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="font-bold mb-4 sm:text-lg md:text-xl lg:text-2xl ">
              {land?land.landname:""}
            </h1>
            <h3>suitability_rating_count : {land?land.safety_rating_count:""}</h3>
            <div className="">
              <span>{land?land.vote:""}</span>
              <button
                className={`btn p-0 m-3 hover:bg-blue-700 hover:text-white ${
                  liked ? "text-blue-500 bg-blue-300" : ""
                }`}
                onClick={voteHandler}
              >
                <AiOutlineLike  size={20}/>
              </button>
            </div>
          </div>

          <p className=" mb-4 sm:text-sm md:text-lg lg:text-xl">
            {land?land.description:""}
          </p>

          <div className="mb-3">
            <p className="sm:text-sm md:text-md lg:text-lg">Location</p>
            <p>
              {land?land.city:""}, {land?land.country:""}
            </p>
            <p>{land?land.postcode:""}</p>
          </div>
                
          <div className="grid grid-cols-2 gap-4">
            <div className=" border p-2 rounded-xl">
              <p className=" sm:text-xs md:text-sm lg:text-l">
                Safety : {land?land.safety_rating_ave:""}{" "}
              </p>
              <div className="border-t">
                <p className=" sm:text-xs md:text-sm ">
                  How would you rate the safety of this place?{" "}
                </p>
                <button onClick={() => landSafetyHandler(1)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  safetyRated1 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  1
                </button>
                <button onClick={() => landSafetyHandler(2)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  safetyRated2 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  2
                </button>
                <button onClick={() => landSafetyHandler(3)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  safetyRated3 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  3
                </button>
                <button onClick={() => landSafetyHandler(4)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  safetyRated4 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  4
                </button>
                <button onClick={() => landSafetyHandler(5)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  safetyRated5 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  5
                </button>
              </div>
            </div>

            <div className=" border p-2 rounded-xl">
              <p className=" sm:text-xs md:text-sm lg:text-l">
                Suitability : {land?land.suitability_rating_ave:""}{" "}
              </p>
              <div className="border-t ">  
                <p className=" sm:text-xs md:text-sm">
                  How would you rate the suitability of this place?{" "}
                </p>
                <button onClick={() => landSuitabilityHandler(1)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  suitabilityRated1 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  1
                </button>
                <button onClick={() => landSuitabilityHandler(2)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  suitabilityRated2 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  2
                </button>
                <button onClick={() => landSuitabilityHandler(3)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  suitabilityRated3 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  3
                </button>
                <button onClick={() => landSuitabilityHandler(4)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  suitabilityRated4 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  4
                </button>
                <button onClick={() => landSuitabilityHandler(5)} className={`btn p-1 m-1  hover:bg-blue-700 hover:text-white${
                  suitabilityRated5 ? "text-blue-500 bg-blue-300" : ""
                }`}>
                  5
                </button>
              </div>
            </div>
          </div>

          <div className=" border p-2 rounded-xl mt-2">
            <div className="border-b">
              <FaCommentDots />
            </div>

            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.comment_id} className="border-b">
                  <div className="flex items-center justify-between mb-1">

                    <h3 className="text-sm text-gray-500">
                      {comment.username}
                    </h3>
                    
                    <p className="text-sm text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString(
                        undefined,
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>

                    <button
                onClick={() => handleDeleteComment(comment.comment_id.toString())}
                className="m-1"
              >
                <MdDeleteForever />
              </button>
                    
                  </div>
                  <p className="text-sm">{comment.body}</p>
                </li>
              ))}
            </ul>
            {/* Add comment */}
            {showAddComment ? (
              <div className="container mx-auto mt-8">
                <form
                  id="addCommentForm"
                  onSubmit={handleAddCommentSubmit}
                  className="max-w-lg mx-auto"
                >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Please enter the username"
                    value={adderCommentUsername}
                    onChange={(event) => {
                      setAdderCommentUsername(event.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <input
                    type="text"
                    id="commentBody"
                    name="commentBody"
                    placeholder="Write some things"
                    value={commentBody}
                    onChange={(event) => {
                      setCommentBody(event.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 h-20 my-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add comment
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <button
                onClick={() => setShowAddComment(true)}
                className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <BiSolidCommentAdd />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleLand;
