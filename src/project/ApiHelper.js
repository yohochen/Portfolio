class ApiHelper {
    constructor(url){
        this.url = url
        this.hasParam = false;
    }

    append(suffix){
        this.url += suffix
        return this
    }

    param(param){
        if(!this.hasParam){
            this.hasParam = true;
            this.url += '?' + param
        }else{
            this.url += '&' + param
        }
        return this
    }

    getFinalURL(){
        return this.url
    }
}

export default ApiHelper
