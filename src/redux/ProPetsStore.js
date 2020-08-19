import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

const initialState = {
    user: {
        avatarAuthor: require('../images/home_img/logoKuzya.png'),
        name: 'Tom Hardi',
        time: '2h',
        display: false,
        favorites: false,
        email: 'someEmail@gmail.com',
        fblink: 'https://www.facebook.com/profile.php?id=100007757115574',
        phone: '056-750-25-43',
    },
    posts: {posts: []},
    postsLost: [{
        id: "5f1b35e3c3129c5934a65dfb",
        type: "cat",
        breed: "unknown",
        sex: "male",
        color: "brown",
        height: "110cm",
        description: "found in park, boy, found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boyfound in park, boy found in park, boy found in park, boy",
        address: "Herzl St, Tel Aviv-Yafo",
        distinctiveFeatures: "fluffy, wild, not very kind, tall",
        picturesURLs: [require('../images/testPictures/pexels-photo-4206434.jpeg'),
            require('../images/testPictures/testPic1.jpg'),
            require('../images/testPictures/testPic2.jpg'),
            require('../images/testPictures/testPic3.jpg')],
        dateOfPublish: "2020-07-24",
        authorData: {
            authorId: "yurka87k@gmail.com",
            phone: "email address for contact",
            fb_link: "facebook link",
            email: "email address for contact",
            authorAvatar: require('../images/home_img/logoKuzya.png'),
            authorName: "Anton"
        }
    },
        {
            id: "3f1b35e3c3129c5934a65dfb",
            type: "dog",
            breed: "Ovcharka",
            sex: "male",
            color: "black",
            height: "120cm",
            description: "found in park, boy, found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boy found in park, boyfound in park, boy found in park, boy found in park, boy",
            address: "Herzl St, Tel Aviv-Yafo",
            distinctiveFeatures: "fluffy, wild, not very kind, tall",
            picturesURLs: [require('../images/testPictures/pexels-photo-4206434.jpeg'),
                require('../images/testPictures/testPic1.jpg'),
                require('../images/testPictures/testPic2.jpg'),
                require('../images/testPictures/testPic3.jpg')],
            dateOfPublish: "2020-07-4",
            authorData: {
                authorId: "yurka87k@gmail.com",
                phone: "email address for contact",
                fb_link: "facebook link",
                email: "email address for contact",
                authorAvatar: require('../images/home_img/logoKuzya.png'),
                authorName: "Yurii Krasnozhon"
            }
        }],
    displayChange: {
        display: false
    },

};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

