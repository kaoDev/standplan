import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";


export const createStateManager = () => {
      
    // BehaviorSubjects for Modal
    const ModalOpen = new BehaviorSubject(false);
    const ModalTarget = new BehaviorSubject("");
    
    /* 
    const stands = standsJson;
    const exhibitors = exhibitorsJson;
    

    //Count Exhibitors
    const exhibitorsCount = exhibitors.pipe(map(exhibitors => exhibitors.length))
    */
    
    return {
        ModalOpen,
        ModalTarget,
        /* 
        stands,
        exhibitors,
        exhibitorsCount
        */
        
    };
};