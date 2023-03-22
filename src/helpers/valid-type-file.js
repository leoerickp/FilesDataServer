const validTypeOfFile = (fileName) => {
    const arrayFile = fileName.split('.');
    if (arrayFile[arrayFile.length - 1] !== 'csv') {
        throw new Error('FileName must be a .csv file');
    }
    return true;
}

module.exports = {
    validTypeOfFile
}