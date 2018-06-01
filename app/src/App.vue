<template>
  	<div id="app">
  		<view-box>
			<x-header slot="header" class="header" :left-options="{showBack:false}">
	    		<div slot="left" class="left">
	    			<img src="./assets/wangyi.png"/>
	    		</div>
	    		<div class="form">
	    			<span class="search"></span>
	    			<input type="text" placeholder="刘强东" v-model="textCont"></input>
	    		</div>
	    		<div slot="right">
	    			<img src="./assets/24.png"/>
	    		</div>
	    </x-header>		
	    	<router-view style="margin-top: 78px;"/>
	    	<tabbar slot="bottom">
		        <tabbar-item selected link="/">
					<span slot="icon" class="_index"></span>
	        		<span slot="label">首页</span>
		        </tabbar-item>
		      	<tabbar-item  link="/vidoe">
		        	<span slot="icon" class="vidoe"></span>
	        		<span slot="label">视频</span>
		      	</tabbar-item>
		      	<tabbar-item  link="/zhibo">
		        	<span slot="icon" class="zhibo"></span>
	          		<span slot="label">直播</span>
		      	</tabbar-item>
		      	<tabbar-item link="myInfo">
		        	<span slot="icon" class="my"></span>
	        		<span slot="label">我</span>
		      	</tabbar-item>
		    </tabbar>
	    	
    	</view-box>
    		
  </div>
</template>

<script>
	
	import {ViewBox,XHeader,Tab,TabItem,Tabbar,TabbarItem,XInput,Icon} from 'vux';
	
export default {
  	name: 'App',
  	components:{ViewBox,XHeader,Tab,TabItem,Tabbar,TabbarItem,XInput,Icon},
  	data(){
  		return{
  			textCont:'',
  		}
  	},
  	watch:{
		textCont(val){
			// 当输入框的内容发生改变，vuex里面的数据页发生改变
			if(val.trim()){
				this.$store.commit('changTextList',val)
			}
		}
  	}
  
}
</script>

<style lang="less">
	html,body{
		margin: 0;
		padding: 0;
		width:100%;
		height:100%;
		overflow-x: hidden;
		font-size:24px;
	}
	a{
		text-decoration: none;
	}
	input{
		border: none;
		outline: none;
	}
	img{
		width:100%;
		height:100%;
		vertical-align: top;
		border: none;
	}
	#app {
  		height:100%;
  		font-size: 24px;
  		.vux-header{
  			padding: 0;
  		}
  		.header{
		  	height:78px;
		  	background: #e22829;
		  	position: fixed;
		  	top:0;
		  	width:100%;
		  	z-index: 22;
		  	left:0;
		  	.left{
		  		width:71px;
		  		padding-top: 10px;
		  		height:30px;
		  		top:0;
		  		float: left;
		  	}
		}
		.vux-header-title{
	  		width:442px;
	  		height:56px;
	  		margin: 0;
	  		margin-left: 125px;
	  		padding: 11px;
	  		.form{
	  			background: #eb5557;
	  			height:40px;
	  			border-radius: 20px;
	  			padding:16px 0 0 136px;
	  			position:relative;
	  			.search{
	  				float: left;
	  				width:27px;
	  				height:27px;
	  				background: url(assets/search.png)no-repeat;
	  			}
	  			input{
	  				float:left;
	  				width:217px;
	  				height:26px;
	  				margin: 0;
	  				background: #eb5557;
	  				font-size: 26px;
	  				padding-left: 5px;
	  			}
	  		}
	  	}
	  	.vux-header-right{
	  		width:41px;
	  		height:60px;
	  		margin: 0;
	  		top:0;
	  		padding: 17px 0 0 44px;
	  		img{
	  			width:40px;
	  			height:40px;
	  		}
	  	}
	  	
	  	.weui-tabbar{
		  	position: absolute;
		  	left:0;
		  	bottom: 0;
		  	height:78px;
		  	z-index: 30;
		  	.weui-tabbar__label span{
		  		font-size: 17px;
		  	}
		}
	  	.weui-tabbar__label.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, 
		.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, 
		.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
			color: red !important;
		}
		.weui-tabbar__item.weui-bar__item_on ._index{
			background: url(./assets/index.png) !important;
			width: 100%;
			height:100%;
			float: left;
			background-size:100% 100% !important;
		}
		._index{
			background: url(./assets/index_1.png) !important;
			width: 100%;
			height:100%;
			float: left;
			margin-left: 2px;
			background-size:100% 100% !important;
		}

		.weui-tabbar__item.weui-bar__item_on .vidoe{
			background: url(./assets/sp_1.png) !important;
			width: 100%;
			height:100%;
			margin-left: 2px;
			float: left;
			background-size:100% 100% !important;
		}
		.vidoe{
			background: url(./assets/sp.png) !important;
			width: 100%;
			height:100%;
			float: left;
			margin-left: 2px;
			background-size:100% 100% !important;
		}

		.weui-tabbar__item.weui-bar__item_on .zhibo{
			background: url(./assets/zhibo_1.png) !important;
			width: 100%;
			height:100%;
			float: left;
			margin-left: 2px;
			background-size:100% 100% !important;
		}
		.zhibo{
			background: url(./assets/zhibo.png) !important;
			width: 100%;
			height:100%;
			float: left;
			margin-left: 2px;
			background-size:100% 100% !important;
		}

		.weui-tabbar__item.weui-bar__item_on .my{
			background: url(./assets/my_1.png) !important;
			width: 100%;
			height:100%;
			margin-left: 2px;
			float: left;
			background-size:100% 100% !important;
		}
		.my{
			background: url(./assets/my.png) !important;
			width: 100%;
			height:100%;
			float: left;
			margin-left: 2px;
			background-size:100% 100% !important;
		}
	}
</style>
