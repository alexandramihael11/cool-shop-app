import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

function Page404() {
    return(
        <div>
            <Layout>
             <div className="cart-page content-min-height container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                        <p className="h3">Pagina inexistenta!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
            </div>
        </Layout>
        </div>
    )
}

export default Page404;