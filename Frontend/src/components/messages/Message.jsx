const Message = () => {
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-green-500`}>
          Hi! How are you?
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
          12:42
        </div>
      </div>
    </div>
  );
};

export default Message;
