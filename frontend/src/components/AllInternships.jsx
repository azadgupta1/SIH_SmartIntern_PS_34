import { useState, useMemo } from "react";
import { internships } from "../data";
import FilterSidebar from "./FilterSidebar";
import InternshipCard from "./InternshipCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Most Recent");

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
    <div className="bg-white p-6 rounded-xl shadow-lg my-10 w-full max-w-7xl">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Find Your Perfect Internship</h1>
        <p className="text-gray-600">
          Discover amazing opportunities to kickstart your career
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search internships, companies, or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded px-4 py-2 focus:outline-blue-500"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option>Most Recent</option>
            <option>Highest Pay</option>
          </select>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Listings */}
        <section className="flex-1 p-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {sorted.length > 0 ? (
            sorted.map((job) => <InternshipCard key={job.id} job={job} />)
          ) : (
            <p className="text-gray-500">No internships match your criteria.</p>
          )}
        </section>
      </div>
    </div>
  );
}
