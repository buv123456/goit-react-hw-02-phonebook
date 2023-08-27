import { FilterStyled } from './Filter.styled';

export function Filter({ onCnangeFilter, filter }) {
  return (
    <FilterStyled
      type="text"
      name="filter"
      onChange={e => onCnangeFilter(e.target.value)}
      onBlur={() => onCnangeFilter('')}
      value={filter}
      placeholder="add filter..."
    />
  );
}
