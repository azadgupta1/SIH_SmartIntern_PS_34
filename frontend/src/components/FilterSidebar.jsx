export default function FilterSidebar({ filters, setFilters }) {
  const filterOptions = {
    Location: ["Remote", "New York", "San Francisco", "London", "Berlin"],
    Field: [
      "Software Development",
      "Design",
      "Marketing",
      "Data Science",
      "Finance",
    ],
    Type: ["Paid", "Unpaid", "Stipend"],
    Duration: ["3 months", "6 months", "12 months", "Flexible"],
  };

  // handle checkbox toggle
  const handleCheckbox = (section, value) => {
    setFilters((prev) => {
      const prevArr = prev[section] || [];
      const exists = prevArr.includes(value);

      return {
        ...prev,
        [section]: exists
          ? prevArr.filter((v) => v !== value) // remove if already selected
          : [...prevArr, value], // add if not selected
      };
    });
  };

  return (
    <aside className="w-full lg:w-64 p-4 border-r space-y-6 bg-white">
      {Object.entries(filterOptions).map(([section, items]) => (
        <div key={section}>
          <h2 className="font-semibold text-gray-700 mb-2">{section}</h2>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters[section]?.includes(item) || false}
                  onChange={() => handleCheckbox(section, item)}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="text-gray-600">{item}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
