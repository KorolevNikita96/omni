export const caseData = (data, subjectPrefix, contentPrefix, waStatus) => {
  return {
    case: {
      user_email: data.email,
      status: "open",
      content_type: "html",
      user_full_name: `${data.surname} ${data.firstName}`,
      subject: `${subjectPrefix}. ${
        data.company
      } - ${new Date().toLocaleDateString("ru-RU")}`,
      content: `Организация: ${data.company}
  Контакт: ${data.phone} ${data.contname}
  Категория: ${data.cat} ${data.role}
  Тариф: ${data.cleanTarif}
  ${contentPrefix ? contentPrefix + ": " : ""}${waStatus}
  Ссылка на заявку: ${data.dealUrl}
  ${data.gs1 === "Да" ? "🌐 Регистрация в ГС1!" : ""}
  ${data.comment ? "❗ Комментарий: " + data.comment : ""}`
    }
  }
}

// company,
//   contactName,
//   tid,
//   contactPhone,
//   productGroup,
//   bitrixDiskOnLink,
//   managerComment,
//   payment,
//   dealUrl

export const caseDataOmnidesk = (data) => {
  return {
    case: {
      user_email: "vmarchenko@getmark.ru",
      status: "open",
      content_type: "html",
      user_full_name: `${data.contactName} ${data.contactPhone}`,
      subject: `🚨🚨🚨 Консалтинг 🚨🚨🚨. ${
        data.company
      } - ${new Date().toLocaleDateString("ru-RU")}`,
      content: `
🏢 Организация: ${data.company},
👤 Контакт: ${data.contactName},
📞 Телефон: ${data.contactPhone},
🔗 Ссылка от менеджера: ${data.bitrixDiskOnLink},
💳 Оплата: ${data.payment},
🧾 Ссылка на заявку: ${data.dealUrl},
${data.managerComment ? `📝 Комментарий: ${data.managerComment}` : ""}
      `.trim()
    }
  }
}
