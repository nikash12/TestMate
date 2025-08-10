import { atomFamily} from 'recoil'

export interface Table {
  id: number;
  name: string;
  moduleId: number;
  createdAt: string;
  updatedAt: string;
}

const tablesAtom = atomFamily<Table,number>({
    key:"tablesAtom",
    default:{
        id: 0,
        name:"",
        moduleId:0,
        createdAt: "",
        updatedAt: ""
    }
})

export { tablesAtom }