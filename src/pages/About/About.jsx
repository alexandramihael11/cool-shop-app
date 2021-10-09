import React from 'react';
import Layout from '../../components/Layout/Layout';

function About() {
    return(
        <div>
            <Layout>
            <div className="content-min-height container-fluid container-min-max-width
                d-flex flex-column justify-content align-items-center">
                <p>
                    <strong>CoOL SHOP</strong>
                </p>
                <p>Suntem CoOL SHOP. Probabil deja cunoști articolele noastre de îmbrăcăminte și accesoriile de modă. Istoria noastră a început în 1998 cu nota sol, care a devenit semnătura noastră. Sărbătorim stilul nostru unic invitându-i pe tinerii și tinerele din toată lumea să descopere melodia, energia și emoția CoOL - marca de modă care se mișcă în ritmul propriei sale melodii.
                Creăm mii de articole de îmbrăcăminte și accesorii în Romania și le distribuim exclusiv în magazinul nostru on-line inaugurat în 2021.</p>
               <p>Suntem conștienți de faptul că ceea ce îi face fericiți pe clienții noștri azi, mâine s-ar putea schimba, și de aceea analizăm constant ultimele tendințe, pentru a le transforma în look-ul perfect pentru fiecare ocazie.</p>
                </div>
            </Layout>
        </div>
    );
}

export default About;