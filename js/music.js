//https://autumnfish.cn/search?keywords
//https://autumnfish.cn/song/url
//https://autumnfish.cn/song/detail
//https://autumnfish.cn/comment/hot?type=0
//https://autumnfish.cn/mv/url?id=...
var app = new Vue({
    el:"#music-wrap",
    data:{
        // 关键字
        keywords:"",
        // 歌曲列表
        musicList:[],
        // 歌曲地址
        musicUrl:'',
        // 评论
        hotComment:[],
        // MV
        mvUrl:"",
        isShow:false,
        // 封面
        musicCover:"",
        // 动画
        isPlaying:false,
    },
    methods:{
        // 搜索歌曲
        searchMusic:function(){
            let that = this;
            axios.get("https://autumnfish.cn/search?keywords="+that.keywords)
            .then(function(res){
                // console.log(res);
                that.musicList = res.data.result.songs;
            })
        },
        // 播放歌曲
        playMusic:function(musicId){
            let that = this;
            // console.log(musicId);
            // 获取歌曲地址
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(res){
                // console.log(res);
                that.musicUrl = res.data.data[0].url;
            })
            // 歌曲封面
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
            .then(function(res){
                // console.log("封面",res);
                // console.log(res.data.songs[0].al.picUrl);
                that.musicCover = res.data.songs[0].al.picUrl;
            },function(err){
                console.log(err);
            })

            // 评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
            .then(function(res){
                // console.log(res);
                that.hotComment = res.data.hotComments;
            })                   
        },
        // MV获取
        getMV:function(mvid){
            let that = this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvid)
            .then(function(res){
                console.log(res.data.data.url);
                that.mvUrl = res.data.data.url;
            });
            this.isShow = true;
        },
        hideMask:function(){
            this.isShow = false;
            this.mvUrl="";
        },
        // 动画播放
        playFun:function(){
            this.isPlaying = true;
        },
        // 动画停止
        pauseFun:function(){
            this.isPlaying = false;
        }
    }
})