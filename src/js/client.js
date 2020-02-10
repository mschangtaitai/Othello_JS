import flatten from 'lodash/flatten'; 

const verifyUp = ({
    rowIndex,
    columnIndex,
    state,
    changes = [],
}) => {
    const variableIndex = rowIndex - 1;

    if (variableIndex >= 0) {

        if (state.turn === true) {
            if ((state.matriz[variableIndex][columnIndex] === 0) || ((state.matriz[variableIndex][columnIndex] === 1) && (variableIndex === 0))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableIndex][columnIndex] === -1) {
                return changes;

            }
            else {
                changes.push([variableIndex,columnIndex]);
                verifyUp({rowIndex: variableIndex,columnIndex,state,changes});
            }
        }
        else if (state.turn === false) {
            console.log('flag');
            if ((state.matriz[variableIndex][columnIndex] === 0) || ((state.matriz[variableIndex][columnIndex] === -1) && (variableIndex === 0))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableIndex][columnIndex] === 1) {
                return changes;
            }
            else {
                changes.push([variableIndex,columnIndex]);
                verifyUp({rowIndex: variableIndex,columnIndex,state,changes});
            }
        }
    }
}

const verifyDown = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableIndex = rowIndex + 1;

    if (variableIndex <= 7) {

        if (state.turn === true) {
            if ((state.matriz[variableIndex][columnIndex] === 0) || ((state.matriz[variableIndex][columnIndex] === 1) && (variableIndex === 7))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableIndex][columnIndex] === -1) {
                return changes;

            }
            else {
                changes.push([variableIndex,columnIndex]);
                verifyDown({rowIndex: variableIndex,columnIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[variableIndex][columnIndex] === 0) || ((state.matriz[variableIndex][columnIndex] === -1) && (variableIndex === 7))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableIndex][columnIndex] === 1) {
                return changes;

            }
            else {
                changes.push([variableIndex,columnIndex]);
                verifyDown({rowIndex: variableIndex,columnIndex,state,changes});
            }
        }
    }
}

const verifyRight = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableIndex = columnIndex + 1;

    if (variableIndex <= 7) {

        if (state.turn === true) {
            if ((state.matriz[rowIndex][variableIndex] === 0) || ((state.matriz[rowIndex][variableIndex] === 1) && (variableIndex === 7))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[rowIndex][variableIndex] === -1) {
                return changes;

            }
            else {
                changes.push([rowIndex,variableIndex]);
                verifyRight({rowIndex,columnIndex: variableIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[rowIndex][variableIndex] === 0) || ((state.matriz[rowIndex][variableIndex] === -1) && (variableIndex === 7))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[rowIndex][variableIndex] === 1) {
                return changes;

            }
            else {
                changes.push([rowIndex,variableIndex]);
                verifyRight({rowIndex,columnIndex: variableIndex,state,changes});
            }
        }
    }
}

const verifyLeft = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableIndex = columnIndex - 1;

    if (variableIndex >= 0) {

        if (state.turn === true) {
            if ((state.matriz[rowIndex][variableIndex] === 0) || ((state.matriz[rowIndex][variableIndex] === 1) && (variableIndex === 0))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[rowIndex][variableIndex] === -1) {
                return changes;

            }
            else {
                changes.push([rowIndex,variableIndex]);
                verifyLeft({rowIndex,columnIndex: variableIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[rowIndex][variableIndex] === 0) || ((state.matriz[rowIndex][variableIndex] === -1) && (variableIndex === 0))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[rowIndex][variableIndex] === 1) {
                return changes;

            }
            else {
                changes.push([rowIndex,variableIndex]);
                verifyLeft({rowIndex,columnIndex: variableIndex,state,changes});
            }
        }
    }
}

