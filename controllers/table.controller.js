import { appendToSheet } from "../services/googleSheets.service.js"
import { parseTable } from "../utils/parseTable.js"

export const tableController = async (req, res) => {
  try {
    const data = parseTable(req.path)

    if (!data) {
      return res.status(400).json({ error: "Пустые данные" })
    }

    console.log("Данные для таблицы:", data)

    const dateNow = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow"
    })

    const row = [
      dateNow,
      data.company,
      data.contact,
      data.description,
      data.responsible,
      data.amount
    ]

    await appendToSheet(row)

    return res.status(200).json({ status: "success", data: row })
  } catch (error) {
    console.error("Controller Error:", error.message)
    return res.status(500).json({ error: error.message })
  }
}
