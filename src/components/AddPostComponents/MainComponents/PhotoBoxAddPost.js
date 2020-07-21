import React, {useState} from "react";
import style from "../../../css_modules/addPost.module.css";
import {CLOUDINARY_UPLOAD_PRESET} from "../../../constants/base_url";
import {userLoginFetch} from "../../../actions/UserAuthorizationActions";
import {uploadImageFetch} from "../../../actions/UploadImagesActions";
import {connect} from "react-redux";

const PhotoBox = (props) => {

    const [images, setImages] = useState([require('../../../images/home_img/mainPostImageSmall.png'),
        require('../../../images/testPictures/testPic1.jpg'),
        require('../../../images/testPictures/testPic2.jpg'),
        require('../../../images/testPictures/testPic3.jpg')]);


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

    /*   const saveImages = (e) => {
   u
       };
   */

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