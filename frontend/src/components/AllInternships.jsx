import { useState, useEffect, useMemo } from "react";

export default function InternshipTable() {
  const [internships, setInternships] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/internships");
        const data = await res.json();
        setInternships(data);
      } catch (err) {
        console.error("Failed to fetch internships", err);
      }
    };
    fetchData();
  }, []);

  // Search filter
  const filtered = useMemo(() => {
    return internships.filter((job) => {
      const text = search.toLowerCase();
      return (
        job.title.toLowerCase().includes(text) ||
        job.companyName.toLowerCase().includes(text) ||
        job.location.toLowerCase().includes(text) ||
        (job.skillsNeeded || "").toLowerCase().includes(text)
      );
    });
  }, [search, internships]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg my-8 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          View and Apply Internship
        </h1>
        <input
          type="text"
          placeholder="Search internships..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 text-sm w-64 focus:outline-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-800 text-white text-left">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Skills Needed</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((job, idx) => (
                <tr
                  key={job.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3 font-medium">{job.title}</td>
                  <td className="px-4 py-3">{job.companyName}</td>
                  <td className="px-4 py-3">{job.location}</td>
                  <td className="px-4 py-3">{job.category || "—"}</td>
                  <td className="px-4 py-3">
                    {Array.isArray(job.skillsNeeded)
                      ? job.skillsNeeded.join(", ")
                      : job.skillsNeeded}
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm">
                      Apply
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 text-lg"
                >
                  No internships found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
