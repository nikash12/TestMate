import { atomFamily} from 'recoil'

const tablesAtom = atomFamily({
    key:"tablesAtom",
    default:{
        name:"",
        moduleId:""
    }
})

export { tablesAtom }