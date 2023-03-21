const signOutEL = document.getElementById('sign-out');
const pauseIconEl = document.getElementById('pause-icon')
const upcomingBtn = document.getElementById('upcomingBtn')
const upcomingMovie = document.getElementById('upcoming');
const tvSeriesBtn = document.getElementById('tvSeriesBtn')
const tvSeriesMovie = document.getElementById('tvSeries');
const moviesBtn = document.getElementById('moviesBtn')
const movies = document.getElementById('movies');
const cartoonBtn = document.getElementById('cartoonBtn')
const cartoon = document.getElementById('cartoon');
const comedyBtn = document.getElementById('comedyBtn')
const comedy = document.getElementById('comedy');
const actionBtn = document.getElementById('actionBtn')
const action = document.getElementById('action');
const fantasyBtn = document.getElementById('fantasyBtn')
const fantasy = document.getElementById('fantasy');
const homeBtn = document.getElementById('homeBtn')
const appEl = document.getElementById('app');
const boxHeadingBtn = document.querySelectorAll('.box-heading');
const movieDescription_1 = document.querySelector('.movie-description-1');
const movieDescription_2 = document.querySelector('.movie-description-2');
const movieDescription_3 = document.querySelector('.movie-description-3');
const movieDescription_4 = document.querySelector('.movie-description-4');
const movieDescription_5 = document.querySelector('.movie-description-5');
const movieDescription_6 = document.querySelector('.movie-description-6');
const movieDescription_7 = document.querySelector('.movie-description-7');
const movieDescription_8 = document.querySelector('.movie-description-8');

for (let i = 0; i < boxHeadingBtn.length; i++) {
    let show = false;
    boxHeadingBtn[0].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[0].style.color = '#fff'
            movieDescription_1.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[0].style.color = '#e7d666'
            movieDescription_1.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[1].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[1].style.color = '#fff'
            movieDescription_2.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[1].style.color = '#e7d666'
            movieDescription_2.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[2].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[2].style.color = '#fff'
            movieDescription_3.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[2].style.color = '#e7d666'
            movieDescription_3.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[3].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[3].style.color = '#fff'
            movieDescription_4.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[3].style.color = '#e7d666'
            movieDescription_4.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[4].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[4].style.color = '#fff'
            movieDescription_5.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[4].style.color = '#e7d666'
            movieDescription_5.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[5].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[5].style.color = '#fff'
            movieDescription_6.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[5].style.color = '#e7d666'
            movieDescription_6.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[6].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[6].style.color = '#fff'
            movieDescription_7.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[6].style.color = '#e7d666'
            movieDescription_7.style.display = 'block';
            show = true;
        }
    })
    boxHeadingBtn[7].addEventListener('click', function () {
        if (show) {
            boxHeadingBtn[7].style.color = '#fff'
            movieDescription_8.style.display = 'none';
            show = false;
        } else {
            boxHeadingBtn[7].style.color = '#e7d666'
            movieDescription_8.style.display = 'block';
            show = true;
        }
    })
}

upcomingBtn.addEventListener('click', () => {
    upcomingMovie.scrollIntoView({ behavior: 'smooth' })
})

tvSeriesBtn.addEventListener('click', () => {
    tvSeriesMovie.scrollIntoView({ behavior: 'smooth' })
})

moviesBtn.addEventListener('click', () => {
    movies.scrollIntoView({ behavior: 'smooth' })
})

cartoonBtn.addEventListener('click', () => {
    cartoon.scrollIntoView({ behavior: 'smooth' })
})

comedyBtn.addEventListener('click', () => {
    comedy.scrollIntoView({ behavior: 'smooth' })
})

actionBtn.addEventListener('click', () => {
    action.scrollIntoView({ behavior: 'smooth' })
})

fantasyBtn.addEventListener('click', () => {
    fantasy.scrollIntoView({ behavior: 'smooth' })
})

homeBtn.addEventListener('click', () => {
    appEl.scrollIntoView({ behavior: 'smooth' })
    console.log('Clicked')
})

signOutEL.addEventListener('click', function () {
    window.location = 'welcome.html';
})

const spacePoliceEl = document.getElementById('spacePolice')
const btnPauseEL = document.getElementById('btn-pause');

btnPauseEL.addEventListener('click', () => {
    if (spacePoliceEl.paused) {
        spacePoliceEl.play();
        btnPauseEL.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
    } else {
        spacePoliceEl.pause();
        btnPauseEL.innerHTML = `<i class="fa-solid fa-play"></i> Play`;
    }
})
