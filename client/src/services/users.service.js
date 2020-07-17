import * as Constants from '../common/constants'
import { Utils } from '../common/utils';

class UserDataService {

    createUser = async(newUser)=>{
        try{
            const data = await Utils.getAxios().post(Constants.BASIC_URL+"/api/v1/users", newUser, { headers: Constants.HTTP_HEADERS });
             return data.data;
        } catch (error){
            console.error(error);
            return undefined;
        }
    }
}


export default new UserDataService();
