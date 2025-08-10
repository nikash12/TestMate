import { atomFamily} from 'recoil'

export interface Module {
  id: number;
  name: string;
  projectId: number;
  createdAt: string;
  updatedAt: string;
}

const modulesAtom = atomFamily<Module,number>({
    key:"modulesAtom",
    default:{
        id: 0,
        name:"",
        projectId:0,
        createdAt: "",
        updatedAt: ""
    }
})

export { modulesAtom }