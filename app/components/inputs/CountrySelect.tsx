'use client';

import Select from 'react-select';
import useCountries from "@/app/hooks/UseCountries";

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value:CountrySelectValue) => void;
}

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
    const { getAll } = useCountries();

    return (
        <div>

        </div>
    )
}

export default CountrySelect;