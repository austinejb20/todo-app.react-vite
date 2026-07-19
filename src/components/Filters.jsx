export default function Filters({ currentFilter, setActiveFilter }) {
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="filters">
      {filterOptions.map((filter) => (
        <span
          key={filter.value}
          className={`filter ${currentFilter === filter.value ? "active" : ""}`}
          data-filter={filter.value}
          onClick={() => setActiveFilter(filter.value)}
        >
          {filter.label}
        </span>
      ))}
    </div>
  );
}
