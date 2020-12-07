export default class ChuckModel{
    jokes = [];
    id = 1;

    getJoke(){
        return fetch('https://api.chucknorris.io/jokes/random')
            .then(r => r.json())
            .then(d => {
                const joke = {
                    id : this.id++,
                    text : d.value
                };
                
                this.jokes.push(joke);
            });
    } 

    getLastJoke(){
        return this.jokes[this.jokes.length - 1];
    }

    getJokeById(idF){
        return this.jokes.find(({ id }) => id == idF );
    }

}