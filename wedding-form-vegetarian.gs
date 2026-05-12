/**
 * 鄭兆翔 ♡ 楊涵予 婚禮訂餐表單 — 素食版本
 *
 * 使用方式：
 * 1. 前往 https://script.google.com 新增專案
 * 2. 將本檔內容貼入 Code.gs
 * 3. 執行 createWeddingFormVegetarian 函式並授權
 * 4. 於「執行紀錄」中取得表單網址
 */

function createWeddingFormVegetarian() {
  const form = FormApp.create('鄭兆翔 ♡ 楊涵予 婚禮訂餐（素食）');

  form.setTitle('鄭兆翔 ♡ 楊涵予 婚禮訂餐（素食）')
      .setDescription(
        '⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡\n\n' +
        '         Wedding Invitation\n' +
        '      ♡ 誠摯邀請您，共享這份美好 ♡\n\n' +
        '⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡⟡\n\n' +
        '📅 婚禮日期：2026 年 06 月 20 日\n' +
        '🕐 時間流程：\n' +
        '    10:40 - 11:00　今日份的美好，正式登場\n' +
        '    11:00 - 14:30　這一場午宴，專門款待快樂\n' +
        '    14:30 - 15:00　這一章溫柔落幕，下一章仍是美好\n\n' +
        '📍 地點：今鶴 Jinher ‧ 安平店\n' +
        '    臺南市中西區永華路一段 320 號\n\n' +
        '👗 Dress code：請享受任何顏色的穿搭，Be free, be creative!\n\n' +
        '🌿 本表單為「素食套餐」專用\n' +
        '為了讓當天用餐更順暢，請您協助填寫以下訂餐資訊 ♡\n' +
        '有你們的支持，日日都是好日\n' +
        'We sincerely invite you to come and share our love and joy.'
      )
      .setCollectEmail(false)
      .setAllowResponseEdits(true)
      .setConfirmationMessage(
        '♡ 感謝您完成訂餐 ♡\n\n' +
        '我們已收到您的素食餐點選擇，\n' +
        '期待在 2026.06.20 與您相見，\n' +
        '一起度過這個溫暖幸福的時刻。\n\n' +
        '— 兆翔 & 涵予'
      );

  // —— 基本資料 ——
  form.addPageBreakItem()
      .setTitle('✦ 貴賓資料 ✦')
      .setHelpText('請留下您的聯絡方式，方便我們與您聯繫');

  form.addTextItem()
      .setTitle('姓名')
      .setHelpText('請填寫您的大名')
      .setRequired(true);

  const phone = form.addTextItem()
      .setTitle('手機號碼')
      .setHelpText('請填寫 10 碼手機號碼（例：0912345678）')
      .setRequired(true);
  phone.setValidation(
    FormApp.createTextValidation()
      .requireTextMatchesPattern('^09\\d{8}$')
      .setHelpText('請輸入正確的手機格式')
      .build()
  );

  // —— 素食餐點選擇 ——
  form.addPageBreakItem()
      .setTitle('✦ 素食個人套餐 ✦')
      .setHelpText(
        '🌿 包場・素食個人套餐\n\n' +
        '⟡ 湯品 / 麵包（固定提供）\n' +
        '    ‧ 蕈菇濃湯\n' +
        '    ‧ 法式長棍麵包（2 塊）\n\n' +
        '⟡ 前菜（固定提供）\n' +
        '    ‧ 野菇薄餅（每人 1 片）\n\n' +
        '⟡ 主餐（固定提供）\n' +
        '    ‧ 牛肝菌蕈菇燉飯 / 義大利麵\n\n' +
        '⟡ 甜點（固定提供）\n' +
        '    ‧ 桂花釀茶凍\n\n' +
        '以下請依個人喜好挑選 ♡'
      );

  // 燉飯/義大利麵 二擇一
  form.addMultipleChoiceItem()
      .setTitle('⟡ 主餐型式（二擇一）')
      .setHelpText('牛肝菌蕈菇主餐請選擇您偏好的型式')
      .setChoiceValues([
        '牛肝菌蕈菇燉飯',
        '牛肝菌蕈菇義大利麵'
      ])
      .setRequired(true);

  // 主食擇一
  form.addMultipleChoiceItem()
      .setTitle('⟡ 主食（擇一）')
      .setHelpText('＊主餐選定後搭配主食')
      .setChoiceValues([
        '溫泉蛋',
        '綜合野菇'
      ])
      .setRequired(true);

  // 飲品擇一
  form.addMultipleChoiceItem()
      .setTitle('⟡ 飲品（擇一）')
      .setChoiceValues([
        '美式咖啡（冰）',
        '美式咖啡（熱）',
        '蜂蜜檸檬氣泡飲',
        '特調鮮奶茶（3 分糖 / 微冰）',
        '阿薩姆紅茶 — 無糖 / 冰',
        '阿薩姆紅茶 — 無糖 / 熱',
        '阿薩姆紅茶 — 3 分糖 / 冰',
        '阿薩姆紅茶 — 3 分糖 / 熱',
        '茉莉綠茶 — 無糖 / 冰',
        '茉莉綠茶 — 無糖 / 熱',
        '茉莉綠茶 — 3 分糖 / 冰',
        '茉莉綠茶 — 3 分糖 / 熱'
      ])
      .setRequired(true);

  // —— 其他資訊 ——
  form.addPageBreakItem()
      .setTitle('✦ 貼心提醒 ✦');

  form.addParagraphTextItem()
      .setTitle('飲食習慣 / 特殊需求')
      .setHelpText('如有過敏原或其他飲食需求（如全素、奶蛋素等），請在此告訴我們 ♡')
      .setRequired(false);

  form.addParagraphTextItem()
      .setTitle('想對新人說的話（選填）')
      .setHelpText('留下您的祝福，讓我們把這份美好一起帶進往後的日子 ♡')
      .setRequired(false);

  // —— 建立結果試算表 ——
  const ss = SpreadsheetApp.create('鄭兆翔 ♡ 楊涵予 婚禮訂餐（素食）- 回覆');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('✦ 素食表單建立完成 ✦');
  Logger.log('填寫網址：' + form.getPublishedUrl());
  Logger.log('簡短網址：' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('編輯網址：' + form.getEditUrl());
  Logger.log('回覆試算表：' + ss.getUrl());
}
