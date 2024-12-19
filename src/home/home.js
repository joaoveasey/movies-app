import React, { useEffect, useState } from 'react';
import welcomeGif from '../imgs/welcome-gif.gif'
import './home.css';
import AliceCarousel, {Link} from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';


const Home = () => {
    return (
        <div className="home">
            <div className='main'>
                <div className='main-image'>
                    <img src={welcomeGif} alt='Movies and popcorns' height={500} width={850} />
                </div>
                <div className='main-text'>
                    <h1>Welcome to the Movies App</h1>
                    <p>Discover the most popular and top-rated movies, perfect for your next movie night. Explore and enjoy!</p>
                </div>
            </div>
            <div className='carousel'>
                <AliceCarousel
                    mouseTracking
                    responsive={{
                        0: { items: 1 },  // Mostra 1 imagem em telas pequenas
                        768: { items: 3 }, // Mostra 3 imagens em telas médias
                        1024: { items: 5 } // Mostra 5 imagens em telas maiores
                    }}
                    controlsStrategy="responsive"
                >
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`}
                            alt={"Fight Club"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`}
                            alt={"The Godfather"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg`}
                            alt={"Jurassic Park"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/aXAByjBN8UhaYvotqRCwa5MsMGu.jpg`}
                            alt={"Scream"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg`}
                            alt={"Good Will Hunting"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg`}
                            alt={"Elite Squad"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/4rCzaZy5Qkvxh5xaVpHriXSLTgC.jpg`}
                            alt={"Jarhead"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/qNbMsKVzigERgJUbwf8pKyZogpb.jpg`}
                            alt={"Come and See"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg`}
                            alt={"Whiplash"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg`}
                            alt={"Scarface"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg`}
                            alt={"The Social Network"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/5P68by2Thn8wHAziyWGEw2O7hco.jpg`}
                            alt={"American Pie"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/fCNd4D6I6n1xZKUbZI6Hco28EQ0.jpg`}
                            alt={"Trainspotting"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/8KSDI7ijEv7QVZdIyrLw5Gnhhr8.jpg`}
                            alt={"Snatch"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg`}
                            alt={"Back to the Future"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/clq4So9spa9cXk3MZy2iMdqkxP2.jpg`}
                            alt={"The Nice Guys"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg`}
                            alt={"Pulp Fiction"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/fyy1nDC8wm553FCiBDojkJmKLCs.jpg`}
                            alt={"Cars 3"}
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/9050VGrYjYrEjpOvDZVAngLbg1f.jpg`}
                            alt={"Blair Witch"}
                        />
                    </Link>
                </AliceCarousel>
            </div>
        </div>
    )
}

export default Home