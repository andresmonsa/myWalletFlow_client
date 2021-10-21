import { Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import modalStyle from './UserModal.module.css'
const UserModal = ({ handleClose, show, closeSesion }) => {
  return (
    <Modal show={show} onHide={handleClose} className={modalStyle.modal}>
      <Modal.Header>
        <Modal.Title>Account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Link to='/Edit'>

          <Row className={modalStyle.li}>Edit info</Row>
        </Link>
        <Row className={modalStyle.li} onClick={() => closeSesion()}>Close Sesion</Row>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  )
}

export default UserModal
