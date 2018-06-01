<template>
	<div>
		
		<div>
			<h3 class="title">{{title}}</h3>
			<img :src="src"  />
			<p class="info">{{desc}}</p>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'XiangQing',
	  	data(){
	  		return{
	  			title:'vzrgv',
	  			src:'111',
	  			desc:'6666'
	  		}
	  	},
	  	components:{},
	  	created(){
	  		this.title = this.$route.query.title;
	  		this.src = this.$route.query.src;
	  		this.desc = this.$route.query.desc;
	  	}
	}
</script>

<style lang="less">
.title{
	padding: 100px 0 30px 0;
	height:50px;
	line-height: 50px;
	text-align: center;
	font-size:30px;
	color: #555;
}
.info{
	padding: 40px;
	line-height: 45px;
	color: #999;
}
</style>