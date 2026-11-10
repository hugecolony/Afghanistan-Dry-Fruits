import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <Link href={{ pathname: `/products/${product.ID}`, query: { ID: product?.ID } }}>
            <div className="group relative flex items-end justify-end overflow-hidden rounded-lg bg-gray-100 md:h-96">
                <Image
                    src={product?.Image}
                    width={500}
                    height={500}
                    alt="product image"
                    className="sticky inset-0 h-full object-cover transition duration-200 group-hover:scale-110"
                />
            </div>
            <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                            <div className="rounded-lg">
                                <p className="text-black font-extrabold">{product.Name}</p>
                            </div>
                            <div className="rounded-lg">
                                <p className="text-black font-extrabold text-xl">{product.Pushto}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
