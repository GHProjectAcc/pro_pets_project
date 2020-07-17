import {applyMiddleware, createStore} from "redux";
import userReducer from "../reducer/userReducer";
import thunk from "redux-thunk";
import {rootReducer} from "../reducer";

const initialState = {
    user: {
        avatarAuthor: require('../images/home_img/logoKuzya.png'),
        name: 'Tom Hardi',
        time: '2h',
        posts: [],
        display: false,
        favorites: false,
        email: 'someEmail@gmail.com',
        fblink: 'https://www.facebook.com/profile.php?id=100007757115574',
        phone: '056-750-25-43',
    },
    post: {
        id: '',
        text: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for jigs vex! Fox nymphs grab quick-jived waltz. Brick whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack …more',
        pictures: [require('../images/home_img/mainPostImageSmall.png'),
            require('../images/testPictures/testPic1.jpg'),
            require('../images/testPictures/testPic2.jpg'),
            require('../images/testPictures/testPic3.jpg')],
        dateOfPublish: "2020-07-17T15:13:23.651",
        authorData: {
            authorId: "sara5000@gmail.com",
            authorAvatar: "url",
            authorName: "Sara"
        },

    },
    displayChange: {
        display: false
    },

};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

