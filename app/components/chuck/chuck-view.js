export default class ChuckView{
    txtNewJoke = document.querySelector('.txt_new-joke');
    newjokeId = document.querySelector('.txt_new-joke-id');
    btnGood = document.querySelector('.btn_good');
    btnBad = document.querySelector('.btn_bad');
    btnNew = document.querySelector('.btn_new-joke');
    txtGoodJokes = document.querySelector('.txt_good-jokes');
    txtBadJokes = document.querySelector('.txt_bad-jokes');
    contNewJoke = document.querySelector('.cont_new-joke');

    constructor({ getJoke, filterGoodJoke, filterBadJoke, toggleJoke }){
        this.btnNew.addEventListener('click', getJoke);
        this.btnBad.addEventListener('click', filterBadJoke);
        this.btnGood.addEventListener('click', filterGoodJoke);

        this.txtGoodJokes.addEventListener('click', toggleJoke);
        this.txtBadJokes.addEventListener('click', toggleJoke);

        this.contNewJokeToggle(false);
    }

    contNewJokeToggle(isShow = true){
        this.contNewJoke.style.display = isShow ? 'block' : 'none';
    }

    showNewJoke({ id, text }){
        this.newjokeId.innerText = id;
        this.txtNewJoke.innerText = text;

        this.contNewJokeToggle(true);
    }

    showJokeInList({ type, id, text }){

        const [linkText, link] = type == 'good' ? ['Bad', this.txtGoodJokes] : ['Good', this.txtBadJokes];

        const jokeStr = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${ id }</h5>
            <p class="card-text">${ text }</p>
            <a href="#" class="card-link" 
                data-id="${ id }"
                data-type="${ type }">${ linkText }</a>
            </div>
        </div>`;

        link.insertAdjacentHTML('beforeend', jokeStr);

        
        this.newjokeId.innerText = '';
        this.txtNewJoke.innerText = '';

        
        this.contNewJokeToggle(false);
    }
}