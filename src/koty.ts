import { regularUseKanji as kanji } from '~/assets/kanji'

const getRandomKanji = (kanji: string) => {
  return kanji[Math.floor(Math.random() * kanji.length)]
}
const getOlympicYearKanji = () => {
  return Math.random() < 0.9 ? '金' : Math.random() < 0.5 ? '銀' : '銅'
}
const isOlympicYear = (year: number) => {
  return year % 4 === 0
}
const getKanjiOfTheYear = (kanji: string, year: number) => {
  if (isOlympicYear(year) && Math.random() < 0.5) {
    return getOlympicYearKanji()
  }
  return getRandomKanji(kanji)
}
export const getKotyList = (startYear: number, span: number) => {
  let list = []
  let year = startYear
  const endYear = startYear + span
  while (year < endYear) {
    list.push([year, getKanjiOfTheYear(kanji, year)])
    year++
  }
  return list
}
