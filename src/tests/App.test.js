import { render } from '@testing-library/react'
import App from '../App.js'

test('renders front end page with no error message', () => {
    render(<App />)
})
