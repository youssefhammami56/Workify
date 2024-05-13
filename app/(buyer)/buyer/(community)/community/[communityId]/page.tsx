import { ComunityUser } from "../_componets/comunity-users";
import ComunityPostList from "../_componets/comunity-posts-list";
import Message from "../_componets/message";

import { UsersSidebar } from "../_componets/users-sidebar";
import  ComunityList  from "../_componets/list-comunity";
import { getPostsInCommunity } from "@/actions/get-posts-comunity-id";
import { getCommNameByid } from "@/actions/getCommunityName";
import { DialogDemo } from "@/app/landingpage/createcommunitybtn";
import { getAllCommunity } from "@/actions/get-all-community";
const Page = async (params: {
  params: {
    communityId: string;
  };
}) => {
  const extractedComunityIdandPostId = params.params.communityId.split("post");
  const comunityId = extractedComunityIdandPostId[0];
  const postId = extractedComunityIdandPostId[1];
  const posts = await getPostsInCommunity(comunityId);
  const communityName = await getCommNameByid(comunityId);
  const comunity = await getAllCommunity();
  return (
    <div className="max-h-full w-full">
      <div className="flex justify-between h-full w-full ">
        <div className="w-full ">
          <div className="flex flex-row items-center  ml-4 justify-between">
            {/* <CommunityHeader commName={communityName!} /> */}
            <UsersSidebar communityId={comunityId!} />
          </div>

          <div className="border-b-2 mr-7 ml-6"></div>
          <div className="flex flex-col bg-gray-100 ">
            <div className="flex h-full">
              <div>
                <DialogDemo />

                <ComunityList comunity={comunity} />
              </div>
              <div className="flex flex-col w-full px-6  space-y-2 bg-white">
                {/* <CommunitySearchProblem /> */}

                <div className="bg-gray-100 h-[580px] overflow-y-auto p-4 rounded-lg">
                  {posts.length === 0 && (
                    <div className="text-gray-500 my-auto flex mx-auto">
                      No posts yet in this community
                    </div>
                  )}
                  <ComunityPostList posts={posts} postId={postId} />
                </div>

                <Message communityId={comunityId!} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <ComunityUser communityId={comunityId} />
        </div>
      </div>
    </div>
  );
};
export default Page;
