import ChatBubbleWing from "./ChatBubbleWing";

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-5 max-w-[14.5rem] left-[1rem] p-4 px-8 bg-yellow-300/90 text-gray-600 rounded-t-xl rounded-bl-xl font-code text-base lg:top-10 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Една стъпка по- близо до правилният избор 🧹🧹
      <ChatBubbleWing   pathClassName="fill-yellow-300" className="absolute left-full bottom-0" />
    </div>
  );
};
