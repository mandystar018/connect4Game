class Board {
  constructor () { //<=== No arguments this is because there is only one object for the board property (it will be the same board fot each game)
    this.space = [];
    this.row = 6;
    this.columns = 7;
  }
}