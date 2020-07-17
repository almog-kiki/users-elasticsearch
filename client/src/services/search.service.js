import { Utils } from '../common/utils';
import * as Constants from '../common/constants'

class SearchDataService {

    search = async(pageNumber, perPage, text, sortType)=>{
        try{
             const data = {pageNumber, perPage, text, sortType}
             const result = await Utils.getAxios().post(
                 Constants.SEARCH_SERVICE_URL + `/api/v1/search`, data,{ headers: Constants.HTTP_HEADERS })
            return result.data.data;
        } catch (error){
            console.error(error);
            return undefined;
        }
    }
}

export default new SearchDataService();
