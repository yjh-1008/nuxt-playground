export interface Champion {
  readonly blurb: string,
  readonly id: string,
  readonly image: Image,
  readonly info: ChampInfo,
  readonly key: number,
  readonly name: string,
  readonly partype: string,
  readonly stats: Object,
  readonly tags: Array<string>,
  readonly title: string,
  readonly version: string,
}

export interface ChampInfoJSON {
  readonly data: Champion,
  readonly format: string,
  readonly type: string,
  readonly version: string,
}

interface Image{
  readonly full: string,
  readonly group: string,
  readonly h: number,
  readonly sprite: string,
  readonly x: number,
  readonly w: number,
  readonly y: number,
}

interface ChampInfo {
  readonly attack: number,
  readonly defence: number,
  readonly difficulty: number,
  readonly magic: number,
}

export interface DetailChampInfo {
  readonly allytips: Array<string>,
  readonly blurb: string,
  readonly enemytips: Array<string>
  readonly id: string,
  readonly image: Image,
  readonly info: ChampInfo,
  readonly key: string,
  readonly lore: string,
  readonly name: string,
  readonly partype: string,
  readonly passive: Skill,
  readonly recomended: Array<string>,
  readonly skins: Array<Object>,
  readonly stats: Array<Object>,
  readonly tags: Array<string>
}


interface Skill {
  description: string,
  iamge: Image,
  name: string,
}
