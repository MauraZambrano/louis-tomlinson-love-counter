import React, { useEffect, useState } from 'react';

import LouisTomlinsonGif1 from '../../images/louis.gif';
import LouisTomlinsonGif2 from '../../images/louis2.gif';
import LouisTomlinsonGif3 from '../../images/louis3.gif';
import LouisTomlinsonGif4 from '../../images/louis4.gif';
import LouisTomlinsonGif5 from '../../images/louis5.gif';

const LOUIS_TOMLINSON_GIF = [
    LouisTomlinsonGif1,
    LouisTomlinsonGif2,
    LouisTomlinsonGif3,
    LouisTomlinsonGif4,
    LouisTomlinsonGif5,
];

export default function Search() {
    const [times, setTimes] = useState(0);
    const [louisTomlinsonPhoto, setLouisTomlinsonPhoto] = useState(randomLouisTomlinsonPhoto());

    useEffect(() => {
        const love = localStorage.getItem('louistomlinsonlove');

        setTimes(+love || 0);
    }, []);

    function loveLouisTomlinson() {
        setTimes(times + 1);
        localStorage.setItem('louistomlinsonlove', times);
        setLouisTomlinsonPhoto(randomLouisTomlinsonPhoto());
    }

    function hateLouisTomlinson() {
        setTimes(times - 1 < 0 ? 0 : times - 1);
        localStorage.setItem('louistomlinsonlove', times);
        setLouisTomlinsonPhoto(randomLouisTomlinsonPhoto());
    }

    function removeLouisTomlinsonLove() {
        setTimes(0);
        localStorage.setItem('louistomlinsonlove', 0);
        setLouisTomlinsonPhoto(randomLouisTomlinsonPhoto());
    }

    function randomLouisTomlinsonPhoto() {
        const index = Math.floor(Math.random() * LOUIS_TOMLINSON_GIF.length);

        return LOUIS_TOMLINSON_GIF[index];
    }

    return (
        <section style={{ width: '100vw',}}>
            <figure style={{ height: '300px', maxWidth: '100vw' }}>
                <img src={louisTomlinsonPhoto} style={{ maxWidth: '100vw' }} height="300" alt="" />
            </figure>
            <h1>Maura Ama {times} veces a Louis Tomlinson</h1>
            <button onClick={loveLouisTomlinson}>
                Amar otra Vez
            </button>
            <button onClick={hateLouisTomlinson}>
                Odiar
            </button>
            <button onClick={removeLouisTomlinsonLove}>
                Reset
            </button>
        </section>
    );
}