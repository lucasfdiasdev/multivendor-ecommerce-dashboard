import { Input } from "@/components/global/input";

interface ISearch {
  placeholder?: string;
  searchValue: string;
  setParPage: (value: number) => void;
  setSearchValue: (value: string) => void;
}

const Search: React.FC<ISearch> = ({
  setParPage,
  placeholder,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className="flex items-center justify-between">
      <select
        onChange={(e) => setParPage(parseInt(e.target.value))}
        className="px-4 py-2 hover:border-indigo-500 outline-none bg-transparent border rounded-md cursor-pointer"
      >
        <option value="5">5</option>
        <option value="5">15</option>
        <option value="5">25</option>
      </select>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        className="max-w-fit"
      />
    </div>
  );
};

export default Search;
