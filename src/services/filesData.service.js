const { ExternalAPI } = require('../api/api-external')


class FilesDataService {
    async getFilesData() {
        try {
            const { data } = await ExternalAPI.get('/files');
            const { files } = data;
            const filesDataPromises = files.map((fileName) => this.getDataFile(fileName))
            const filesData = await Promise.all(filesDataPromises);
            return filesData.filter(fileData => fileData);
        } catch (error) {
            throw error;
        }
    }
    async getDataFile(file) {
        try {
            const { data } = await ExternalAPI.get(`/file/${file}`);
            const lines = data.split('\n');
            if (lines.length < 2) return;
            const fields = lines[0].split(',');

            const fileContentArray = lines.filter((line, index) => index > 0)
                .filter(line => line.split(',').length === fields.length)
                .map(line => line.split(','))
                .filter((line) => !(line[1] === '' || line[2] === '' || line[3] === ''))
                .map(line => fields.reduce((ac, field, index) =>
                    (index > 0) ? { ...ac, [field]: line[index] } : {}, {}));

            if (fileContentArray.length === 0) return;
            return { file, lines: fileContentArray };
        } catch (error) {
        }
    }
}
module.exports = {
    FilesDataService
}