import PropTypes from 'prop-types'; // Usado para definir los tipos de las props

export const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">User Details</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body d-flex">
              <div className="mx-3">
                      <img width="250px" src={`https://robohash.org/${user.name}`} alt="Avatar" className="img-fluid" />
              </div>
              <div className="flex-grow-1">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Website:</strong> {user.website}</p>
                  <p><strong>Company:</strong> {user.company.name}</p>
                  <p><strong>Adress:</strong> {user.address.street}, {user.address.city}</p>
              </div>
              
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Definir los tipos de las props
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
