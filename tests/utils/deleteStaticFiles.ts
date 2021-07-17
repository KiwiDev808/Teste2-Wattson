import fs from 'fs'
import path from 'path'

export function deleteStaticFiles() {
  const folder = process.cwd() + '/static'
  fs.readdir(folder, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(folder, file), (err) => {
        if (err) throw err
      })
    }
  })
}
