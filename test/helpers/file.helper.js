import * as fs from "fs"

class FileHelper {
    saveData(filename, data){
        fs.writeFile(filename, data, (error) => {
            if (error){
                console.error(error)
                throw error
            }
            console.log('data written')
        })
    }
}

export default new FileHelper()