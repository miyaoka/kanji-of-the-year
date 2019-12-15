import { getKotyList } from './koty'

const main = () => {
  const app = document.getElementById('app')
  if (!app) return

  const nextYear = new Date().getFullYear() + 1
  const list = getKotyList(nextYear, 20)
    .map(([year, kanji]) => `<tr><td>${year}年</td><td>${kanji}</td></tr>`)
    .join('\n')

  const text = `<table><tr><th>年</th><th>漢字</th></tr>${list}</table>`
  app.innerHTML = text
}

main()
