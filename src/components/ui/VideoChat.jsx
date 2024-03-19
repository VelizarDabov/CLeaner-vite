import ChatBubbleWing from "./ChatBubbleWing";

export const VideoChatMessage = () => {
    return (
      <div className="absolute top-3 bg-blue-200 left-[3.125rem] w-full max-w-[14rem] pt-3.5 pr-2.5 pb-7 pl-5 text-gray-700 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
       <p> Kликнете <a href="#gallery" className="text-blue-500 underline">тук</a>, за да разгледате нашата галерия.</p>
       
        <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-gray-500 uppercase">
          just now
        </p>
        <ChatBubbleWing
          className="absolute right-full bottom-0 -scale-x-100 "
          pathClassName="fill-blue-200"
        />
      </div>
    );
  };