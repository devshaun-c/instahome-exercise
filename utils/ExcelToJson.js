import * as XLSX from "xlsx";

export const ExcelToJson = (file, handleResult, tab = 0) => {
  const promise = new Promise((resolve, reject) => {
    var f = file;
    // var name = f.name;
    const reader = new FileReader();
    reader.readAsArrayBuffer(f);
    reader.onload = (e) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: "buffer" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[tab];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      resolve(data);
      //   console.log(convertToJson(data)); // shows data in json format
    };
    // reader.readAsBinaryString(f);
    reader.onerror = (err) => {
      reject(err);
    };
  });

  promise.then((d) => {
    handleResult(d);
  });
};
