import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ICardContentSales {
  amount?: number;
  change?: number;
}
const CardContentSales: React.FC<ICardContentSales> = ({ amount, change }) => {
  const changeColor =
    change !== undefined && change >= 0 ? "text-green-500" : "text-red-500";

  const formattedAmount = amount?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col">
      <h2 className="text-xl md:text-2xl font-semibold">{formattedAmount}</h2>
      {change !== undefined ? (
        <span className={`flex items-center gap-2 text-xs ${changeColor}`}>
          {change >= 0 ? <FaChevronUp /> : <FaChevronDown />}
          {change >= 0 ? `${change}` : change}% em relação ao mês
        </span>
      ) : null}
    </div>
  );
};

export default CardContentSales;
