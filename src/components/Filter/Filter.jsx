export function Filter({ onCnangeFilter, filter }) {
  return (
    <input
      type="text"
      name="filter"
      onChange={e => onCnangeFilter(e.target.value)}
      onBlur={() => onCnangeFilter('')}
      value={filter}
    />
  );
}
