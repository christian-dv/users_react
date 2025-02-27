import PropTypes from 'prop-types'; // Usado para definir los tipos de las props

export const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">Detalle de usuario</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Correo Electrónico:</strong> {user.email}</p>
              <p><strong>Telefono:</strong> {user.phone}</p>
              <p><strong>Sitio Web:</strong> {user.website}</p>
              <p><strong>Compañía:</strong> {user.company.name}</p>
              <p><strong>Direccion:</strong> {user.address.street}, {user.address.city}</p>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Definir los tipos de las props
// Necesario para evitar errores en tiempo de ejecución
UserModal.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};
