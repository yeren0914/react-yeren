
const routerConfig =[{
    path:'/',
    onEnter:function (nextState,replaceState) {
        let pathName = nextState.location.pathname.replace(/^\//,'')
        if(pathName == ''){
            replaceState('todo')
        }
    },
    childRoutes:[
        {
            path:'home',
            getComponents(location,callback){
                require.ensure([],function (require) {
                    callback(null,require('../containers/home/home.component').default)
                })
            }
        }
    ]
}]

export default routerConfig