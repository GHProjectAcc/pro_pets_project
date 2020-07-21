import {getFeed} from "./PostFeedActions";
import {CLOUDINARY_URL} from "../constants/base_url";

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

export const uploadImage = image => ({
        type: UPLOAD_IMAGE,
        payload: image
    })
;

export const uploadImageFetch = (formData) => {
    return dispatch => {
        console.log('tut');
        // const token = localStorage.token;
        // if (token) {
            return fetch(`${CLOUDINARY_URL}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                    /*'Authorization': `Bearer ${token}`*/
                },
                body: formData
            }).then(function (response) {
                if (response.status !== 200) {

                }
               // dispatch(uploadImage(response));
                console.log(response);
            }).catch(function (err) {
                console.log(err);

            })

    }
};