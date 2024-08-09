import { useState, useEffect } from 'react';
import axios from 'axios';



const useUserData = () => {


  
const columnFields = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name', enableSearch: true },
    { value: 'email', label: 'Email', enableSearch: true },
    { value: 'username', label: 'Username' },
    { value: 'phone', label: 'Phone' },
    { value: 'website', label: 'Website' },
  ];

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [sortColumn, setSortColumn] = useState(columnFields[0].value);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: users } = await axios.get('/api/v1/users');
        setUsers(users);
        setFilteredUsers(users); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    const filterAndSortUsers = () => {
      let filtered = users.filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(searchName.toLowerCase()) &&
          user.email
            .toLowerCase()
            .includes(searchEmail.toLowerCase())
      );

      if (sortColumn) {
        filtered.sort((a, b) => {
          const x = a[sortColumn];
          const y = b[sortColumn];
          if (x < y) return sortDirection === 'asc' ? -1 : 1;
          if (x > y) return sortDirection === 'asc' ? 1 : -1;
          return 0;
        });
      }

      setFilteredUsers(filtered);
    };

    filterAndSortUsers();
  }, [users, searchName, searchEmail, sortColumn, sortDirection]);

  const handleOnSearch = (event) => {
    let { name, value } = event.target;

    if (name === 'name') {
      name = 'searchName';
    } else if (name === 'email') {
      name = 'searchEmail';
    } else {
      throw new Error('Unknown search element');
    }

    setSearchName(value); 
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection((prevState) =>
        prevState === 'asc' ? 'desc' : 'asc'
      );
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return {
    filteredUsers,
    columnFields,
    handleOnSearch,
    handleSort,
    sortColumn,
    sortDirection,
  };
};

export default useUserData;
