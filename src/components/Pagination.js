import React, {useEffect, useState} from "react";
import style from '../css_modules/pagination.module.css'
import {MAX_COUNT} from "../constants/constans";
import BoxNumber from "./Pages/FavoritesPage/BoxNumber";

const Pagination = (props) => {

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        const [count, setCount] = useState(0);

        const nextRow = () => {
            setCount(count + 1);
            console.log(count)
        };

        const
            prevRow = () => {
                count > 0 ? setCount(count - 1) : setCount(0);
            };

        /*      useEffect(() => {
                  console.log(count);
              }, [count]);*/


        return (
            <div className={`${style.pagination} mx-2 my-3 d-flex justify-content-center align-items-center`}>
                <i className='fas fa-chevron-left mr-3' onClick={prevRow}/>
                {numbers.slice(count, count + 5).map((num, index) => {
                    return <BoxNumber index={index}
                                      key={index}
                                      value={num}
                                      changePage={props.changePage}
                                      pageNumber={props.pageNumber}
                                      setPageNumber={props.setPageNumber}
                    />
                })}
                <i className='fas fa-chevron-right ml-3' onClick={nextRow}/>
            </div>
        );
    }


    /* const fillRow = () => {
         let displayNumbers = numbers.slice(count, count + 5);
         console.log(displayNumbers)
         displayNumbers.map((num, index) => {

         })
     };*/
;

export default Pagination;