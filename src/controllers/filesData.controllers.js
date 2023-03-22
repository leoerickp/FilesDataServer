
const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const { FilesDataService } = require('../services/filesData.service');

const filesDataService = new FilesDataService();
class FilesDataController {

    async getFilesData(req, res = response) {
        const { fileName } = req.query;
        try {
            const resp = fileName ? [await filesDataService.getDataFile(fileName)] :
                await filesDataService.getFilesData();
            if (!resp) res.status(StatusCodes.BAD_REQUEST).json({ msg: `Error: file ${fileName} is not available` });
            res.json(resp);
        } catch (error) {
            res.status(StatusCodes.UNAUTHORIZED).json(error.message);
        }
    }
}
module.exports = {
    FilesDataController
}