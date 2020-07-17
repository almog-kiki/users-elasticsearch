const UserModel = require('../models/user.model');




exports.search = async function (req, res){
    try{
        const { text, perPage, pageNumber, sortType } = req.body;
        const rawQuery = {
            from: pageNumber,
            size: perPage,
            query: {
                multi_match : {
                    query : text,
                    fields : ["firstname", "lastname", "username"]
                }
            }
        };
        if(sortType){
            rawQuery.sort =  [
                { [sortType.filedname+".keyword"]: {order:sortType.order}}
            ]
        }
        UserModel.esSearch(rawQuery, function(err,results) {
            if(!err){
                mainModule.utils.log(results.hits.hits);
                mainModule.requestUtils.successResponse(res, results.hits.hits, "search results")
            } else { 
                mainModule.utils.log(err.stack);
                throw "no found."
            }
        });
    }catch(error){
        mainModule.utils.log(error.stack);
        mainModule.requestUtils.failureResponse(res, error, "create")
    }   
}



// exports.filterSearch = async function (req, res){
//     try{
//         const { text, perPage, pageNumber } = req.body;
//         UserModel.search(
//             { query_string: { query: text }},
//             {
//                 from: pageNumber,
//                 size: perPage,
//                 hydrate: true,
//                 hydrateWithESResults: true,
//                 hydrateOptions: {select: 'firstname lastname username role'}
//             },
//             function(err,results) {
//                 if(!err){
//                     console.log(results.hits.hits);
//                     mainModule.requestUtils.successResponse(res, results.hits.hits, "search results")
//                 } else { 
//                     throw "no found."
//                 }
//             }
//         );

//     }catch(error){
//         mainModule.requestUtils.failureResponse(res, error, "create")
//     }   
// }


  // sort option: {sort: "age:asc"}, 
  //{sort: "age:desc"}
  //doc: https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html#request-body-search-sort

// with options:
  // let options =  {
        //     from: pageNumber,
        //     size: perPage,
        //     hydrate: true,
        //     hydrateWithESResults: true,
        //     hydrateOptions: {select: 'firstname lastname username role'}
        // }
        // if(sortType){
        //     // sort: "firstname:asc"
        //     options.sort = sortType;
        // }
        // console.log("options: ", options)

        // UserModel.search(
        //     { query_string: { query: text }},
        //     options,
        //     function(err,results) {
        //         if(!err){
        //             console.log(results.hits.hits);
        //             mainModule.requestUtils.successResponse(res, results.hits.hits, "search results")
        //         } else { 
        //             console.log(err.stack);
        //             throw "no found."
        //         }
        //     }
        // );









// with esSearch 
// UserModel.esSearch({
//     from: pageNumber,
//     size: perPage,
//     query: {
//         wildcard: {
//             firstname: {
//                 value: text+"*",
//                 boost: 1.0
//             }
//         }
//     },
//     sort: [{ "firstname": "asc" }]
//   }, function(err, people){
//      // only the 61st to 80th ranked people who fit the age group are here!
//   });