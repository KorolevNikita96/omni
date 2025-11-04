export const parseOutsource = (path) => {
  let data = decodeURIComponent(path)
  console.log("decoded data:", data)

  data = data.replace(/^[-\/]?(outsourcing)\|?/, "").replace(/^\|/, "")
  console.log("data parse:", data)

  console.log("data:", JSON.stringify(data, null, 2))

  if (!data) {
    return {
      company: "",
      contactName: "",
      contactPhone: "",
      productGroup: "",
      bitrixDiskOnLink: "",
      managerComment: ""
    }
  }

  const fields = data.split("|")

  const [
    company = "",
    contactName = "",
    contactPhone = "",
    productGroup = "",
    bitrixDiskOnLink = "",
    managerComment = ""
  ] = fields

  return {
    company,
    contactName,
    contactPhone,
    productGroup,
    bitrixDiskOnLink,
    managerComment
  }
}
