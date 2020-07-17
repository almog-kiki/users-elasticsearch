
import React, { Component, Fragment  } from 'react';
import { InputGroup,Button, Input } from 'reactstrap';
import * as Constants from '../common/constants';
import InfiniteScroll from "react-infinite-scroll-component";
import { Utils } from '../common/utils';
import searchService from '../services/search.service'
import UsersTable from './usersTable';



export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: undefined,
            pageNumber:0,
            perPage: Constants.MAX_USERS_PER_FETCH,
            searchValue: "",
            isMore: false,
            isLoadingData: false,
        // asc=true, desc=false
            sort: {
                firstname:  true,
                lastname:   true,
                username:   true
            },
            sortType: undefined
        };
        this.fetchMoreUsers = this.fetchMoreUsers.bind(this);
        this.handleSearchAction = this.handleSearchAction.bind(this);
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    }

    handleStopInfinitScroll = ()=>{
        this.setState({
            pageNumber:0,
            isMore: false,
            isLoadingData: false
        });    
    }

    isDataFinished = (newUsers) =>{
        return newUsers.length < Constants.MAX_USERS_PER_FETCH;
    }

    async fetchMoreUsers() {
        const { pageNumber, perPage, searchValue, users, sortType } = this.state;
        let newUsers = await searchService.search(pageNumber, perPage, searchValue, sortType);
        if(newUsers){
            if(newUsers.length === 0 ){
                this.handleStopInfinitScroll();
            } else {
                const appendedNewUsers = users.concat(newUsers);

                let isDataFinished = this.isDataFinished(newUsers);
                this.setState({
                    users: appendedNewUsers,
                    pageNumber: isDataFinished ? 0: pageNumber + Constants.MAX_USERS_PER_FETCH,
                    isLoadingData: false,
                    isMore: !isDataFinished
                });
            }
        } else {
            Utils.getToastError(Constants.SEARCH_FAILED_TOAST_TITLE)
            this.setState({ 
                users: [],
                pageNumber:0,
                isMore: false,
                isLoadingData: false,
                sortType: undefined,
                sort: { 
                    firstname:  false,
                    lastname:   false,
                    username:   false
                }
            }); 
        }
       
    }

    handleSearchValueChange(event){
        this.setState({ searchValue: event.target.value });
    }

    handleSearchAction(searchValue, sortType){
        this.setState({
            searchValue: searchValue,
            isLoadingData: true,
            users: [],
            pageNumber:0,
            isMore: true,
            sortType: sortType
        },()=>{
            this.fetchMoreUsers();
        });
    }

    getSortOrder = (isAsc)=>{
        if(isAsc){
            return "asc";
        }
        return "desc";
    }

    handleSort=(property)=>{
        const { sort } = this.state;
        let sortType = {};
        sortType.filedname = property;
        sortType.order = this.getSortOrder(sort[property]);
        let updateSort =  Utils.clone(sort);
        updateSort[property] = !sort[property];
        this.setState({ sort: updateSort,sortType: sortType },
            ()=>{
                const { searchValue, sortType} = this.state;
                this.handleSearchAction(searchValue, sortType)
            })
    }


    drawInfiniteScroll(){
        const { users, isMore, isLoadingData, sort } = this.state;
        return(
            <Fragment>
                {   users && users.length > 0 &&
                    <InfiniteScroll
                        dataLength={users.length}
                        next={()=>this.fetchMoreUsers()}
                        hasMore={isMore}
                        loader={Utils.drawSpinner()}
                        useWindow={false}
                        >
                        <UsersTable users={users}
                            sort= {sort}
                            sortBy={this.handleSort}
                        ></UsersTable>
                    </InfiniteScroll>
                }
                {
                    isLoadingData &&  users && users.length === 0 &&
                    <Fragment> 
                        {Utils.drawSpinner()} 
                        </Fragment>
                }
                {
                   !isLoadingData &&  users && users.length === 0 &&
                    <div>{Constants.NO_SEARCH_RESULT} </div>
                }
            </Fragment>
        )
    }

    drawSearchSection = ()=>{
        const {searchValue,isLoadingData} = this.state;
        return(
            <div className="search-container">
                    <InputGroup>
                        <Input placeholder={Constants.SEARCH_PLACEHOLDER}
                            value={searchValue}
                            onChange={(e)=>this.handleSearchValueChange(e)}
                        />
                        <Button color="primary" className="add-btn" disabled={!searchValue || isLoadingData} 
                            onClick={()=>this.handleSearchAction(searchValue)}>
                            {Constants.SEARCH_TITLE }
                        </Button>
                    </InputGroup>
        </div>
        )
    }

    render(){
        return(
            <Fragment>
                {this.drawSearchSection()}
                {this.drawInfiniteScroll()}   
            </Fragment>
            
        )
    }
}


// UNSAFE_componentWillReceiveProp(){
//     //https://github.com/ankeetmaini/react-infinite-scroll-component/issues/122
// }