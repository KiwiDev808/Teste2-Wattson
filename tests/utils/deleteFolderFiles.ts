import fs from 'fs'
import path from 'path'

const directory = 'test'

export function deleteFolderFiles(folder: string) {
  fs.readdir(directory, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err
      })
    }
  })
}
