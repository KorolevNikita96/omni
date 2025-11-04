import { processFlow } from "../services/flow.service.js"

export const outsourcing = (req, res) => {
  return processFlow(req, res, {
    isTestMode: false,
    subjectPrefix: "Консалтинг",
    contentPrefix: "Получен Консалтинг ! WatsApp сообщение ",
    sendWhatsApp: false,
    outsource: true
  })
}
