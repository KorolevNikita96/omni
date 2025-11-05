import { bitrixUrl } from "../config.js"

export const parseOutsource = (path) => {
  let data = decodeURIComponent(path)
  console.log("decoded data:", data)

  data = data.replace(/^[-/]?(outsourcing)\|?/, "").replace(/^\|/, "")
  console.log("data parse:", data)

  console.log("data:", JSON.stringify(data, null, 2))

  if (!data) {
    return {
      company: "",
      contactName: "",
      tid: "",
      contactPhone: "",
      productGroup: "",
      bitrixDiskOnLink: "",
      managerComment: "",
      payment: ""
    }
  }

  const fields = data.split("|")

  const [
    company = "",
    contactName = "",
    tid = "",
    contactPhone = "",
    productGroup = "",
    bitrixDiskOnLink = "",
    managerComment = "",
    payment = ""
  ] = fields

  const dealUrl = `${bitrixUrl}/crm/deal/details/${tid}/`

  return {
    company,
    contactName,
    tid,
    contactPhone,
    productGroup,
    bitrixDiskOnLink,
    managerComment,
    payment,
    dealUrl
  }
}
