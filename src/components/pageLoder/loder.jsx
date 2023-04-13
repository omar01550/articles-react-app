import { useEffect } from 'react';
import './loder.css'

function Loder({ loading }) {

    useEffect(function () {
        console.log('loder render');
    }, [loading])

    return (

        <section class={loading ? "section-loading" : "section-loading hidden-loading"}>
            <div class="load"></div>
        </section>
    );
}

export default Loder;
