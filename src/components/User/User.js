import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import UserModal from './UserModal'
import style from './User.module.css'

const User = ({ closeSesion }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container>
      <Row>

        <Col xs={6} md={4} className={style.img}>
          <MdAccountCircle className={style.img} onClick={() => handleShow()} />

          <UserModal className={style.modal} handleClose={handleClose} show={show} closeSesion={closeSesion} />
        </Col>

      </Row>
    </Container>
  )
}

export default User
