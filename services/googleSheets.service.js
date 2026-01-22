import { google } from "googleapis"
import { googleSpreadsheetId } from "../config.js"

const auth = new google.auth.GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
})
const sheets = google.sheets({ version: "v4", auth })

export async function appendToSheet(data) {
  const { payment, contactPhone, contactName, company } = data
  const range = "Sheet1!A1"

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: googleSpreadsheetId,
      range: range
    })

    const hasValues = response.data.values && response.data.values.length > 0

    if (!hasValues) {
      const headers = [["Дата", "Сумма", "Телефон", "Имя", "Компания"]]
      await sheets.spreadsheets.values.update({
        spreadsheetId: googleSpreadsheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        resource: { values: headers }
      })
    }

    const values = [
      [
        new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
        payment || "",
        contactPhone || "",
        contactName || "",
        company || ""
      ]
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: googleSpreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: { values }
    })

    console.log("Данные успешно добавлены в Google таблицу")
  } catch (error) {
    console.error("Ошибка при работе с Google таблицей:", error.message)
  }
}
