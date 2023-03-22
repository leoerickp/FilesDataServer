const { FilesDataService } = require("../../src/services/filesData.service");
const { ExternalAPI } = require('../../src/api/api-external');

const filesDataService = new FilesDataService();
describe('FilesDataService testing', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getFilesData testing', () => {
        test('should call to getFilesData()', async () => {
            jest.spyOn(ExternalAPI, 'get').mockImplementation(() => ({ data: FILES }));
            const fn = jest.spyOn(filesDataService, 'getDataFile');
            await filesDataService.getFilesData();
            const { files } = FILES;
            files.map(file => expect(fn).toHaveBeenCalledWith(file));
        });
    });

    describe('getDataFile testing', () => {
        test('should be undefined with a empty file', async () => {
            jest.spyOn(ExternalAPI, 'get').mockImplementation(() => ({ data: File1 }));
            expect(await filesDataService.getDataFile('test1.csv')).toBe(undefined);
        });
        test('should be undefined with a incomplete file', async () => {
            jest.spyOn(ExternalAPI, 'get').mockImplementation(() => ({ data: File15 }));
            expect(await filesDataService.getDataFile('test15.csv')).toBe(undefined);
        });
        test('should get data', async () => {
            jest.spyOn(ExternalAPI, 'get').mockImplementation(() => ({ data: File2 }));
            expect(await filesDataService.getDataFile('test2.csv'))
                .toEqual({
                    "file": "test2.csv",
                    "lines": [{ "hex": "53dde86bfefe7f43a98423e166148a46", "number": "264778", "text": "utquuWBFkNh" }]
                });
        });
    });
});

const FILES = {
    "files": [
        "test1.csv",
        "test2.csv",
        "test3.csv",
        "test18.csv",
        "test4.csv",
        "test5.csv",
        "test6.csv",
        "test9.csv",
        "test15.csv"
    ]
}
const File1 = 'file,text,number,hex';

const File15 = `file,text,number,hex
test15.csv,oBPD
test15.csv,CaKCceMbjIffMYbyqVZYBWIEZ,,
test15.csv,ckMBtXcuKLTCPyDkALLMbeFidZ,,
test15.csv,vxFxWAS,,
test15.csv,bVuVIoGpUAcVlmr,,
test15.csv,vULiGyUmj,,
test15.csv,MPUNE,,
test15.csv,MHDTaHXh,,
test15.csv,Xs,,,,
test15.csv,nifB
test15.csv,whhEXCHzomgfuCAxXkfVUVFhQ,,
test15.csv,KwULvvsCseRVvTOyGKWzpF,,
test15.csv,RTGnx,,
test15.csv,ttpsPSHpUoScUGAvlPCpaiGG,,
test15.csv,RBHLpyputttgQyRBxYGKXPvSYR,,
test15.csv,YOYRlSsZyZcCU,,`;

const File2 = `file,text,number,hex
test2.csv,GjXyk
test2.csv,utquuWBFkNh,264778,53dde86bfefe7f43a98423e166148a46`;