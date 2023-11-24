import styles from './FilterBar.module.css';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import { filterIcons } from '../../../utils/constants';

const FilterBar = ({ list, selectedUser }) => {
  return (
    <div className={styles.filterBar}>
      <ul className={styles.filterBar__icons}>
        {filterIcons.map((item) => (
          <li key={item.id}>
            <ButtonWithIcon children={item.icon} />
          </li>
        ))}
      </ul>
      <select
        className={styles.filterBar__select}
        id='filter'
        value={selectedUser}
      >
        <option value=''>Пользователь</option>
        {list.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
