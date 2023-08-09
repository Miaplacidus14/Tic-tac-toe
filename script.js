const player = (name, marker) => {
    return { name, marker };
}

const gameBoard = (() => {
    let _case = ['', '', '', '', '', '', '', '', ''];
    let tour = 0;
    let compteur = 0;
    const players = () => {
        var firstPlayer = player(prompt("Veuillez saisir le nom du premier joueur : "), prompt("Veuillez saisir le marqueur du premier joueur (X ou O) : "));
        var secondPlayer = player(prompt("Veuillez saisir le nom du second joueur : "), prompt("Veuillez saisir le marqueur du second joueur (X ou O) : "));
        if ((secondPlayer.marker != 'X' && secondPlayer.marker != 'O') || (firstPlayer.marker != 'X' && firstPlayer.marker != 'O') || (firstPlayer.marker === secondPlayer.marker)) {
            alert("Les données saisies sont incorectes");
            firstPlayer = player(prompt("Veuillez saisir le nom du premier joueur : "), prompt("Veuillez saisir le marqueur du premier joueur (X ou O) : "));
            secondPlayer = player(prompt("Veuillez saisir le nom du second joueur : "), prompt("Veuillez saisir le marqueur du second joueur (X ou O) : "));
        } else if (firstPlayer.marker === 'X') {
            alert(`${firstPlayer.name} joue en premier !`);
            
        } else {
            alert(`${secondPlayer.name} joue en premier !`);
        }
    }

    const content = (id) => {
        let number = Number(id)
        if (_case[number] === '' && tour === 0) {
            _case[number] = 'X';
            const div = document.getElementById(id)
            div.textContent = 'X';
            tour = 1;
        } else if (_case[number] === '' && tour === 1) {
            _case[number] = 'O';
            const div = document.getElementById(id);
            div.textContent = 'O';
            tour = 0;
        }
    }

    const affichage = () => {
        for (let i = 0; i < 9; i++) {
            let number = document.getElementById(`${i}`);
            number.textContent = `${_case[i]}`;
        }
    }

    const win = () => {
        compteur ++;
        if (
                (_case[0] === _case[1] && _case[0] === _case[2] && _case[0] != '') ||
        (_case[3] === _case[4] && _case[4] === _case[5] && _case[3] != '') ||
        (_case[6] === _case[7] && _case[7] === _case[8] && _case[6] != '') ||
        (_case[0] === _case[3] && _case[3] === _case[6] && _case[0] != '') ||
        (_case[1] === _case[4] && _case[4] === _case[7] && _case[1] != '') ||
        (_case[2] === _case[5] && _case[5] === _case[8] && _case[2] != '') ||
        (_case[2] === _case[4] && _case[4] === _case[6] && _case[2] != '') ||
        (_case[0] === _case[4] && _case[4] === _case[8] && _case[0] != '') 
        ){
            const title = document.querySelector('.win');
            if (tour === 1) {
                title.textContent = `Les X gagnent !`;
            } else {
                title.textContent = `Les O gagnent !`;
            }
        } else if (compteur === 9) {
            const title = document.querySelector('.win');
            title.textContent = "Egalité !";
        }
    }

    const clear = () => {
        const divs = document.querySelectorAll('.case');
        divs.forEach((div) => {
            div.textContent = "";
        });
        _case = ['', '', '', '', '', '', '', '', ''];
        tour = 0;
        compteur = 0;
        const title = document.querySelector('.win');
        title.textContent = "";
    }

    return { affichage,
             content, 
             win,
             clear,
             players
            }
})();