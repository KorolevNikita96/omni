import { google } from "googleapis"
import { googleSpreadsheetId } from "../config.js"

const auth = new google.auth.GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
})
const sheets = google.sheets({ version: "v4", auth })

async function getFirstSheetName(spreadsheetId) {
  const meta = await sheets.spreadsheets.get({
    spreadsheetId
  })
  return meta.data.sheets[0].properties.title
}

export async function appendToSheet(rowValues) {
  try {
    const sheetName = await getFirstSheetName(googleSpreadsheetId)
    const range = `${sheetName}!A1`

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: googleSpreadsheetId,
      range: range
    })

    const hasValues = response.data.values && response.data.values.length > 0

    if (!hasValues) {
      const headers = [
        ["Дата", "Компания", "Контакт", "Описание ТЗ", "Ответственный", "Сумма"]
      ]
      await sheets.spreadsheets.values.update({
        spreadsheetId: googleSpreadsheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        resource: { values: headers }
      })
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: googleSpreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: { values: [rowValues] }
    })

    console.log("Данные успешно добавлены в Google таблицу")
  } catch (error) {
    console.error("Ошибка при работе с Google таблицей:", error.message)
  }
}
