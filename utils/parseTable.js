export const parseTable = (path) => {
  let data = decodeURIComponent(path)

  data = data.replace(/^[-\/]?(table)\|?/, "").replace(/^\|/, "")

  if (!data) return null

  const fields = data.split("|")

  const [
    company = "",
    name = "",
    phone = "",
    description = "",
    responsible = "",
    amount = ""
  ] = fields

  return {
    company,
    contact: `${name}:${phone}`,
    description,
    responsible,
    amount
  }
}
