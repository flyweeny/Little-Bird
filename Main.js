//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Land} from "./js/runtime/Land.js";
import {Director} from "./js/Director.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";
import {Tip} from "./js/player/Tip.js";


export class Main {
    constructor() {
        // this.canvas = wx.createCanvas();
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));

    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        //游戏是否结束
        this.director.isGameOver = false;


        this.dataStore
            .put('pencils', [])
            .put('background', BackGround)
            .put('land', Land)
            .put('birds', Birds)
            .put('score', Score)
            .put('tip', Tip)
            .put('startButton', StartButton);
        this.registerEvent();
        //创建铅笔要在游戏逻辑运行之前
        this.director.createPencil();
        this.director.run();
    }

    registerEvent() {
        // wx.onTouchStart(()=>{
        //     if (!this.director.isGameOver) {
        //         this.director.birdsEvent();
        //     } else {
        //         this.init();
        //     }
        // });
        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault();
            if (!this.director.isGameOver) {
                this.director.birdsEvent();
            } else {
                this.init();
            }

        });
    }

}