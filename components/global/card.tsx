import { IconType } from "react-icons/lib";

interface ICard {
  title: string;
  icon: IconType;
  bodyContent?: React.ReactElement;
}

const Card: React.FC<ICard> = ({ title, icon: Icon, bodyContent }) => {
  return (
    <div className="w-full p-4 border rounded-md space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold">{title}</h1>
        <Icon size={20} />
      </div>
      {bodyContent}
    </div>
  );
};

export default Card;
