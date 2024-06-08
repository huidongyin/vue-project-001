//5.routerHelper.js
export function routerTo(router,path,params){
    router.push({path},params).catch(err=>{
        if (err.name!=='NavigationDuplicated'){
            console.error(err)
        }
    })
}