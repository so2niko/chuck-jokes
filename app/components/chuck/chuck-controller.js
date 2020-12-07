import ChuckModel from './chuck-model.js';
import ChuckView from './chuck-view.js';

export default class ChuckController{
    listeners = {
        getJoke : this.getJoke.bind(this),
        filterGoodJoke : () => this.filterJoke(),
        filterBadJoke : () => this.filterJoke('bad'),
        toggleJoke : (ev) => this.toggleJoke(ev)
    };

    constructor(){
        this.view = new ChuckView(this.listeners);
        this.model = new ChuckModel();
    }

    getJoke(){
        this.model.getJoke().then(() => {
            const joke = this.model.getLastJoke();

            this.view.showNewJoke(joke);
        });
    }

    filterJoke = (type = 'good') => {        
        const joke = this.model.getLastJoke();
        joke.type = type;
        this.view.showJokeInList(joke);
    }   

    toggleJoke = ({ target }) => {
        if(target.dataset.type){
            const { type, id } = target.dataset;

            const joke = this.model.getJokeById(id);
            joke.type = type == 'good' ? 'bad' : 'good';
            
            this.view.showJokeInList(joke);
        }
    }
    
}