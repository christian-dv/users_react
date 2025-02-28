import { useState, useEffect } from 'react';
import { UserModal } from './UserModal';
import { UserSearch } from './UserSearch';

export const UserTable = () => {
  // Estados para manejar los usuarios y la búsqueda
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState('');
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Petición a la API de usuarios
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      }).catch(error => console.error("Error: "+error));
  }, []);

  // Manejo de la búsqueda
  const handleSearch = (value) => {
    const lowercasedValue = value.toLowerCase();
    setSearch(lowercasedValue);
    setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(lowercasedValue)));
    setCurrentPage(1); // Reinicia la paginación cuando se busca
  };

  // Cálculo de paginación
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      {/* Sección fija para el título y el input */}
      <div className="fixed-header w-100">
        <h2 className="text-center mt-3 mb-3 animated-title">User List</h2>
         {/* Uso del componente UserSearch */}
         <UserSearch search={search} onSearchChange={handleSearch} />
      </div>

      {/* Contenedor de la tabla */}
      <div className="table-responsive">
        <table className="table table-hover text-center">
            <thead className="table-info">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.company.name}</td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => setSelectedUser(user)}>
                       <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-results">No users found with the name provided!!</td>
                </tr>
              )}
            </tbody>
        </table>
      </div>

      {/* Paginador */}
      {filteredUsers.length > usersPerPage && (
        <nav>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Modal de detalle de usuario */}
      {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};
