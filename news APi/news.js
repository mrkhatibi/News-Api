class newapi {
    constructor(){
        this.apikey = 'fbb9824382c44dd6ae847853163783f2'
    }
    async newsApi(wordInput,country,category,sortby,datefrom,dateto){
        let url = 'https://newsapi.org/v2/'

        if (country !== '' || category !== ''){
            url += 'top-headlines?'
        }else{
            url += 'everything?'
        }
        if(wordInput!==''){
            url+= `q=${wordInput}&`
        }
        if(country!==''){
            url+= `country=${country}&`
        }
        if(category!==''){
            url+= `category=${category}&`
        }
        if(sortby!==''){
            url+= `sortBy=${sortby}&`
        }
        if(datefrom!==''){
            url+= `from=${datefrom}&`
        }
        if(dateto!==''){
            url+= `to=${dateto}&`
        }
        url+=`apiKey=${this.apikey}`
        
        const news = await fetch(url)
        const response = await news.json()
        
        return{
            response
        }
    }
}