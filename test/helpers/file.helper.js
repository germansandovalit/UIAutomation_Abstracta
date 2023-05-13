import * as fs from "fs"

class FileHelper {
    saveData(items){
        const fileName = this.#getFileName()
        const data = this.#getData(items)
        try {
            fs.writeFileSync(fileName, data)
        } catch (err) {
            console.error('Could not write file')
        }
    }

    #getData(items){
        let data = ``
        for (const item of items){
            for (const value of Object.values(item)){
                data += `${value}\n`
            }
            data += `\n`
        }
        return data
    }

    #getFileName(){
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
      
        return `data_${hours}${minutes}${seconds}.txt`;
    }
}

export default new FileHelper()