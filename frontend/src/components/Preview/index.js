export const Preview = ({files}) => {
    if (!files) {
        return null
    }
  
   
 


    return files.map((file) => <img style={{maxWidth: '200px'}} src={`http://localhost:8000/${file.filename}`} alt={file.originalname}/>);

  
};