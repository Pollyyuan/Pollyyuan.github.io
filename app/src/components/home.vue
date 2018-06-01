<template>
  	<div class="home">
    		<scroller :lock-y="true">
    				<div>
	    					<tab bar-active-color="#999">
				    				<tab-item v-for="(item,index) in tabList" :selected="index == 0" :key="item.title">
					    					 {{item.title}}
				    				</tab-item>
	    					</tab>
    				</div>
    		</scroller>
    		<router-view/>
  	</div>
</template>

<script>
	
		import {Tab,TabItem,Scroller} from 'vux';
	
		let tabList = [{
					title:'头条',
					path:'/home/toutiao'
			},
			{
					title:'视频',
					path:'/home/shiping'
			},
			{
					title:'新时代',
					path:'/home/xinshidai'
			},
			{
					title:'娱乐',
					path:'/home/yule'
			},
			{
					title:'体育',
					path:'/home/tiyu'
			},
			{
					title:'要问',
					path:'/home/yaowen'
			},
			{
					title:'段子',
					path:'/home/duanzi'
			}]
	
export default {
  name: 'Home',
  components:{
  	Tab,
  	TabItem,
  	Scroller
  },
  data () {
    return {
      tabList,
    }
  }
}
</script>


<style lang="less">
		.vux-tab-container{
				height:61px;
				
		}
		.vux-tab-ink-bar{
				bottom:0;
				background: #6D6D6D;
		}
		.vux-tab .vux-tab-item{
				font-size: 24px !important;
				color: #666;
			
		}
		.vux-tab .vux-tab-item.vux-tab-selected{
				font-size: 27px;
				color: #111 !important;
		}
</style>
