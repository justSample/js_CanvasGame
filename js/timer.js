
class Timer{

    constructor(){

        this.Time = {
            sec: 0,
            min: 0
        }
    }

    clock() {
        
        this.Time.sec += 1;
        if(this.Time.sec === 60){
            this.Time.min += 1;
            this.Time.sec = 0;
        }

    }
}
