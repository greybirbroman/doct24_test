import styles from './FilterBar.module.css';
import { useState } from 'react';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import { filterIcons } from '../../../utils/constants';
import { useLocalStorage } from '../../../utils/hooks/useLocalStorage';

const FilterBar = ({ list, handleFilter }) => {

  const [selectedUser, setSelectedUser] = useLocalStorage('selectedUser', '')

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
        onChange={() => setSelectedUser(selectedUser)}
        
      >
        <option value=''>Пользователь</option>
        {list.map((user) => (
          <option key={user.id} value={user.name} onClick={() => setSelectedUser(user.id)}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
