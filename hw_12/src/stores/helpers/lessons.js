export const parseLessonsTeachersPairs = (pairs) => {
  return pairs.map((el) => {
    const separatorIndex = el.indexOf("-")
    return {
      lesson: el.slice(0, separatorIndex),
      teacher: el.slice(separatorIndex + 1),
    }
  })
}
