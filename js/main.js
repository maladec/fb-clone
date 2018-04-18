document.querySelector('.search-input').onblur = function(){
    if(document.querySelectorAll('.recent-searches:hover').length){
        document.querySelector('.search-input').focus();
    }
}