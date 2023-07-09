import './style.css';

import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';

export const FileUploader = ({onSuccess }) =>{

    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }


    axios.post('http://localhost:8000/upload ', data)
    .then((response) => {
        toast.success('Upload Success');
        onSuccess(response.data)
    })
    .catch((e) => {
        toast.error('Upload error')
    })
};
return(

    


<form method="post" action="#" id="#" 
onSubmit={onSubmit}
>
<div className="form-group files">
    <h2>Upload Your File </h2>
    <input type="file"
         onChange={onInputChange}
           className="form-control"
           multiple/>
</div>

<button class="btn btn-success" > Submit</button>
</form>


 

    )









};