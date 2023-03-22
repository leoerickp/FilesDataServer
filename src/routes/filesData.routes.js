const { Router } = require("express");
const { check } = require("express-validator");
const { FilesDataController } = require("../controllers/filesData.controllers");
const { validTypeOfFile } = require("../helpers/valid-type-file");
const { ValidFields } = require("../middlewares/valid-fields.middleware");

const filesDataController = new FilesDataController();
const filesDataRoutes = Router();
filesDataRoutes.get('/', [
    check('fileName', 'fileName must not be empty').optional().custom(validTypeOfFile),
    ValidFields
], filesDataController.getFilesData);
module.exports = filesDataRoutes;

/**
* @openapi
* /files/data:
*     get:
*       tags:
*         - FilesData
*       description: Get all data from secret files list
*       operationId: filesData
*       parameters:
*       - $ref: '#/components/parameters/fileName'
*       responses:
*         '200':
*           description: Files list with their secret data
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/filesDataResponse'
*         '401':
*           description: Unauthorized
*         '400':
*           description: Bad Request
*      
* components:
*   parameters:
*     fileName:
*       name: fileName
*       in: query
*       description: Specific file data
*       required: false
*       schema:
*         type: string
*   schemas:
*     filesDataResponse:
*       type: array
*       items:
*         $ref: '#/components/schemas/fileData'
*     fileData:
*       type: object
*       properties:
*         file:
*           type: string
*         lines:
*           $ref: '#/components/schemas/data'
*     data:
*       type: object
*       properties:
*         text:
*           type: string
*         number:
*           type: string
*         hex:
*           type: string
*/