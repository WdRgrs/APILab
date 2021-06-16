const newResidentButton = document.querySelector('#residentsOfAlderaan');


function residentBtnActn() {
    alert("Residents of Alderaan");
    console.log('Resident list generated');

    axios
        .get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((res) => {
            let residents = res.data.results[0].residents
            for ( let i = 0; i < residents.length; i++) {
                axios
                    .get(residents[i])
                    .then(res => {
                        let h1 = document.createElement('h1');
                        h1.textContent = res.data.name
                        document.body.appendChild(h1);
                    })
            }
        })
        .catch(error => console.log(error));
};

newResidentButton.addEventListener('click', residentBtnActn)

