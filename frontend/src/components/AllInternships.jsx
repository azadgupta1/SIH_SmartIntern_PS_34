import { useState, useMemo } from "react";
import { internships } from "../data";
import FilterSidebar from "./FilterSidebar";
import InternshipCard from "./InternshipCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Most Recent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // filtering + searching
  const filtered = useMemo(() => {
    return internships.filter((job) => {
      const textMatch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      if (!textMatch) return false;

      // For each filter section, at least one must match if any selected
      for (const [section, values] of Object.entries(filters)) {
        if (values.length === 0) continue;
        if (
          section === "Location" &&
          !values.some((v) => job.location.includes(v))
        )
          return false;
        if (section === "Field" && !values.includes(job.field)) return false;
        if (section === "Type" && !values.includes(job.type)) return false;
        if (section === "Duration" && !values.includes(job.duration))
          return false;
      }
      return true;
    });
  }, [search, filters]);

  // sorting
  const sorted = useMemo(() => {
    if (sort === "Highest Pay") {
      return [...filtered].sort((a, b) => b.salary - a.salary);
    }
    return filtered; // default Most Recent
  }, [filtered, sort]);

  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg my-4 sm:my-6 md:my-10 w-full max-w-7xl mx-auto">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
          />
        </svg>
        Filters ({Object.values(filters).flat().length})
      </button>

      <header className="border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">
          Find Your Perfect Internship
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Discover amazing opportunities to kickstart your career
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search internships, companies, or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-blue-500"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
          >
            <option>Most Recent</option>
            <option>Highest Pay</option>
          </select>
        </div>
      </header>

      <div className="flex flex-col md:flex-row relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          fixed md:static top-0 left-0 h-full md:h-auto w-80 md:w-64 lg:w-80
          bg-white z-50 md:z-auto shadow-lg md:shadow-none
          overflow-y-auto md:overflow-visible
        `}
        >
          <div className="p-4 md:p-0">
            <div className="flex items-center justify-between md:hidden mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>

        {/* Listings */}
        <section className="flex-1 p-2 sm:p-4 flex flex-col items-center">
          {sorted.length > 0 ? (
            sorted.map((job) => <InternshipCard key={job.id} job={job} />)
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-lg">
                No internships match your criteria.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilters({});
                  setIsSidebarOpen(false);
                }}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
