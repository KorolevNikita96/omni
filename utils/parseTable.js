export const parseTable = (path) => {
  let data = decodeURIComponent(path)

  data = data.replace(/^[-\/]?(table|)\|?/, "").replace(/^\|/, "")

  console.log("data:", JSON.stringify(data, 2, null))

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
