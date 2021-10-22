import { Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdAccountCircle } from 'react-icons/md'
import modalStyle from './UserModal.module.css'

const UserModal = ({ handleClose, show, closeSesion }) => {
  const userName = useSelector(state => state.logged.name)

  return (
    <Modal show={show} onHide={handleClose} className={modalStyle.modal}>
      <Modal.Header>
        <MdAccountCircle className={modalStyle.logo} />
        <Modal.Title>{userName}</Modal.Title>
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
