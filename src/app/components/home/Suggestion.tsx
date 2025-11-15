import classNames from "clsx";

const suggestion: string[] = [
  "All",
  "Traditional",
  "Modern",
  "Spicy",
  "Sweet",
  "Savory",
  "Quick & Easy",
  "Healthy",
  "Desserts",
  "Dinner",
];

export default function Suggestion() {
  const mapList = suggestion.map((item, index) => {
    return console.log(index + ". " + item);
  });

  console.log(mapList);
  return (
    <div>
      <div className="flex gap-4 justify-start items-start mt-3 w-full ">
        <ul className="flex justify-between w-full gap-4">
          {suggestion.map((list, i) => (
            <li
              className={classNames(
                "text-center border-1 border-primary-line bg-primary rounded-sm py-2 justify-center mx-auto w-full text-sm",
                {
                  "border-2 border-gradient-primary": list == "All",
                }
              )}
              key={i}
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
