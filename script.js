
//Create a 16x16 grid that appears when page is launched 
//Make size of grid based on num just in case we change our minds about the size of default grid later based on num
function defaultGrid(num){
    //Select 'container' div
    const container = document.querySelector('.container');
    //Create a div with the class name 'grid'
    const grid = document.createElement('div');
    grid.classList.add("grid");
    //Make the 'grid' div a child of the 'container' div
    container.appendChild(grid);
    //Create the number of divs (cells) needed for the grid (num x num)
    //Give these divs a class name of 'cell'
    //Make the 'cell' divs children of the 'grid' div
    for(j = 0 ; j < num ; j++){
        for(let i = 1 ; i < num + 1 ; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            //Change the style of the grid, so that the num  is the length and width of the grid on all sides (num x num)
            grid.style.gridTemplateColumns = 'repeat(' + num + ', 100px)';
            grid.style.gridTemplateRows = 'repeat(' + num + ', 100px)';
            /*Create an event listener, so that the cells change color when you mouseover them
            cell.addEventListener('mouseover', function(e){
                e.target.style.background = "green";
            });*/
        }
    }
}


defaultGrid(5);