// 定義隨機亂碼
function sample (arry) {
  const index = Math.floor(Math.random() * arry.length)
  return arry[index]
}
function TrashTalkGenerator (options) {
  // 定義幹話有什麼
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單吧', '很容易吧', '很快吧', '很正常呀', '很難嗎?']

  // 判定職業隨機組合文字
  switch (options.job) {
    case 'engineer':
      return `工程師 ${sample(task[options.job])}  ,  ${sample(phrase)}`
    case 'designer':
      return `設計師 ${sample(task[options.job])}  ,  ${sample(phrase)}`
    case 'entrepreneur':
      return `創業家 ${sample(task[options.job])}  ,  ${sample(phrase)}`
  }
}
module.exports = TrashTalkGenerator
