import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogged } from '../../redux/actions/userActions'
import { login } from '../functions/Index'
import SignUp from '../SignUp/SignUp'
import { toastCustom } from '../common/toastify'
import { validate } from '../functions/formValidate'

const Login = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [modalShow, setModalShow] = useState(false)
  const [error, setError] = useState({})

  const onChange = (e) => {
    validate(e.target.value, e.target.name, setError)
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    login(form)
      .then(res => {
        dispatch(setLogged(res))
      })
      .catch(e => toastCustom('ups! something went wrong! ', 'error', 4000, 'bottom-right'))
  }
  const handleClose = () => setModalShow(false)

  const addModalShow = () => setModalShow(true)

  return (
    <>
      <Container className='mt-5'>
        <Form onChange={(e) => { onChange(e) }}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Email...' name='email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password' name='password' />
          </Form.Group>
          {form.email === '' || form.password === '' || error.email || error.password
            ? (
              <Button variant='primary' type='submit' disabled onClick={(e) => onSubmit(e)}>
                Login
              </Button>
              )
            : (
              <Button variant='primary' type='submit' onClick={(e) => onSubmit(e)}>
                Login
              </Button>
              )}

          <hr />
          <Form.Label>For got your password?</Form.Label>
        </Form>
      </Container>
      <Container className='text-center'>
        <Button variant='success' onClick={() => { addModalShow() }}>
          Sign Up
        </Button>
        <SignUp handleClose={handleClose} modalShow={modalShow} />
      </Container>
    </>
  )
}
export default Login
