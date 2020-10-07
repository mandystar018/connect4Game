class Board {
  constructor () { //<=== No arguments this is because there is only one object for the board property (it will be the same board fot each game)
    this.rows = 6;
    this.columns = 7;
    this.space = this.createSpaces();
  }

  createSpaces(){
    const spaces = [];

    for(let x = 0; x < this.columns; x++){
      const column = [];

      for(let y = 0; y < this.rows; y++){
        const space = new Space(x , y);
        column.push(space);
      }
      spaces.push(column);
    }

    return spaces;
  }
}