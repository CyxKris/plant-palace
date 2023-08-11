import './404.css';

import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <section className='error-page-message'>
                <h1>404 Error <br /> Page Not Found</h1>
                <Link to="/">GO BACK TO HOME PAGE</Link>
            </section>
        </>
    );
}
export default Error;