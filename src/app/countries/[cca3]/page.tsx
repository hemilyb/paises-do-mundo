"use client"
import Paragraph from "@/app/components/paragraph"
import { getCountry } from "@/app/services/api"
import { ArrowLeft, BookA, House, Shell, Users } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function Country() {
  const [country, setCountry] = useState<InfoCountry[]>([])

  const { cca3 } = useParams()

  useEffect(() => {
    getCountry(cca3).then(data => {
      setCountry(data)
    })
  }, [])

  return (
    <div className="bg-slate-100 pt-10 h-screen">
      {country.map((info) => (
        <div key={info.name.common}
          className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-8">
            {info.translations.por.common}
          </h2>
          <a href="/"
            className="flex gap-1 items-center">
            <ArrowLeft className="size-4 text-gray-700" />
            Voltar
          </a>
          <div className="bg-white justify-center rounded-3xl p-4 sm:p-14 sm:flex">
            <div className="flex flex-col space-y-4 sm:space-y-2 mb-2 w-full">
              <Paragraph
                IconComponent={<House />}
                info="Capital: "
                infoData={info.capital} />

              <Paragraph
                IconComponent={<Shell />}
                info="Continente: "
                infoData={info.continents} />

              <Paragraph
                IconComponent={<Users />}
                info="População: "
                infoData={info.population} />

              <div className="flex mb-4">
                <BookA className="size-6 text-gray-700" />
                <p>Línguas Faladas: </p>
              </div>
              {Object.entries(info.languages).map(([code, lang]) => (
                <div key={code}>
                  <button className="text-white bg-blue-700 rounded-3xl p-2 text-xs">
                    {lang}
                  </button>
                </div>
              ))}
            </div>

            <div>
              <img src={info.flags.png} alt={info.name.common}
                className="w-96 rounded-3xl sm:float-right sm:ml-14" />
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}