// function getJoke(){
    //! model
    // fetch('https://api.chucknorris.io/jokes/random')
    //     .then(r => r.json())
    //     .then(d => {
    //         console.log(d);
    //         const joke = {
    //             id : store.id++,
    //             text : d.value
    //         }
            //! view
            // store.newjokeId.innerText = joke.id;
            // store.txtNewJoke.innerText = joke.text;
            //! model
//             // store.jokes.push(joke);
//         });
// }

// const store = {
    //! model
    // id : 1,
    // jokes : [],
    //! view
    // txtNewJoke : document.querySelector('.txt_new-joke'),
    // newjokeId : document.querySelector('.txt_new-joke-id'),
    // btnGood : document.querySelector('.btn_good'),
    // btnBad : document.querySelector('.btn_bad'),
    // btnNew : document.querySelector('.btn_new-joke'),
    // txtGoodJokes : document.querySelector('.txt_good-jokes'),
    // txtBadJokes : document.querySelector('.txt_bad-jokes')
// }

//! view
// store.btnNew.addEventListener('click', getJoke);
// store.btnBad.addEventListener('click', () => filterJoke('bad'));
// store.btnGood.addEventListener('click', () => filterJoke());

// function filterJoke(type = 'good'){
//     //! model
//     const { id, text } = store.jokes[store.jokes.length - 1];
//     const [linkText, link] = type == 'good' ? ['Good', store.txtGoodJokes] : ['Bad', store.txtBadJokes];

//     //! view
//     const jokeStr = `
//     <div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">${ id }</h5>
//         <p class="card-text">${ text }</p>
//         <a href="#" class="card-link">${ linkText }</a>
//         </div>
//     </div>`;

//     link.insertAdjacentHTML('beforeend', jokeStr);

    
//     store.newjokeId.innerText = '';
//     store.txtNewJoke.innerText = '';
// }