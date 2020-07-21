/*import React, {useState} from "react";

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        /!*<div className='d-flex justify-content-center mt-3'>
            <div className="pagination">
                <a className="fas fa-angle-double-left" href="#"></a>
                <a href="#">1</a>
                <a className="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>*!/

    );
};*/

/*export default Pagination;*/
import React from "react";
import Pagination from "react-js-pagination";

/*require("bootstrap/less/bootstrap.less");*/

class PostPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 3
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        return (
            <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}

export default PostPagination;