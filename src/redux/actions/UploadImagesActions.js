import {getFeed} from "./PostFeedActions";
import {CLOUDINARY_URL} from "../../constants/constans";
import axios from "axios";
import {store} from "../ProPetsStore";

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

export const uploadImage = image => ({
        type: UPLOAD_IMAGE,
        payload: image
    })
;

export const uploadImageFetch = (formData) => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            axios({
                url: CLOUDINARY_URL,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`
                },
                data: formData
            })
                .then(function (response) {
                    console.log(response);
                    console.log(response.status);
                    dispatch(uploadImage(response));
                    console.log(store.getState);
                }).catch(function (err) {
                console.log(err);
            })
        }
    }
};