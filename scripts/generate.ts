import fs from 'fs/promises'

interface YearMonthDay {
  year: number
  month: number
  day: number
}

export const ymd = (date: Date): YearMonthDay => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  }
}

const date = ymd(new Date())
const update = `${date.year} / ${date.month} / ${date.day}`

const yearStart = 2024
const yearPeriod = yearStart == date.year ? `${date.year}` : `${yearStart} - ${date.year}`

const content = `// Auto-generated file, don't modify.
export const LastUpdate = '${update}'
export const CopyrightYears = '${yearPeriod}'
`

await fs.writeFile('src/generated.ts', content, { encoding: 'utf8' })
