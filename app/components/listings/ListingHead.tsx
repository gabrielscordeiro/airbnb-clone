'use client';

import { SafeUser } from "@/app/types";
import useCountries from "@/app/hooks/useCountries";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import HeartButton from "@/app/components/HeartButton";

interface ListingHeadProps {
    id: string;
    title: string;
    locationValue: string;
    imageSrc: string;
    currentUser?: SafeUser | null
}
const ListingHead = ({
     id,
     title,
     locationValue,
     imageSrc,
     currentUser
}: ListingHeadProps) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue);


    return (
        <>
            <Heading
                title={title}
                subTitle={`${location?.region}, ${location?.value}`}
            />
            <div className="relative w-full h-[60vh] overflow-hidden rounded-xl">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover w-full"
                />

                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ListingHead;