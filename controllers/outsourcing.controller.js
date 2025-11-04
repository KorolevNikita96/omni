import { processFlow } from "../services/flow.service.js"

export const outsourcing = (req, res) => {
  return processFlow(req, res, {
    isTestMode: false,
    subjectPrefix: "Аутсорсинг",
    contentPrefix: "Получен аутсорсинг ! WatsApp сообщение ",
    sendWhatsApp: false,
    outsource: true
  })
}
