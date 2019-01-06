//积分器类
import {DataStore} from "../base/DataStore.js";

export class Tip {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.tip = '';

    }

    draw() {
        const number = DataStore.getInstance().get('score').scoreNumber;
        if (number <= 3) {
            this.tip = '呵呵~菜鸟';
        } else if(number > 3 && number < 10) {
            this.tip = '跟我比差远了..';
        } else {
            this.tip = '哎哟，不错哟！';
        }

        this.ctx.font = '32px Arial';
        this.ctx.fillStyle = '#0e03ff';
        this.ctx.fillText(this.tip, window.innerWidth/5, window.innerHeight/3, 1000);
    }
}