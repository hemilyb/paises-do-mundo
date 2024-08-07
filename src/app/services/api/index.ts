export async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const countries = await res.json()
    return countries
  } catch (err) {
    console.log(err)
  }
}

export async function getCountry(cca3: string | string[]) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
    const country = await res.json()
    return country
  } catch (err) {
    console.log(err)
  }
}