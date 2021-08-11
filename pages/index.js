import { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dita's Birthday</title>
        <link rel="icon" href="/our-photo.jpeg" />
      </Head>
      <main>
        <div className="our-photo">
          <img className="our-photo" src="/our-photo.jpeg" alt="ditas-photo" />
        </div>
        <h1 className="title">
          Happy 26<sup>th</sup> Birthday!
        </h1>
        <h4>
          It seems that everyone knows you turned a year older except me. In my
          eyes, you are exactly the way that you were when I met you for the
          first time – stunning and gorgeous. Happy birthday my love
        </h4>
        <div className="footer">
          <p>Hancrafted with ♥ by Kretawiweka</p>
        </div>
      </main>
    </Fragment>
  );
}
