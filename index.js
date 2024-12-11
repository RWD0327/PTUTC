document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        console.log('Dark mode is enabled');
        if (window.innerWidth <= 768) {
            document.querySelector('.theme').style.display = 'none';
        }
        else {
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
        }
    } 
    else {
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
    }

    const btnani = document.querySelector('.btn');
    btnani.addEventListener('click', function(){
        btnani.classList.toggle('active');
        document.querySelector('.theme').classList.toggle('active');
    });
});
