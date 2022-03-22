
export interface Needs {
  energy: number, // 0-100?
  food: number, // 0-100?
  fun: number, // 0-100?
}

export interface Stats {
  str: number, // 0-10
  dex: number, // 0-10
  con: number, // 0-10
  wis: number, // 0-10
  chr: number, // 0-10
}

export interface UserData {
  name: string,
  age: number, // In Weeks?
  money: number,
  mood: number,
  needs: Needs,
  stats: Stats,
}

function CreateNewNeeds(): Needs {
  return {
    energy: 50,
    food: 50,
    fun: 50,
  };
}

function CreateNewStats(): Stats {
  const STAT_POINT_CAP = 30;
  const list = [0, 0, 0, 0, 0];
  for (let i=0; i<STAT_POINT_CAP; i++) {
    const randomTarget = ~~(list.length*Math.random());
    if (list[randomTarget] === 10) {
      i--;
      continue;
    }
    list[randomTarget] += 1;
  }
  return {
    str: list[0],
    dex: list[1],
    con: list[2],
    wis: list[3],
    chr: list[4],
  };
}

export function CreateNewUserData(name: string): UserData {
  return {
    name,
    age: 18,
    money: 0,
    mood: 50,
    needs: CreateNewNeeds(),
    stats: CreateNewStats(),
  };
}