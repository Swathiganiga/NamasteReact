import react from 'react'
import ReactDOM from 'react-dom/client'

const Title =  ()=> <h2>First title compoenent</h2>


/**
 * A React element representing an h1 header with the text "react element".
 * @type {JSX.Element}
 */
const ele =<h1>react element</h1>

const Heading = () => (
    <>
        <Title />
        {ele}
        <h1 className='heading'>Hello react functional component</h1>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading />)