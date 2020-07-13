import React from "react";
import style from "../../../css_modules/addPost.module.css";

const Title = (props) =>
    (<div className='mt-2'>
              <span className={`${style.titleText} pl-3`}>
                  Your new post! Simply text, add photos and publish.
              </span>
    </div>);
export default Title;