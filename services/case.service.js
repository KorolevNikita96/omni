import { caseData, caseDataOmnidesk } from "../utils/messagesOmnidesk.js"

import { createCase } from "./omni.service.js"

export async function processCase(
  data,
  subjectPrefix,
  contentPrefix,
  waStatus,
  outsource
) {
  const message = outsource
    ? caseDataOmnidesk(data)
    : caseData(data, subjectPrefix, contentPrefix, waStatus)
  console.log("Создаём кейс...", JSON.stringify(message, null, 2))

  try {
    const newCase = await createCase(message)
    console.log("Кейс успешно создан:", newCase)
  } catch (err) {
    console.error("Ошибка при создании кейса:", err.message)
    throw err
  }
}
