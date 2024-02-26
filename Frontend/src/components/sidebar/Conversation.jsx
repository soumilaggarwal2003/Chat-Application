import useConversation from "../../zustand/useConversation";
const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-4 items-center hover:bg-green-500 rounded p-5 py-1 cursor-pointer ${
          isSelected ? "bg-green-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-7 justigy-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && (
        <div className="divider border-t-2 border-gray-500 my-0 mb-1 mx-3 py-0 h-1" />
      )}
      {/* <div className="divider border-t-2 border-gray-500 my-0 mb-1 mx-3 py-0 h-1 "></div> */}
    </>
  );
};

export default Conversation;
