import React from "react";
import Link from "next/link";
export default function NotFound(){
    return (
        <main className="text-center">
            <h2 className="text-3xl">There was a problem .</h2>
            <p> We couldnt find the page you looking for</p>
            <p> go to the <Link href={"/products"}></Link></p>
            
        </main>
    )
}