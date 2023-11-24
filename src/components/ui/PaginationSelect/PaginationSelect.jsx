import React from 'react';

const PaginationSelect = ({ pageSizeOptions, selectedPageSize, onSelectPageSize }) => {
  return (
    <div>
      <label htmlFor="pageSize">Show:</label>
      <select
        id="pageSize"
        value={selectedPageSize}
        onChange={(e) => onSelectPageSize(Number(e.target.value))}
      >
        {pageSizeOptions.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize === -1 ? 'All' : pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaginationSelect;