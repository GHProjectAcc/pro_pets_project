import React, {useState} from "react";
import style from "../../../../css_modules/addPost.module.css";
import {CLOUDINARY_UPLOAD_PRESET} from "../../../../constants/constans";
import {uploadImageFetch} from "../../../../redux/actions/UploadImagesActions";
import {connect} from "react-redux";

const PhotoBox = (props) => {

    const [images, setImages] = useState([require('../../../../images/addPost_img/background.png'),
        require('../../../../images/addPost_img/backgroundSmall.png'),
        require('../../../../images/addPost_img/backgroundSmall.png'),
        require('../../../../images/addPost_img/backgroundSmall.png')]);


    const handleFiles = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
        console.log(formData);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);//name only 'upload_preset'
        props.uploadImageFetch(formData);
        reader.onload = () => {
            if (images.length > 3) {
                images.splice(0, 1);
            }
            let newUrl = [...images, reader.result];
            setImages(newUrl);
        };
        reader.readAsDataURL(file);

    };


    return (
        <div className={`${style.photoBox} px-0  d-flex col-5`}>
            <input id='file' className={`${style.inputUpload}`} type='file' multiple
                   onChange={handleFiles}/>
            <label htmlFor='file' className={`${style.photo1Label} mb-0`}>
                <img src={images[0]} className={`${style.photo1} `}
                     alt=''/>
            </label>
            <label htmlFor='file' className={`${style.smallBox}`}>
                <img src={images[1]}
                     className={`${style.photo2} `} alt=''/>
                <img src={images[2]}
                     className={`${style.photo2}  `} alt=''/>
                <img src={images[3]}
                     className={`${style.photo2}  `} alt=''/>
            </label>

            {/*   <button className='btn-info'
                    onSubmit={saveImages}>Submit
            </button>*/}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    uploadImageFetch: formData => dispatch(uploadImageFetch(formData))
});

export default connect(null, mapDispatchToProps)(PhotoBox);