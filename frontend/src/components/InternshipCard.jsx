export default function InternshipCard({ job }) {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col md:flex-row items-center justify-between w-full mb-3">
      {/* Left Section - Job Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
            {job.type}
          </span>
        </div>
        <p className="text-sm text-gray-600">{job.company}</p>

        <div className="text-sm text-gray-500 mt-1">
          {job.location} • {job.duration}
        </div>
        <p className="text-gray-400 text-sm">{job.posted}</p>

        <p className="text-orange-600 font-semibold mt-2">
          {job.currency}
          {job.salary}/month
        </p>

        <p className="text-gray-600 text-sm mt-2 line-clamp-1">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex gap-3 mt-4 md:mt-0 md:ml-6">
        <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50">
          View Details
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Apply Now
        </button>
      </div>
    </div>
  );
}
