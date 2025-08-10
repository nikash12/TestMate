import {atom} from 'recoil'

export interface Project {
  id: number;
  name: string;
  userId: number;
  createdAt: string; 
  updatedAt: string;
}

const projectsAtom = atom<Project[]>({
    key:"projectsAtom",
    default:[]
})

export {projectsAtom}