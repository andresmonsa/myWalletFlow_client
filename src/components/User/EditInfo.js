import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const EditUserInfo = () => {
  const userInfo = useSelector(state => state.logged)
  console.log(userInfo)
  const [form, setForm] = useState({
    name: userInfo.name,
    lastName: userInfo.lastName,
    mail: userInfo.mail,
    oldPassword: userInfo.password,
    newPassword: '',
    confirmNewPassword: ''
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Container className='mt-5'>
      <div>
        <Link to='/'>
          <h1> HOME</h1>
        </Link>
      </div>
      <Form className='mt-5'>
        <Form.Group className='mb-3' controlId='Name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='email' name='name' placeholder='Name' value={form.name} onChange={(e) => handleChange(e)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='Email'>
          <Form.Label value={form.mail}>Email address</Form.Label>
          <Form.Control type='email' name='mail' placeholder='Enter email' onChange={(e) => handleChange(e)} />
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

        <Button variant='primary' type='submit' className='mt-3'>
          Submit
        </Button>
      </Form>
    </Container>

  )
}

export default EditUserInfo
