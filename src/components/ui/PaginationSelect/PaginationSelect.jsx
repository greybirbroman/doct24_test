import styles from './PaginationSelect.module.css'

const PaginationSelect = ({ pageSizeOptions, selectedPageSize, onSelectPageSize }) => {
  return (
    <div>
      <select
        id="pageSize"
        value={selectedPageSize}
        onChange={(e) => onSelectPageSize(Number(e.target.value))}
        className={styles.pagination__select}
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