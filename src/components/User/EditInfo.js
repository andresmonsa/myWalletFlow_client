import { Link } from 'react-router-dom'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import EditInfo from './EditInfo.module.css'

const EditUserInfo = () => {
  const userInfo = useSelector(state => state.logged)
  const [form, setForm] = useState({
    name: userInfo.name,
    lastName: userInfo.lastName,
    email: userInfo.email,
    oldPassword: userInfo.password,
    newPassword: '',
    confirmNewPassword: ''
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Link to='/'>
          <h1> HOME</h1>
        </Link>
      </Row>

      <Row>
        <Col className='mt-5'>
          <Container>
            <ul className={EditInfo.card}>
              <MdAccountCircle className={EditInfo.avatar} />
              <li>{userInfo.name} {userInfo.lastName} </li>
              <li>{userInfo.email}</li>
            </ul>
          </Container>
        </Col>

        <Col xs={12} md={8}>
          <Form className='mt-5'>
            <Form.Group className='mb-3' controlId='Name'>
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' placeholder='Name' value={form.name} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name='lastName' placeholder='Name' value={form.lastName} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='Email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' name='mail' placeholder='Enter email' value={form.email} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='oldPassword'>
              <Form.Label>Old Password</Form.Label>
              <Form.Control type='password' name='oldPassword' placeholder='Old Password' onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control type='password' name='newPassword' placeholder='New Password' onChange={(e) => handleChange(e)} />
              {/* <Form.Text className='text-muted'>
            Confirm Password
          </Form.Text> */}
            </Form.Group>

            <Form.Group className='mb-3' controlId='confirmNewPassword'>
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type='password' name='confirmNewPassword' placeholder='Confirm New Password' onChange={(e) => handleChange(e)} />
              {/* <Form.Text className='text-muted'>
            Confirm Password
          </Form.Text> */}
            </Form.Group>

            <Button variant='primary' type='submit' className='mt-3' onClick={(e) => onSubmit(e)}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

    </Container>

  )
}

export default EditUserInfo