const verifyFirstDiagUp = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableRowIndex = rowIndex - 1;
    const variableColumnIndex = columnIndex - 1;

    if ((variableRowIndex >= 0) && (variableColumnIndex >= 0)) {

        if (state.turn === true) {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === 1) && ((variableColumnIndex === 0) || (variableRowIndex===0)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === -1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifyFirstDiagUp({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === -1) && ((variableColumnIndex === 0) || (variableRowIndex===0)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === 1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifyFirstDiagUp({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
    }
}

const verifyFirstDiagDown = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableRowIndex = rowIndex + 1;
    const variableColumnIndex = columnIndex + 1;

    if ((variableRowIndex <= 7) && (variableColumnIndex <= 7)) {

        if (state.turn === true) {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === 1) && ((variableColumnIndex === 7) || (variableRowIndex === 7)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === -1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifyFirstDiagDown({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === -1) && ((variableColumnIndex === 7) || (variableRowIndex === 7)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === 1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifyFirstDiagDown({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
    }
}

const verifySecondDiagUp = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableRowIndex = rowIndex - 1;
    const variableColumnIndex = columnIndex + 1;

    if ((variableRowIndex >= 0) && (variableColumnIndex <= 7)) {

        if (state.turn === true) {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === 1) && ((variableColumnIndex === 7) || (variableRowIndex === 0)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === -1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifySecondDiagUp({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === -1) && ((variableColumnIndex === 7) || (variableRowIndex === 0)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === 1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifySecondDiagUp({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
    }
}

const verifySecondDiagDown = ({
    rowIndex,
    columnIndex,
    state,
    changes,
}) => {
    const variableRowIndex = rowIndex + 1;
    const variableColumnIndex = columnIndex - 1;

    if ((variableRowIndex <= 7) && (variableColumnIndex >= 0)) {

        if (state.turn === true) {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === 1) && ((variableColumnIndex === 0) || (variableRowIndex === 7)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === -1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifySecondDiagDown({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
        else {
            if ((state.matriz[variableRowIndex][variableColumnIndex] === 0) || ((state.matriz[variableRowIndex][variableColumnIndex] === -1) && ((variableColumnIndex === 0) || (variableRowIndex === 7)))) {
                changes.length = 0;
                return true;
            }
            else if (state.matriz[variableRowIndex][variableColumnIndex] === 1) {
                return changes;

            }
            else {
                changes.push([variableRowIndex,variableColumnIndex]);
                verifySecondDiagDown({rowIndex: variableRowIndex,columnIndex: variableColumnIndex,state,changes});
            }
        }
    }
}

const verifyWinner = ({
    state,
}) => {
    if (state.matriz.flatten.includes(0)) {
        return 'x'
    }
    else {
        const result = state.matriz.flatten.reduce((a,b) => a + b)
        if (result < 0){
            return -1
        }
        else if (result > 0){
            return 1
        }
        else {
            return 0
        }
    }
}


const renderCell = ({
    rowIndex,
    columnIndex,
    owner = 0,
    size = 60,
    state,
}) => {
    const cell = document.createElement('div');
    cell.style.width = `${size}px`;
    cell.style.height = `${size}px`;
    cell.style.backgroundColor = 'brown';
    cell.style.padding = '2px';
    cell.style.margin = '2px';
    cell.style.display = 'flex';
    cell.style.borderRadius = `${size/10}px`;

    const coin = document.createElement('button')
    coin.style.borderRadius = `${size/2}px`;
    coin.style.height = `${size}px`;
    coin.style.width = `${size}px`;
    coin.style.borderStyle = 'none';


    if (owner === -1) {
		coin.style.backgroundColor = 'white'
	}
	else if (owner === 0) {
        coin.style.backgroundColor = 'brown'
	}
	else if (owner === 1) {
		coin.style.backgroundColor = 'black'
    }
    
    coin.onclick = () => {
        if (owner === 0) {
            changes = []
            state.matriz[rowIndex][columnIndex] = (state.turn) ? -1 : 1;

            verifyUp({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifyDown({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifyLeft({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifyRight({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifyFirstDiagUp({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifyFirstDiagDown({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifySecondDiagUp({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );
            verifySecondDiagDown({rowIndex,columnIndex,state,changes});
            changes.forEach(change => state.matriz[change[0]][change[1]] = (state.turn) ? -1 : 1 );

            winner = verifyWinner(state)
            if (winner === -1){
                console.log('The winner is white')
            }
            else if (winner === 1){
                console.log('The winner is black')
            }
            else if (winner === 0){
                console.log('Draw')
            }
            console.log(changes);
            state.turn = !state.turn
        }
        root.innerHTML = '';
        render(root, state);
    }

    cell.appendChild(coin);
    return cell;
}


const render = (mount, state) => {
    const { matriz } = state;

    const board = document.createElement('div');
    board.style.backgroundColor = 'black';
    board.style.padding = '25px';
    board.style.overflow = 'auto';
    board.style.width = '550px';
    matriz.map(
        (row, rowIndex) => row.map(
            (owner, columnIndex) => renderCell({rowIndex,columnIndex,owner,state})
            ),
    ).forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex'
        row.forEach(
            cell => rowDiv.appendChild(cell)
        )
        board.appendChild(rowDiv);
        }
    );

    mount.appendChild(board);
};


const APP_STATE = {
    matriz: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,-1,1,0,0,0],
        [0,0,0,1,-1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], //-1 si white and 1 is black
    turn: true  //true is white's turn and false is black's turn
};

const root = document.getElementById('root');

render(root, APP_STATE);
