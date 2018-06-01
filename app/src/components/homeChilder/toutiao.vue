<template>
	<div class="content">
		<swiper height="301px" :list="swiperList" :loop="true" :auto="true" :interval="2000"></swiper>
		<marquee :duration="1000" :interval="2000">
          	<marquee-item v-for="(item,index) in marqueeList" :key="index">{{ item.title }}</marquee-item>
        </marquee>
        <panel :list="list" @on-click-item="tapContent"></panel>
        <scroller lock-x @on-scroll="onScroll" style="height:200px;">
      		<div>
      			<p style="text-align:center; padding-top: 40px;" v-show="!topLoing">
			      	<span style="vertical-align:middle;display:inline-block;font-size:30px;">加载中&nbsp;&nbsp;</span>
			      	<inline-loading ></inline-loading>
			    </p>
      		</div>
    	</scroller>
	</div>
</template>

<script>
	
	import {Swiper,Marquee,MarqueeItem,Panel,Scroller,InlineLoading} from 'vux';
	
	export default {
		name: 'Toutiao',
		components:{Swiper,Marquee,MarqueeItem,Panel,Scroller,InlineLoading},
		data () {
		    return {
		      	swiperList:[],
		      	marqueeList:[],
		      	list:[],
		      	topLoing:true,
		      	num:0,
		      	TextList:[]
		    }
		},
		computed:{
			getTextList(){
				let listData = [];
				//判断vuex里面的数据存在
				if(this.$store.state.textList){
					
					let val = this.$store.state.textList
					//存在的时候根据这个值，通过jsonp获取后台数据
					this.$jsonp('https://api.douban.com/v2/book/search',{
						q:val,
						count:5,
						start:0}).then(data=>{
				  			listData = data.books.map(item=>{
				  				return{
				  					title:item.title
				  				}
				  			})
							
							this.getTextList = listData
					})
						
					return listData;
				}
				
			}
		},
		created(){
			this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data => {
	  			//  轮播图里面的数据
		  		this.swiperList = data.focus.filter(function(item,index){
		  			return item.addata == null
		  		}).map(function(item,index){
		  			return{
		  				img:item.picInfo[0].url,
		  				title:item.title,
		  				url:item.link
		  			}
		  		})
		  		
		  		
		  		// 跑马灯里面的数据
		  		this.marqueeList = data.live.filter(function(item,index){
		  			return item.addata == null
		  		}).map(function(item,index){
		  			return {
		  				title:item.title.substring(0,10)+'...'
		  			}
		  		})
		  		
		  		
		  		//  panel组件里面的数据
		  		this.list = data.list.filter(function(item,index){
		  			return item.addata == null&&item.picInfo[0] !== undefined
		  		}).map(function(item,index){
		  			return {
		  				src:item.picInfo[0].url,
		  				title:item.title,
		  				desc:item.digest,
		  				fallbackSrc:item.link
		  			}
		  		})
		  		
			})
		},
		methods:{
			tapContent(item){
				let objInfo = {
					title:item.title,
					src:item.src,
					desc:item.desc
				}
				this.$router.push({path:'/xiangQing',query:objInfo})
				
			},
			onScroll(obj){
				if(this.topLoing&&obj.top >= 30){
					this.topLoing = false;
					this.num++;
					this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/'+(this.num*10)+'-'+((this.num+1)*10-1)+'.html').then(data => {
						
						setTimeout(()=>{
					  		let panelList = data.list.filter(function(item,index){
		  						return item.addata == null&&item.picInfo[0] !== undefined;
					  		}).map(function(item,index){
					  			return {
					  				src:item.picInfo[0].url,
					  				title:item.title,
					  				desc:item.digest,
					  				fallbackSrc:item.link
					  			}
					  		})
					  		
					  		
							let that = this;	  //this的指向		
					  		panelList.forEach(function(item,index){
					  			that.list.push(item);
					  		})
					  		
					  		this.topLoing = true;
				  		},2000)	
					})
				}		
			}
	  	}
	}
</script>

	
<style lang="less">
	.content{
		position: relative;
	}
	.content .list-text{
		position: absolute;
		top:-45px;
		left:280px;
		width:250px;
		z-index: 110;
		padding: 0;
		margin: 0;
	}
	.content .list-text li{
		list-style: none;
		line-height: 40px;
		font-size: 26px;
		border-bottom: #000000 1px solid;
		color: #f60;
		padding: 0;
		margin: 0;
		background: #000;
		border-radius: 10px;
	}
	.vux-swiper-desc{
		font-size: 27px !important;
	}
	.vux-marquee{
		background: #fff !important;
	}
	.weui-media-box .weui-media-box_appmsg{
		height:163px !important;
		
	}
	
	.weui-media-box__hd{
		width:170px !important;
		height:120px !important;
	}
	.weui-media-box__title{
		font-size: 29px !important;
	}
	.weui-media-box__desc{
		font-size: 20px !important;
	}
</style>