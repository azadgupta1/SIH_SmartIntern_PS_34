export default function InternshipCard({ job }) {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col h-auto min-h-[350px] max-h-[500px] md:min-h-[300px] md:max-h-[400px] w-full md:w-[350px] lg:w-[300px]">
      <div className="flex justify-between items-start flex-wrap">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded mt-2 md:mt-0">
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

      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-4">
        <button className="border border-orange-500 text-orange-500 px-3 py-1 rounded hover:bg-orange-50 w-full md:w-auto">
          View Details
        </button>
        <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 w-full md:w-auto">
          Apply Now
        </button>
      </div>
    </div>
  );
}
