const Conversation = () => {
  return (
    <>
      <div className="flex gap-4 items-center hover:bg-green-500 rounded p-5 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-7 justigy-between">
            <p className="font-bold text-gray-200">Soumil Aggaral</p>
            <span className="text-xl">🧡</span>
          </div>
        </div>
      </div>
      <div className="divider border-t-2 border-gray-500 my-0 mb-1 mx-3 py-0 h-1 "></div>
    </>
  );
};

export default Conversation;
