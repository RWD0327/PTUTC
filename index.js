document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.theme').addEventListener('click', function(){
        document.querySelector('.btn').classList.toggle('after');
        document.querySelector('.theme').classList.toggle('after');
        if(document.documentElement.getAttribute('data-theme') === 'dark'){
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else{
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });
});
