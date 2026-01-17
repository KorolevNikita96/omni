import { processFlow } from "../services/flow.service.js"

export const services = (req, res) => {
  return processFlow(req, res, {
    isTestMode: false,
    subjectPrefix: "Услуги",
    contentPrefix: "Инструкция",
    sendWhatsApp: true,
    outsource: false
  })
}
