const Card = ({ icon, title, description }) => {
    return (
        <div className="hover:scale-105 mb-5">
  <div className="max-w-xs rounded-lg overflow-hidden shadow-md m-4 bg-white ">
        <div className="flex items-center justify-center p-4 bg-gray-100 ">
          <span className="text-4xl">{icon}</span>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
        </div>
    
    );
  };
  
  export default Card;