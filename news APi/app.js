//variables
const ui = new UI()
const news = new newapi()





//EVEN LISTENERS
listeners()
function listeners(){
    //access to submit button
    document.querySelector('.submitbtn').addEventListener('click' , getValues)
    document.querySelector('.submitbtn').addEventListener('click' , clearform)
    document.querySelector('.resetbtn').addEventListener('click' , clearnews)




}

function clearnews(e){
    e.preventDefault()
    const card = document.querySelector('.card')
    card.remove()

}

function clearform(){
    const form = document.querySelector('.formclear')
    form.reset()
}



function getValues(e){
    e.preventDefault()
    //get values
    const wordInput = document.querySelector('#wordInput').value
    const country = document.querySelector('#country').value
    const category = document.querySelector('#category').value
    const sortby = document.querySelector('#sortby').value
    const datefrom = document.querySelector('#datefrom').value
    const dateto = document.querySelector('#dateto').value
    

    //validating values
    if (wordInput !=='' ||country !=='' ||category !=='' ||sortby !=='' ||datefrom !=='' ||dateto !=='' ){
        if (wordInput !=='' && country !=='' && category !=='' || country !=='' && category || wordInput !=='' || category !=='' && sortby !==''){
        news.newsApi(wordInput,country,category,sortby,datefrom,dateto)
        .then(newss => {
            ui.shownews(newss.response.articles)
            if(newss.response.totalResults === 0 ){
                setTimeout(() => {
                    ui.showmessage('نتیجه ای پیدا نشد' , 'alert alert-warning text-center')
                    
                }, 3005);

            }
        })
        }else {
            ui.showmessage('برای بهبود در روند جستجو ، مقادیر بیشتری را پر کنید' , 'alert alert-warning text-center')


        }
    }else {
        ui.showmessage('لطفا حداقل یکی از مقادیر را پر کنید' , 'alert alert-danger text-center')

    }
    
}