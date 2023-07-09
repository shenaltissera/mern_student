const pdfDownload = (event, uploads)=>{
    try {
        event.preventDefault();
        const url = uploads.data;
        console.log(url)
        const buff = new Buffer(url, 'base64');
        const base64data = buff.toString('base64');
        const stringLB = base64data.toString('utf8');
        console.log(stringLB)
        convBase64ToFile(base64data)

        function convBase64ToFile(strBase64) {
            var tmp = strBase64.split(",");
            var prefix = tmp[0];
            var contentType = "application/pdf";
            console.log(prefix.type)
            var byteCharacters = atob(stringLB);

            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob = new Blob([byteArray], { type: contentType });
            var blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, "popup", "width=1000,height=500,scrollbars=1,resizable=no," +
                "toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0");
        }

    }catch (err) {
        if (err) {
            console.error(err.message)
        }
    }
}

module.exports ={
    pdfDownload
}