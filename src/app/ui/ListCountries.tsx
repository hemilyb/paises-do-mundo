"use client"

import { useEffect, useState } from "react";
import { getCountries } from "../services/api";
import Link from "next/link";

export default function ListCountries() {

  const [countries, setCountries] = useState<InfoCountry[]>([])

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
    }).catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <div className="bg-slate-100 pt-10">
      <div className="flex flex-wrap gap-6 sm:px-32">
        {countries.map((country) => (
          <div key={country.name.common}
            className="flex flex-col items-center m-auto p-2 rounded bg-white text-center font-medium space-y-4 w-52 hover:scale-110 duration-200 hover:border">
            <Link href={`/countries/${country.cca3}`}>
              <img src={country.flags.png} alt={`Bandeira ${country.translations.por.common}`} />
              <h2>{country.translations.por.common}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}