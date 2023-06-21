import React from 'react'

import Us from "../../assets/images/us.webp";


export default function OurTeam() {
    return (
        <>
            <h3 className="text-4xl text-center font-bold px-24 2xl:text-5xl">Our Team</h3>
            <img
                src={Us}
                alt="us"
                className="w-11/12 rounded-xl m-auto mb-10 mt-10"
            />
        </>
    )
}